<template>
    <div>
        <!--            <test-component class="container__test"-->
        <!--                            :title="'teeeest'"/>-->
        <short-info/>
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

        async asyncData({app}) {

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
