import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const getDefaultState = () => {
    return {
        PAGE_INFO: {},
        SERVICES: {},
    }
};

const store = () => new Vuex.Store({

    state: getDefaultState(),

    getters: {
        SETTINGS: state => {
            return state.SETTINGS
        },

        //
        PAGE_INFO: state => {
            return state.PAGE_INFO
        },

        SERVICES: state => {
            return state.SERVICES
        },
    },

    mutations: {
        SET_SETTINGS(state, settings) {
            state.SETTINGS = settings;
        },

        //
        GET_PAGE_INFO(state, pageInfo) {
            state.PAGE_INFO = pageInfo;
        },
        GET_SERVICES(state, services) {
            state.SERVICES = services;
        },

        resetState (state) {
            Object.assign (state, getDefaultState())
        },
    },

    actions: {
        async nuxtServerInit({commit, state}, {req}) {
            let res = await this.$axios.$get('/settings')
            commit('SET_SETTINGS', res)
        },

        //
        resetCartState ({commit}) {
            commit ('resetState');
        },

    },
//https://medium.com/@Taha_Shashtari/reset-vuex-module-state-like-a-pro-1acb7f8d9e21
});

export default store