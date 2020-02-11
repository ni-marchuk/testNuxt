<template>
    <div class="wrapper" @click="handleClick($event)">
        <app-header :settings="getSettings"
                    @responsiveOpen="responsiveOpen()"/>
        <responsive-menu :class="{'is-active' : responsiveState}"
                         @responsiveClose="hideResponsive"
                         :settings="getSettings"/>
        <overlay :class="{'is-active' : responsiveState}"/>
        <nuxt/>
        <app-footer/>
        <modal-form/>
    </div>
</template>
<script>
    import AppHeader from "../componets/header/header";
    import AppFooter from "../componets/footer/index";
    import Overlay from "../componets/overlay/index";
    import ModalForm from "../componets/modalForm/index";
    import ResponsiveMenu from "../componets/responsiveMenu/index";

    export default {
        data() {
            return {
                settings: {},
                responsiveState: false,
            }
        },

        components: {
            AppHeader,
            Overlay,
            AppFooter,
            ModalForm,
            ResponsiveMenu
        },

        computed: {
            getSettings() {
                return this.$store.getters.SETTINGS;
            },
        },

        methods: {

            responsiveOpen() {
                this.responsiveState = !this.responsiveState;
            },

            hideResponsive() {
                this.responsiveState = false;
            },

            handleClick(e) {
                if (e.target.closest('.headerBottom__hambrugerBtn') === null && e.target.closest('.responsiveMenu') === null) {
                    this.hideResponsive();
                }
            },
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
