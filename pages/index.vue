<template>
    <div>
        <!--            <test-component class="container__test"-->
        <!--                            :title="'teeeest'"/>-->
        <short-info/>
        <services/>
        <work-scheme/>
    </div>
</template>

<script>
    import ShortInfo from '../componets/shortInfo/index';
    import Services from '../componets/services/index';
    import WorkScheme from '../componets/workScheme/index'

    import TestComponent from '../componets/test/index';

    export default {
        name: 'Index',

        components: {
            TestComponent,
            ShortInfo,
            Services,
            WorkScheme,
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
    }

</style>
