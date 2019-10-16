<template>
    <div>
        <app-header/>
        <responsive-menu/>
        <overlay/>
        <nuxt/>
    </div>
</template>
<script>
    import AppHeader from "../componets/header/index";
    import ResponsiveMenu from "../componets/responsiveMenu/index";
    import Overlay from "../componets/Overlay/index";

    export default {
        components: {
            AppHeader,
            ResponsiveMenu,
            Overlay,
        }
    }
</script>

<style lang="scss">

    .header {

    }

    .responsiveMenu {

    }

    .overlay {
        z-index: 2;
    }

    .wrapper {

    }

</style>
