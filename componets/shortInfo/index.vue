<template>
    <div class="shortInfo">
        <div class="container">
            <div class="shortInfo__inner">
                <div class="shortInfo__sloganBox">
                    <h1 class="shortInfo__slogan">Берем любую ситуацию под свой контроль</h1>
                    <Btn class="shortInfo__btn"
                         :title="'Подробнее'">
                    </Btn>
                </div>
                <img class="shortInfo__hero" src="/img/man.png">
                <div class="shortInfo__statistics">
                    <div class="shortInfo__statisticItem">
                        <p class="shortInfo__itemTitle">50+</p>
                        <p class="shortInfo__itemText">Профессиональных юристов</p>
                    </div>
                    <div class="shortInfo__statisticItem">
                        <p class="shortInfo__itemTitle">18</p>
                        <p class="shortInfo__itemText">Лет успешной работы</p>
                    </div>
                    <div class="shortInfo__statisticItem">
                        <p class="shortInfo__itemTitle">41 793</p>
                        <p class="shortInfo__itemText">Удачно решенных дел</p>
                    </div>
                    <div class="shortInfo__statisticItem">
                        <p class="shortInfo__itemTitle">72.5</p>
                        <p class="shortInfo__itemText">Млн руб возвращено клиентам</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import Btn from "../btn/index";

    export default {
        name: "ShortInfo",
        components: {
            Btn,
        }
    }
</script>

<style lang="scss">
    .shortInfo {

        padding-bottom: 200px;

        @include below ($lg-tablet) {
            padding-bottom: 270px;
        }

        @include below ($md-tablet) {
            padding-bottom: 120px;
        }

        @include below ($lg-mobile) {
            padding-bottom: 30px;
        }

        background-image: url("/img/bg.png");
        background-repeat: repeat;
        background-position: center top;

        &__inner {
            display: flex;
            justify-content: space-between;

            @include below($md-tablet) {
                flex-direction: column;
            }
        }

        &__sloganBox {
            max-width: 365px;

            margin-top: 150px;

            @include below($lg-tablet) {
                margin-top: 100px;
                max-width: 305px;
            }

            @include below($md-tablet) {
                max-width: 50%;

                margin-top: 50px;
                margin-bottom: 20px;
            }
        }

        &__slogan {
            margin-bottom: 40px;

            font-family: $Bebas;
            font-weight: 400;

            @include below($lg-mobile) {
                margin-bottom: 15px;
            }
        }

        &__hero {
            position: absolute;
            left: calc(55% - 280px / 2);

            max-width: 280px;
            height: auto;

            z-index: 1;

            @include below($md-tablet) {
                left: calc(100% - 230px);

                max-width: 180px;
            }

            @include below($lg-mobile) {
                left: calc(100% - 150px);

                max-width: 150px;
            }
        }

        &__statistics {
            max-width: 170px;
            margin-top: 150px;

            @include below($lg-tablet) {
                margin-top: 100px;
            }

            @include below($md-tablet) {
                display: flex;
                flex-wrap: wrap;

                max-width: 50%;

                margin-top: 0;
            }
        }

        &__statisticItem {
            margin-bottom: 20px;

            @include below($md-tablet) {
                max-width: 50%;

                &:nth-child(odd) {
                    width: calc(50% - 20px);
                    margin-right: 20px;
                }
            }
        }

        &__itemTitle {
            font-family: $Bebas;
            font-size: 48px;
            font-weight: 400;

            @include below($md-desktop) {
                font-size: 36px;
            }

            @include below($md-tablet) {
                font-size: 28px;
            }

        }

        &__itemText {
            font-family: $Roboto;
            font-size: 14px;
            opacity: .8;
            color: $greyLight;

            @include below($md-tablet) {
                font-size: 11px;
            }

            @include below($lg-mobile) {
                font-size: 8px;
            }
        }

        &__btn {
            @include below($md-tablet) {
                width: 180px;
                height: 45px;
            }
        }
    }
</style>