<template>
    <button class="btn">
        {{title}}
        <svg-icon class='btn__arrow' name="arrow"></svg-icon>
    </button>
</template>

<script>
    export default {
        name: "btn",

        props: {
            title: {
                type: String,
                required: true,
            },
        }
    }
</script>

<style lang="scss">
    .btn {
        position: relative;

        display: flex;
        justify-content: center;
        align-items: center;

        width: 220px;
        height: 55px;

        padding: 15px;

        font-size: 18px;
        font-family: $Bebas;
        font-weight: 400;
        vertical-align: middle;
        text-transform: uppercase;

        color: white;
        cursor: pointer;
        background-color: $red;
        border-radius: 5px;

        &__arrow {
            width: 8px;
            height: 10px;

            margin-left: auto;
        }
    }
</style>