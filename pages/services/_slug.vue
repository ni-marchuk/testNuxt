<template>
    <div class="servicesSlug">
        <bread-crumbs class="servicesSlug__breadCrumbs"/>
        <judical-represintation class="servicesSlug__judicalRepresintation"/>
    </div>
</template>

<script>
    import BreadCrumbs from "../../componets/breadCrumbs/index"
    import JudicalRepresintation from "../../componets/judicalRepresintation/index"

    export default {
        name: "Services-slug",

        components: {
            BreadCrumbs,
            JudicalRepresintation,
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