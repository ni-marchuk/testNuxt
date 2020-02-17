<template>
    <div class="servicesSlug">
        <bread-crumbs class="servicesSlug__breadCrumbs"
                      :breadcrumbs="breadcrumbs"
        />
        <judical-represintation class="servicesSlug__judicalRepresintation"/>
    </div>
</template>

<script>
    import BreadCrumbs from "../../componets/breadcrumbs/breadcrumbs"
    import JudicalRepresintation from "../../componets/judicalRepresintation/index"

    export default {
        name: "Judical",

        components: {
            BreadCrumbs,
            JudicalRepresintation,
        },


        data() {
            return {
                breadcrumbs: [
                    {
                        name: '/',
                        text: 'Главная /',
                    },
                    {
                        name: '/services',
                        text: 'Услуги /',
                    },
                    {
                        name: '/services/judical',
                        text: 'Судебное представительство',
                    },
                ],
            }
        },
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