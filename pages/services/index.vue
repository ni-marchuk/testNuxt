<template>
    <div class="services">
        <bread-crumbs class="services__breadCrumbs"
                      :breadcrumbs="breadcrumbs"
        />
        <services-box class="services__servicesBox"/>
    </div>
</template>

<script>
    import BreadCrumbs from "../../componets/breadcrumbs/breadcrumbs"
    import ServicesBox from "../../componets/servicesBox/index"

    export default {
        name: "Index",

        components: {
            BreadCrumbs,
            ServicesBox,
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
                        text: 'Услуги',
                    },
                ],
            }
        },
    }
</script>

<style lang="scss">

    .servicesPage {

        &__servicesBox {

        }
    }
</style>

