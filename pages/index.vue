<template>
    <div class="main">
        <short-info class="main__shortInfo"
                    :main="main"
                    :statistics="statistics"
        />
        <services-box class="main__servicesBox"
                      :services="services"
                      :pageInfo="pageInfo"
        />
        <work-scheme class="main__workScheme"/>
        <advantages class="main__advantages"/>
    </div>
</template>

<script>
    import ShortInfo from '../componets/shortInfo/index';
    import ServicesBox from '../componets/servicesBox/index';
    import WorkScheme from '../componets/workScheme/index'
    import Advantages from '../componets/advantages/index'

    export default {
        name: 'Index',

        components: {
            ShortInfo,
            ServicesBox,
            WorkScheme,
            Advantages,
        },

        middleware: ['services'],

        data() {
            return {
                main: null,
                statistics: null,
                benefits: null,
                workSchemes: null,
            }
        },

        async asyncData({app}) {
            let main = null;
            let statistics = null;
            let benefits = null;
            let workSchemes = null;

            let promiseList = [];

            const getMain = async () => {
                await app.$axios.$get("pageInfo?page=index")
                    .then(response => main = response)
                    .catch(err => console.log(err));
            };

            promiseList.push(getMain());

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
                    .then(response => workSchemes = response)
                    .catch(err => console.log(err));
            };

            promiseList.push(getWorkSchemes());

            await Promise.all(promiseList);

            console.log(workSchemes);
            return {main, statistics, benefits, workSchemes};

        },

        computed: {

            services() {
                return this.$store.getters['services/SERVICES'];
            },

            pageInfo() {
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
