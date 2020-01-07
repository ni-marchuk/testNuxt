<template>
    <div class="wrapper">
        <app-header/>
        <responsive-menu/>
        <overlay/>
        <nuxt/>
        <app-footer/>
        <modal-form/>
        <button @click="$modal.show('modalForm')">XXXX</button>
    </div>
</template>
<script>
    import AppHeader from "../componets/header/index";
    import AppFooter from "../componets/footer/index";
    import ResponsiveMenu from "../componets/responsiveMenu/index";
    import Overlay from "../componets/Overlay/index";
    import ModalForm from "../componets/modalForm/index";

    export default {
        components: {
            AppHeader,
            AppFooter,
            ResponsiveMenu,
            Overlay,
            ModalForm,
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
