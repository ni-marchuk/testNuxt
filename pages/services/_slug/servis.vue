<template>
    <div class="servisSlug">
        <bread-crumbs class="servisSlug__breadCrumbs"
                      :breadcrumbs="breadcrumbs"
        />
        <judical-represintation class="servisSlug__judicalRepresintation"/>
    </div>
</template>

<script>
    import BreadCrumbs from "../../../componets/breadcrumbs/breadcrumbs"
    import JudicalRepresintation from "../../../componets/judicalRepresintation/index"

    export default {
        name: "Servis",

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