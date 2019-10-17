<template>

    <div class="overlay"></div>

</template>

<script>
    export default {
        name: "Overlay"
    }
</script>

<style lang="scss">

    .overlay {
        position: fixed;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;
        /*transition(all 0.3s ease-in-out);*/
        background-color: gold;
        /*opacity: 0;*/
        /*visibility: hidden;*/

        z-index: 2;
    }

</style>