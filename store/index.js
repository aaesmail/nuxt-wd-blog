import Vuex from "vuex";
import Cookie from "js-cookie";

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
      token: null
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      },
      addPost(state, post) {
        state.loadedPosts.push(post);
      },
      editPost(state, editedPost) {
        const postIndex = state.loadedPosts.findIndex(
          post => post.id === editedPost.id
        );

        state.loadedPosts[postIndex] = editedPost;
      },
      setToken(state, token) {
        state.token = token;
      },
      clearToken(state) {
        state.token = null;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return context.app.$axios
          .$get("/posts.json")
          .then(data => {
            const postsArray = [];
            for (const key in data) {
              postsArray.push({
                ...data[key],
                id: key
              });
            }

            vuexContext.commit("setPosts", postsArray);
          })
          .catch(error => context.error(error));
      },
      addPost(vuexContext, post) {
        const createdPost = { ...post, updatedDate: new Date() };
        return this.$axios
          .$post("/posts.json?auth=" + vuexContext.state.token, createdPost)
          .then(data => {
            vuexContext.commit("addPost", {
              ...createdPost,
              id: data.name
            });
          })
          .catch(error => console.log(error));
      },
      editPost(vuexContext, editedPost) {
        return this.$axios
          .$put(
            "/posts/" + editedPost.id + ".json?auth=" + vuexContext.state.token,
            editedPost
          )
          .then(data => {
            vuexContext.commit("editPost", editedPost);
          })
          .catch(error => console.log(error));
      },
      setPosts({ commit }, posts) {
        commit("setPosts", posts);
      },
      authenticateUser(vuexContext, authData) {
        const authUrl =
          (authData.isLogin
            ? "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="
            : "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=") +
          process.env.fbAPIKey;

        return this.$axios
          .$post(authUrl, {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
          })
          .then(result => {
            const expirationDate =
              new Date().getTime() + +result.expiresIn * 1000;

            vuexContext.commit("setToken", result.idToken);

            localStorage.setItem("token", result.idToken);
            localStorage.setItem("tokenExpiration", expirationDate);

            Cookie.set("jwt", result.idToken);
            Cookie.set("expirationDate", expirationDate);

            // return this.$axios.$post("http://localhost:3000/api/track-data", {
            //   data: "Authenticated!"
            // });
          })
          .catch(error => console.log(error));
      },
      initAuth(vuexContext, req) {
        let token, expirationDate;

        if (req) {
          if (!req.headers.cookie) return;

          const jwtCookie = req.headers.cookie
            .split(";")
            .find(c => c.trim().startsWith("jwt="));

          if (!jwtCookie) return;

          token = jwtCookie.split("=")[1];

          const jwtExpirationDate = req.headers.cookie
            .split(";")
            .find(c => c.trim().startsWith("expirationDate="))
            .split("=")[1];

          expirationDate = jwtExpirationDate;
        } else if (process.client) {
          token = localStorage.getItem("token");
          expirationDate = localStorage.getItem("tokenExpiration");
        }

        if (!token || new Date().getTime() > +expirationDate) {
          vuexContext.dispatch("logout");
          return;
        }

        vuexContext.commit("setToken", token);
      },
      logout(vuexContext) {
        vuexContext.commit("clearToken");

        Cookie.remove("jwt");
        Cookie.remove("expirationDate");

        if (process.client) {
          localStorage.removeItem("token");
          localStorage.removeItem("tokenExpiration");
        }
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      },
      isAuthenticated(state) {
        return state.token != null;
      }
    }
  });
};

export default createStore;
