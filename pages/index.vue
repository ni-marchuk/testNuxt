<template>
    <div class="main">
        <short-info class="main__shortInfo"
                    :pageInfo="pageInfo"
                    :statistics="statistics"/>
        <services-box class="main__servicesBox"
                      :services="services"
                      :pageInfo="pageInfoServices"/>
        <work-scheme class="main__workScheme"
                     :workSchemes="workSchemes"/>
        <advantages class="main__advantages"
                    :benefits="benefits"/>
    </div>
</template>

<script>
    import ShortInfo from '../componets/shortInfo/index';
    import ServicesBox from '../componets/servicesBox/index';
    import WorkScheme from '../componets/workScheme/index';
    import Advantages from '../componets/advantages/index';
    import Meta from '../mixins/meta';

    export default {
        name: 'Index',
        mixins: [Meta],

        components: {
            ShortInfo,
            ServicesBox,
            WorkScheme,
            Advantages,
        },

        middleware: ['services'],

        data() {
            return {
                pageInfo: null,
                statistics: null,
                benefits: null,
                workSchemes: null,
                metaInformation: {},
            }
        },

        async asyncData({app}) {
            let pageInfo = null;
            let statistics = null;
            let benefits = null;
            let workSchemes = null;
            let metaInformation = {};

            let promiseList = [];

            const getPageInfo = async () => {
                await app.$axios.$get("pageInfo?page=index")
                    .then((response) => {
                        //записать в metaInformation props кроме перечисленныех
                        // let {h1,slider_mini_title,slider_text,slider_title,name,title, ...metaInformation} = response;
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
            promiseList.push(getPageInfo());

            const getStatistics = async () => {
                await app.$axios.$get("statistics")
                    .then(response => statistics = response)
                    .catch(err => console.log(err));
            };
            promiseList.push(getStatistics());

            const getBenefits = async () => {
                await app.$axios.$get("benefits")
                    .then(response => benefits = response)
                    .catch(err => console.log(err));
            };
            promiseList.push(getBenefits());

            const getWorkSchemes = async () => {
                await app.$axios.$get("workSchemes")
                    .then((response) => {
                        workSchemes = Object.assign({}, response);
                        workSchemes.steps = response.steps.map((item, index) => {
                            return Object.assign({
                                isActive: null,
                                isFullActive: null,
                            }, item)
                        })
                    })
                    .catch(err => console.log(err));
            };
            promiseList.push(getWorkSchemes());

            await Promise.all(promiseList);
            return {pageInfo, statistics, benefits, workSchemes, metaInformation};
        },

        computed: {
            services() {
                return this.$store.getters['services/SERVICES'];
            },

            pageInfoServices() {
                return this.$store.getters['services/PAGE_INFO'];
            },
        },

        // beforeDestroy() {
        //     console.log('destroy page экшн для очистки стейта с сервисами');
        //     this.$store.dispatch('services/resetServicesState');
        // },
    }
</script>

<style lang="scss">

    .main {

        &__shortInfo {

        }

        &__servicesBox {
            padding-top: 50px;
            padding-bottom: 100px;
            background-color: #F8F8F8;

            @include below($md-tablet) {
                padding-top: 20px;
                padding-bottom: 50px;
            }
        }

        &__workScheme {
            padding-top: 50px;
            margin-bottom: 50px;
        }

        &__advantages {
            margin-bottom: 100px;

            @include below($lg-desktop) {
                margin-bottom: 80px;
            }
            @include below($lg-tablet) {
                margin-bottom: 50px;
            }
        }
    }


</style>
