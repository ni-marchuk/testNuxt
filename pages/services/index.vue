<template>
    <div class="services">
        <bread-crumbs class="services__breadCrumbs"
                      :breadcrumbs="breadcrumbs"
        />
        <services-box class="services__servicesBox"
                      :pageInfo="pageInfo"
                      :services="services"
        />
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

        middleware: ['services'],

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

        computed: {
            services() {
                return this.$store.getters.SERVICES;
            },
            pageInfo() {
                return this.$store.getters.PAGE_INFO;
            },
        },

        beforeDetroy() {
            console.log('destroyeDDDD');
            this.$store.dispatch('resetCartState');
        },
    }
</script>

<style lang="scss">

    .servicesPage {

        &__servicesBox {

        }
    }
</style>

