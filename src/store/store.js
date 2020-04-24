import Vue from 'vue'
import Vuex from 'vuex'
import api from "../api";

Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        token: localStorage.getItem('access_token') || null,
        beerRecipes: [],
        yeasts: []
    },
    getters: {
        loggedIn(state) {
            return state.token !== null;
        },
        token(state) {
            return state.token;
        },
        recipes(state) {
            return state.beerRecipes;
        },
        yeasts(state) {
            return state.yeasts;
        }
    },
    mutations: {
        retrieveToken(state, token) {
            state.token = token;
        },
        destroyToken(state) {
            state.token = null;
        },
        retrieveRecipes(state, recipes) {
            state.beerRecipes = recipes;
        },
        addRecipe(state, recipe) {
            state.beerRecipes.push(recipe);
        },
        removeRecipe(state, recipeId) {
            state.beerRecipes = state.beerRecipes.filter(recipe => recipe.id !== recipeId);
        },
        retrieveYeasts(state, yeasts) {
            state.yeasts = yeasts;
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
        destroyToken({commit}) {
            localStorage.removeItem('access_token');
            commit('destroyToken');
        },
        refreshRecipes({commit}) {
            return new Promise(((resolve, reject) => {
                api
                    .get("brewings")
                    .then(res => {
                        commit('retrieveRecipes', res.data.entity);
                        resolve(res);
                    })
                    .catch(err => {
                        reject(err);
                    })
            }))
        },
        addRecipe(context, recipe) {
            return new Promise(((resolve, reject) => {
                api
                    .post("brewings", recipe)
                    .then(res => {
                        context.commit('addRecipe', res.data.entity);
                        resolve(res);
                    })
                    .catch(err => {
                        reject(err);
                    })
            }))
        },
        removeRecipe(context, recipeId) {
            context.commit('removeRecipe', recipeId);
            return new Promise(((resolve, reject) => {
                api
                    .delete("brewings/" + recipeId)
                    .then(res => {
                        resolve(res);
                    })
                    .catch(err => {
                        reject(err);
                    })
                    .finally(() => {
                        context.dispatch('refreshRecipes');
                    })
            }))
        },
        refreshYeasts({commit}) {
            return new Promise(((resolve, reject) => {
                api
                    .get("yeasts")
                    .then(res => {
                        var yeasts = res.data.entity;
                        commit('retrieveYeasts', yeasts);
                        resolve(yeasts);
                    })
                    .catch(err => {
                        reject(err);
                    })
            }))
        },
    }
})