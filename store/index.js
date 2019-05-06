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
            },
            addPost(state, post) {
                state.loadedPosts.push(post);
            },
            editPost(state, editedPost) {
                const postIndex = state.loadedPosts.findIndex(post => post.id === editedPost.id);
                state.loadedPosts[postIndex] = editedPost;
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
            },
            addPost(vuexContext, post) {
                const createdPost = {
                    ...post,
                    updatedDate: new Date()
                };
                return axios.post('https://nuxt-blog-ecb77.firebaseio.com/posts.json', createdPost)
                .then(result => {
                  console.log(result);
                  vuexContext.commit('addPost', {...post, id: result.data.name});
                })
                .catch(error => {
                  console.log(error);
                })
            },
            editPost(vuexContext, editedPost) {
                console.log(editedPost);
                return axios.put('https://nuxt-blog-ecb77.firebaseio.com/posts/' + editedPost.id + '.json', editedPost)
                .then(res => {
                    console.log(res);    
                    vuexContext.commit('editPost', res.data);     
                })
                .catch(error => {
                    console.log(error);
                })
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