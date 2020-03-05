<template>
    <div class="services">
        <bread-crumbs class="services__breadCrumbs"
                      :breadcrumbs="breadcrumbs"
        />
        <services-box class="services__servicesBox"
                      :pageInfo="pageInfo"
                      :services="services"
        />
    </div>
</template>

<script>
    import BreadCrumbs from "../../componets/breadcrumbs/breadcrumbs"
    import ServicesBox from "../../componets/servicesBox/index"
    import Meta from '../../mixins/meta';

    export default {
        name: "Index",

        components: {
            BreadCrumbs,
            ServicesBox,
        },

        mixins: [Meta],
        middleware: ['services'],

        async asyncData({app}) {
            let pageInfo = null;
            let metaInformation = {};

            const getPageInfo = async () => {
                await app.$axios.$get("pageInfo?page=services")
                    .then((response) => {
                        metaInformation = {
                            ogDescription: response.ogDescription || null,
                            ogThumb: response.ogThumb || null,
                            ogThumb2x: response.ogThumb2x || null,
                            ogTitle: response.ogTitle || null,
                            metaKeyword: response.metaKeyword || null,
                            metaDescription: response.metaDescription || null,
                        };
                        pageInfo = response;
                    })
                    .catch(err => console.log(err));
            };
            await getPageInfo();
            return {pageInfo, metaInformation};
        },

        data() {
            return {
                pageInfo: null,
                metaInformation: {},

                breadcrumbs: [
                    {
                        name: '/',
                        text: 'Главная /',
                    },
                    {
                        name: '/services',
                        text: 'Услуги',
                    },
                ],
            }
        },

        computed: {
            services() {
                return this.$store.getters['services/SERVICES'];
            },

            // pageInfo() {
            //     return this.$store.getters['services/PAGE_INFO'];
            // },
        },

        // beforeDestroy() {
        //     console.log('destroyeDDDD');
        //     this.$store.dispatch('services/resetServicesState');
        // },

    }
</script>

<style lang="scss">

    .services {

        &__servicesBox {
            margin-bottom: 150px;
        }
    }
</style>

