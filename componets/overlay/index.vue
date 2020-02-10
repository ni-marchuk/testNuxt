<template>
    <div class="overlay"
         :class="{ active: responsiveState }"
         @click="responsiveClose">
    </div>

</template>

<script>
    import ResponsiveMenu from "../responsiveMenu/index";

    export default {
        name: "Overlay",

        components: {
            ResponsiveMenu,
        },

        props: {
//
        },

        methods: {
            responsiveClose() {
                this.$emit('responsive-close');
            }
        }

    }
</script>

<style lang="scss">

    .overlay {
        display: flex;

        position: fixed;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;
        background-color: white;
        opacity: 0.8;
        visibility: hidden;
        z-index: 2;
    }

    .overlay.active {
        visibility: unset;
    }

</style>