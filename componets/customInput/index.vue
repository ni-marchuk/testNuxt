<template>
    <div class="customInput">
        <input id="" class="customInput__input" type="" name="" placeholder="">
        <p class="customInput__errorMessage">testError</p>
    </div>
</template>

<script>
    export default {
        name: "CustomInput"
    }
</script>

<style lang="scss">

    .customInput {

        width: 100%;

        &__input {
            width: 100%;
        }

        &__errorMessage {
            font-size: 12px;
            color: $red;
        }

    }
</style>