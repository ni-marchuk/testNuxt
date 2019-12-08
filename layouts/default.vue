<template>
    <div class="wrapper">
        <app-header/>
        <responsive-menu/>
        <overlay/>
        <nuxt/>
        <app-footer/>
        <feed-back-form/>
        <button @click="$modal.show('FeedBackForm')">XXXX</button>
    </div>
</template>
<script>
    import AppHeader from "../componets/header/index";
    import AppFooter from "../componets/footer/index";
    import ResponsiveMenu from "../componets/responsiveMenu/index";
    import Overlay from "../componets/Overlay/index";
    import FeedBackForm from "../componets/FeedBackForm/index";

    export default {
        components: {
            AppHeader,
            AppFooter,
            ResponsiveMenu,
            Overlay,
            FeedBackForm,
        }
    }
</script>

<style lang="scss">

    .wrapper {
        display: flex;
        flex-direction: column;
        min-height: 100%;

        &__header {

        }

        &__footer {

        }

        &__responsiveMenu {

        }

        &__overlay {
            z-index: 2;
        }
    }

</style>
