<template>
    <div class="feedback">
        <div class="container">
            <div class="feedback__box">
                <p class="feedback__text">Хочешь в нашу растущую команду?</p>
                <div class="feedback__contacts">
                    <p class="feedback__text">Звони&nbsp</p>
                    <a class="feedback__phone" href="tel:+353278-13-37">8 (3532) 78-13-37&nbsp</a>
                    <p class="feedback__text">или напиши&nbsp</p>
                    <a class="feedback__mail">hr@ufparitet.ru</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Feedback"
    }
</script>

<style lang="scss">

    .feedback {
        display: flex;
        justify-content: center;

        &__box {
            position: relative;

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            max-width: 700px;

            margin: 0 auto;
            padding: 30px;

            border: 2px solid $red;
            border-radius: 2px;

            @include below($md-desktop) {
                max-width: 500px;
            }

            @include below($md-tablet) {
                max-width: 400px;

                padding: 15px;
            }

            &::after {
                content: "";
                position: absolute;
                top: 100%;
                left: 9.8%;
                width: 0;
                height: 0;
                border-top: 34px solid #D22027;
                border-right: 45px solid transparent;
                z-index: 1;
            }

            &::before {
                content: "";
                position: absolute;
                top: 99%;
                left: 10.2%;
                width: 0;
                height: 0;
                border-top: 30px solid white;
                border-right: 39px solid transparent;
                z-index: 2;
            }
        }

        &__contacts {
            display: flex;
            justify-content: center;
            align-items: baseline;
            flex-wrap: wrap;
        }

        &__text {
            text-align: center;
            font-size: 24px;
            font-weight: 700;
            color: $grey;

            @include below($md-desktop) {
                font-size: 18px;
            }

            @include below($md-tablet) {
                font-size: 16px;
            }

            @include below($lg-mobile) {
                font-size: 14px;
            }
        }

        &__phone, &__mail {
            font-size: 24px;
            font-weight: 700;
            text-decoration: none;
            color: $red;

            @include below($md-desktop) {
                font-size: 18px;
            }

            @include below($md-tablet) {
                font-size: 16px;
            }

            @include below($lg-mobile) {
                font-size: 14px;
            }
        }

    }

</style>