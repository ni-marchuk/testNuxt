<template>
    <div class="statisticCompany"
         v-if="statistics">
        <div class="container">
            <div class="statisticCompany__list">
                <img class="statisticCompany__bg" src="/img/bgParitet.png">
                <div class="statisticCompany__item" v-for="item in statistics">
                    <p class="statisticCompany__itemValue">{{item.title}}</p>
                    <p class="statisticCompany__itemText">{{item.text}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "StatisticCompany",
        props: {
            statistics: {
                required: true,
            },
        },
    }
</script>

<style lang="scss">
    .statisticCompany {

        &__list {
            position: relative;

            display: flex;
            justify-content: space-between;

            padding: 60px 5%;

            @include below($lg-tablet) {
                flex-wrap: wrap;
            }

            @include below($lg-mobile) {
                padding: 0;
            }
        }

        &__bg {
            position: absolute;
            top: 50%;
            left: 50%;

            width: 100%;
            max-width: 100%;
            height: 100%;

            transform: translate(-50%, -50%);
            object-fit: contain;

            z-index: 1;

            opacity: .6;
        }

        &__item {
            width: calc(25% - 30px);

            margin: 15px;

            z-index: 2;

            @include below($lg-tablet) {
                width: calc(50% - 20px);

                margin: 0 20px 15px 0;
            }

            @include below($lg-mobile) {
                display: flex;
                align-items: center;

                width: 100%;

                margin: 0 0 15px 0;
            }
        }

        &__itemValue {
            font-family: $Bebas;
            font-size: 48px;
            font-weight: 400;

            color: $red;

            @include below($md-desktop) {
                font-size: 36px;
            }

            @include below($md-tablet) {
                font-size: 28px;
            }

            @include below($lg-mobile) {
                margin-right: 15px;
            }

        }

        &__itemText {
            font-family: $Roboto;
            font-size: 14px;
            font-weight: 700;
            color: $greyLight;

        }
    }
</style>