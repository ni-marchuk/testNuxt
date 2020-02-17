<template>
    <div>
        <!--            <test-component class="container__test"-->
        <!--                            :title="'teeeest'"/>-->
        <short-info :main="main"
                    :statistics="statistics"
        />
        <services-box/>
        <work-scheme/>
        <advantages/>
    </div>
</template>

<script>
    import ShortInfo from '../componets/shortInfo/index';
    import ServicesBox from '../componets/servicesBox/index';
    import WorkScheme from '../componets/workScheme/index'
    import Advantages from '../componets/advantages/index'

    import TestComponent from '../componets/test/index';

    export default {
        name: 'Index',

        components: {
            TestComponent,
            ShortInfo,
            ServicesBox,
            WorkScheme,
            Advantages,
        },

        data() {
            return {
                main: null,
                statistics: null,
                services: null,
                benefits: null,
                workSchemes: null,
            }
        },

        async asyncData({app}) {
            let main = null;
            let statistics = null;
            let services = null;
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

            const getServices = async () => {
                await app.$axios.$get("services")
                    .then(response => services = response)
                    .catch(err => console.log(err));
            };

            promiseList.push(getServices());

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

            return {main, statistics, services, benefits, workSchemes};

        },

        methods: {
//
        }
    }
</script>

<style lang="scss">

    .services {
        margin-bottom: 100px;
        padding-top: 30px;
        padding-bottom: 50px;
        background-color: #EEEEEE;

        @include below($lg-desktop) {
            margin-bottom: 80px;
        }
        @include below($lg-tablet) {
            margin-bottom: 50px;
        }
    }

    .workScheme {
        margin-bottom: 50px;
    }

    .advantages {
        margin-bottom: 100px;

        @include below($lg-desktop) {
            margin-bottom: 80px;
        }
        @include below($lg-tablet) {
            margin-bottom: 50px;
        }

    }

</style>
