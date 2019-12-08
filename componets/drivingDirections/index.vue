<template>
    <div class="drivingDirections">
        <div class="container">
            <h2 class="drivingDirections__title">Схема проезда</h2>
        </div>
        <div class="drivingDirections__maps"></div>
    </div>
</template>

<script>
    export default {
        name: "DrivingDirections"
    }
</script>

<style lang="scss">

    .drivingDirections {

        &__title {
            margin-bottom: 40px;

            @include below($lg-tablet) {
                margin-bottom: 20px;
            }
        }

        &__maps {
            background-color: $red;
            height: 600px;


            @include below($lg-tablet) {
                height: 500px;
            }

            @include below($md-tablet) {
                height: 400px;
            }

            @include below($lg-mobile) {
                height: 300px;
            }
        }
    }

</style>