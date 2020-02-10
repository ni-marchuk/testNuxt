<template>
    <div class="wrapper">
        <app-header :settings="getSettings"/>
        <nuxt/>
        <app-footer/>
        <modal-form/>
    </div>
</template>
<script>
    import AppHeader from "../componets/header/header";
    import AppFooter from "../componets/footer/index";
    import ModalForm from "../componets/modalForm/index";

    export default {
        data() {
            return {
                settings: {},
            }
        },

        components: {
            AppHeader,
            AppFooter,
            ModalForm,
        },

        computed: {
            getSettings() {
                return this.$store.getters.SETTINGS;
            },
        },

        methods: {
//
        },

    }
</script>

<style lang="scss">

    .wrapper {
        display: flex;
        flex-direction: column;
        min-height: 100%;

        &__header {
            //
        }

        &__footer {
            //
        }

        &__responsiveMenu {
            //
        }
    }

</style>
