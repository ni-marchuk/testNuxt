import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = () => new Vuex.Store({


    state: {
        SETTINGS: {},
    },

    getters: {
        SETTINGS: state => {
            return state.SETTINGS
        },
    },

    mutations: {
        SET_SETTINGS(state, settings) {
            state.SETTINGS = settings;
        },
    },

    actions: {
        async nuxtServerInit({commit, state}, {req}) {
            let res = await this.$axios.$get('/settings')
            commit('SET_SETTINGS', res)
        },
    },

});

export default store