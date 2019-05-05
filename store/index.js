import Vuex from 'vuex';
import axios from 'axios';

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: [],
        },
        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts;
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return axios.get('https://nuxt-blog-ecb77.firebaseio.com/posts.json')
                .then(result => {
                    const postsArr = [];
                    for (let key in result.data) {
                        postsArr.push({...result.data[key], id: key});
                    }
                    vuexContext.commit('setPosts', postsArr);
                })
                .catch(error => context.error(error))
            },
            setPosts(vuexContext, posts) {
                vuexContext.commit('setPosts', posts);
            }
        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts;
            }
        }
    });
}

export default createStore;