<template>
    <div class="container">
        <div>
<!--            <test-component class="container__test"-->
<!--                            :title="'teeeest'"/>-->
           <short-info/>
        </div>
    </div>
</template>

<script>
    import ShortInfo from '../componets/shortInfo/index';

    import TestComponent from '../componets/test/index';

    export default {
        name: 'Index',

        components: {
            TestComponent,
            ShortInfo,
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

<style>
    .container {
        /*margin: 0 auto;*/
        /*min-height: 100vh;*/
        /*display: flex;*/
        /*justify-content: center;*/
        /*align-items: center;*/
        /*text-align: center;*/
    }
</style>
