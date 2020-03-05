<template>
    <div class="overlay">
    </div>
</template>

<script>

    export default {
        name: "Overlay",
    }
</script>

<style lang="scss">

    .overlay.is-active {
        display: flex;
    }

    .overlay {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        /*width: calc(100% - 270px);*/
        height: 100%;
        opacity: 0.5;
        z-index: 3;
        background-image: linear-gradient(250deg, #ff0000, #000000);
    }

</style>