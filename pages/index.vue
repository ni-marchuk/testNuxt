<template>
    <div>
        <!--            <test-component class="container__test"-->
        <!--                            :title="'teeeest'"/>-->
        <short-info :main="main"
                    :statistics="statistics"
        />
        <services/>
        <work-scheme/>
        <advantages/>
    </div>
</template>

<script>
    import ShortInfo from '../componets/shortInfo/index';
    import Services from '../componets/servicesBox/index';
    import WorkScheme from '../componets/workScheme/index'
    import Advantages from '../componets/advantages/index'

    import TestComponent from '../componets/test/index';

    export default {
        name: 'Index',

        components: {
            TestComponent,
            ShortInfo,
            Services,
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
            const main = await app.$axios.$get("pageInfo?page=index");
            const statistics = await app.$axios.$get('statistics');
            const services = await app.$axios.$get('services');
            const benefits = await app.$axios.$get('benefits');
            const workSchemes = await app.$axios.$get('workSchemes');
            if (main && statistics && services && benefits && workSchemes) {
                return {main: main, statistics: statistics, services: services, benefits: benefits, workSchemes: workSchemes};
            } else {
                console.log('statistic, about, services, benefits, workSchemes Error')
            }
        },

        methods: {
            createObject() {
                let object = {};
                object.property = {};
                object.property.anotherProperty = 123;

                console.log(object);
            }
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
