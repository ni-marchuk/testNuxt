<template>
    <div class="executiveSlug">
        <bread-crumbs class="executiveSlug__breadCrumbs"/>
        <executive-production class="executiveSlug__executiveProduction"/>
    </div>
</template>

<script>
    import BreadCrumbs from "../../componets/breadcrumbs/breadcrumbs"
    import ExecutiveProduction from "../../componets/executiveProduction/index"

    export default {
        name: "Executive",

        components: {
            BreadCrumbs,
            ExecutiveProduction,
        }
    }
</script>

<style lang="scss">
    .servicesSlug {

        /* &__breadCrumbs {
             margin-bottom: 25px;

             @include below($md-tablet) {
                 margin-bottom: 30px;
             }
         }*/
    }
</style>