<template>
    <div class="career">
        <div class="container">
            <div class="career__wrapper">
                <div class="career__inner">
                    <div class="career__content" v-if="pageInfo">
                        <h1 class="career__title">{{pageInfo.h1}}</h1>
                        <p class="career__slogan">{{pageInfo.preview_description}}</p>
                        <p class="career__text">{{pageInfo.description}}</p>
                    </div>
                    <img class="career__img"
                         v-if="pageInfo"
                         src="/img/career.png">
                </div>
                <div class="career__items"
                     v-if="career">
                    <div class="career__item" v-for="(item, index) in career">
                        <!--svg?-->
                        <img class="career__itemImg" :src="item.icon"/>
                        <p class="career__itemTitle">{{item.title}}</p>
                        <p class="career__itemText">{{item.text}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Career",

        props: {
            pageInfo: {
                required: true,
            },
            career: {
                required: true,
            },
        },

    }
</script>

<style lang="scss">
    .career {
        background-image: url("../../static/img/bg2.png");
        background-repeat: repeat;
        background-position: center;

        margin-bottom: 60px;

        @include below($lg-tablet) {
            margin-bottom: 40px;
        }

        @include below($md-tablet) {
            margin-bottom: 20px;
        }

        &__wrapper {
            display: flex;
            flex-direction: column;

        }

        &__inner {
            display: flex;
            justify-content: space-between;
            align-items: center;

            padding: 0 60px 60px 90px;

            @include below($md-desktop) {
                padding: 0 40px 60px 70px;
            }

            @include below($lg-tablet) {
                padding: 0 0 60px 0;

            }

            @include below($md-tablet) {
                padding: 0 0 30px 0;

            }

            @include below($md-tablet) {
                align-items: center;
            }

            @include below($lg-mobile) {
                position: relative;

                &::after {
                    content: "";
                    background-image: url("../../static/img/career.png");
                    background-repeat: no-repeat;
                    background-position: right;
                    background-size: 60%;
                    opacity: 0.5;
                    top: 0;
                    left: 0;
                    bottom: 0;
                    right: 0;
                    position: absolute;
                }
            }

            @include below($lg-tablet) {

                &::after {
                    opacity: 0.3;
                }
            }
        }


        &__content {
            max-width: 70%;
            width: 100%;

            margin-right: 20px;

            @include below($lg-tablet) {
                align-items: end;

                padding-top: 40px;
            }

            @include below($md-tablet) {
                padding-top: 20px;
            }

        }

        &__title {
            margin-bottom: 20px;
        }

        &__slogan {
            margin-bottom: 25px;

            font-size: 18px;
            font-weight: 700;

            @include below($md-desktop) {
                font-size: 16px;
            }

            @include below($lg-tablet) {
                margin-bottom: 25px;
            }
        }

        &__text {
            @include below($md-desktop) {
                font-size: 14px;
            }
        }

        &__img {
            max-width: 360px;
            height: 440px;

            @include below($lg-tablet) {
                max-width: 290px;
                height: 350px;
            }

            @include below($md-tablet) {
                max-width: 220px;
                height: auto;
            }

            @include below($lg-mobile) {
                display: none;
            }
        }

        &__items {
            display: flex;
            justify-content: space-between;

            @include below($lg-tablet) {
                flex-wrap: wrap;
            }
        }

        &__item {
            display: flex;
            flex-direction: column;

            align-items: center;
            padding: 0 15px;


            @include below($lg-tablet) {
                margin-bottom: 30px;
                max-width: calc(50% - 15px);
            }
        }

        &__itemImg {
            margin-bottom: 20px;

            width: 80px;
            height: 80px;

            @include below($md-tablet) {
                margin-bottom: 10px;

                width: 50px;
                height: 50px;
            }
        }

        &__itemTitle {
            max-width: 270px;
            margin-bottom: 20px;

            font-size: 18px;
            font-weight: 700;
            text-align: center;

            color: $grey;

            @include below($lg-tablet) {
                font-size: 16px;
            }

            @include below($md-tablet) {
                margin-bottom: 10px;
            }

            @include below($lg-mobile) {
                font-size: 14px;
            }
        }

        &__itemText {
            font-size: 14px;
            text-align: center;

            @include below($lg-tablet) {
                font-size: 13px;
            }

            @include below($lg-mobile) {
                font-size: 12px;
            }
        }

    }

</style>