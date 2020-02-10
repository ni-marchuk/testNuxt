<template>
    <div class="services">
        <bread-crumbs class="services__breadCrumbs"/>
        <services-box class="services__servicesBox"/>
        <nuxt-link :to="{name: 'services-slug', params: {slug: 'Services-slug'}}">ссылка</nuxt-link>
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
        }
    }
</script>

<style lang="scss">

    .servicesPage {

        &__servicesBox {

        }
    }
</style>

