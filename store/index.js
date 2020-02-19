export const state = () => ({
    SETTINGS: {},
});

export const getters = {
    SETTINGS: state => {
        return state.SETTINGS
    },
};

export const mutations = {
    SET_SETTINGS(state, settings) {
        state.SETTINGS = settings;
    },
};

export const actions = {
    async nuxtServerInit({commit, state}, {req}) {
        let res = await this.$axios.$get('/settings')
        commit('SET_SETTINGS', res)
    },
};