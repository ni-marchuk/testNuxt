export default async function ({store, app}) {
    let pageInfo = null;
    let services = null;
    let promiseList = [];

    const getPageInfo = async () => {
        await app.$axios.$get("pageInfo?page=services")
            .then(response => pageInfo = response)
            .catch(err => console.log(err));
    };

    promiseList.push(getPageInfo());

    const getServices = async () => {
        await app.$axios.$get("services")
            .then(response => services = response)
            .catch(err => console.log(err));
    };

    promiseList.push(getServices());

    await Promise.all(promiseList);

    store.commit('services/GET_PAGE_INFO', pageInfo);
    store.commit('services/GET_SERVICES', services);

}