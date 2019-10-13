<template>
    <div>
        <app-header/>
        <responsive-menu/>
        <nuxt/>
    </div>
</template>
<script>
    import AppHeader from "../componets/header/index";
    import ResponsiveMenu from "../componets/responsiveMenu/index";

    export default {
        components: {
            AppHeader,
            ResponsiveMenu,
        }
    }
</script>

<style lang="scss">

    .header {

    }

    .responsiveMenu {

    }

    .wrapper {

    }

</style>
