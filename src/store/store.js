import Vue from 'vue'
import Vuex from 'vuex'
import api from "../api";

Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        token: localStorage.getItem('access_token') || null,
    },
    getters: {
        loggedIn(state) {
            return state.token !== null
        }
    },
    mutations: {
        retrieveToken(state, token) {
            state.token = token
        },
        destroyToken(state) {
            state.token = null
        }
    },
    actions: {
        retrieveToken(context, credentials) {
            return new Promise(((resolve, reject) => {
                api
                    .post('/authorization/login', {
                        login: credentials.login,
                        password: credentials.password
                    })
                    .then(res => {
                        const token = res.data.entity;
                        localStorage.setItem('access_token', token);
                        context.commit('retrieveToken', token);
                        resolve(res);
                    })
                    .catch(err => {
                        reject(err);
                    })
            }))
        },
        destroyToken(context) {
            localStorage.removeItem('access_token');
            context.commit('destroyToken');
        }
    }
})