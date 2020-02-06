<template>
    <div class="mission">
        <div class="mission__bg"></div>
        <h2 class="mission__title">{{about.mission.title}}</h2>
        <p class="mission__text">{{about.mission.text}}</p>
    </div>
</template>

<script>
    export default {
        name: "Mission",

        props: {
            about: {
                required: true,
            },
        },

    }
</script>

<style lang="scss">
    .mission {
        position: relative;
        height: auto;

        padding: 60px 0 80px 0;

        @include below($md-desktop) {
            padding: 40px 0 60px 0;
        }

        &__bg {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: $red;
            /*background-image: url("/img/bg.png");*/
            /*background-repeat: repeat;*/
            /*background-position: center top;*/
            z-index: -1;
        }

        &__title {
            margin-bottom: 30px;

            text-align: center;
            color: white;

            @include below($md-desktop) {
                margin-bottom: 20px;
            }

        }

        &__text {
            margin: 0 auto;
            max-width: 600px;

            color: white;

            @include below($md-tablet) {
                text-align: center;

                padding: 0 20px;

            }
        }

    }
</style>