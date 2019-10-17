<template>

    <div class="overlay"></div>

</template>

<script>
    import ResponsiveMenu from "../responsiveMenu/index";

    export default {
        name: "Overlay",
        components: {
            ResponsiveMenu,
        },
    }
</script>

<style lang="scss">

    .overlay {
        display: none;

        position: fixed;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;
        /*transition(all 0.3s ease-in-out);*/
        background-color: white;
        opacity: 0.8;
        /*visibility: hidden;*/
        z-index: 2;
    }

</style>