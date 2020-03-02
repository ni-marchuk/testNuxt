export const getDefaultState = () => {
    return {
        PAGE_INFO: {},
        SERVICES: {},
    }
};

export const state = getDefaultState();

export const getters = {
    PAGE_INFO: state => {
        return state.PAGE_INFO
    },

    SERVICES: state => {
        return state.SERVICES
    },


    GET_SERVIS_CONTENT: state => (servisLink => {
        if (state.SERVICES) {
            let services = state.SERVICES;
            return services.find(servis => {
                if (servis && String(servis.link) === String(servisLink)) {
                    return servis;
                } else {
                    console.log('getServisError')
                }
            });
        }
    })

};

export const mutations = {
    GET_PAGE_INFO(state, pageInfo) {
        state.PAGE_INFO = pageInfo;
    },

    GET_SERVICES(state, services) {
        state.SERVICES = services;
    },

    resetState(state) {
        Object.assign(state, getDefaultState())
    },
};

export const actions = {
    resetServicesState({commit}) {
        commit('resetState');
    },
};
