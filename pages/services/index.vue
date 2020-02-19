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

        mounted() {
            //
            // console.log(this.services);
            // console.log(this.pageInfo);
        },

        computed: {
            services() {
                return this.$store.getters['services/SERVICES'];
            },

            pageInfo() {
                return this.$store.getters['services/PAGE_INFO'];
            },
        },

        // beforeDestroy() {
        //     console.log('destroyeDDDD');
        //     this.$store.dispatch('services/resetServicesState');
        // },

    }
</script>

<style lang="scss">

    .services {

        &__servicesBox {
            margin-bottom: 150px;
        }
    }
</style>

