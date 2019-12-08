<template>
    <div class="newsSlider">
        <h2 class="newsSlider__title">Новости жизни Юридической фирмы «Паритет</h2>
        <div class="newsSlider__slider" v-swiper:mySwiper="swiperOption">
            <div class="newsSlider__sliderWrapper swiper-wrapper">
                <div class="newsSlider__sliderSlide swiper-slide" v-for="banner in banners">
                    <div class="newsSlider__slideContent">
                        <img class="newsSlider__sliderImg" :src="banner.img">
                    </div>
                </div>
            </div>
            <div class="newsSlider__sliderNavigation">
                <button class="newsSlider__sliderNext swiper-button-next"></button>
                <button class="newsSlider__sliderPrev swiper-button-prev"></button>
            </div>
        </div>
        <div class="swiper-pagination swiper-pagination-bullets">
        </div>
    </div>
</template>

<script>
    export default {
        name: "NewsSlider",

        data() {
            return {
                banners: [
                    {
                        img: '/img/careerBanners/slide1.png',
                    },
                    {
                        img: '/img/careerBanners/slide2.png',
                    },
                    {
                        img: '/img/careerBanners/slide3.png',
                    },
                ],

                swiperOption: {
                    loop: true,
                    slidesPerView: 3,
                    centeredSlides: true,
                    spaceBetween: 0,
                    paginationClickable: true,
                    pagination: {
                        el: '.swiper-pagination',
                        dynamicBullets: false,
                        clickable: true
                    },
                    on: {
                        slideChange() {
                            console.log('onSlideChangeEnd', this);
                        },
                        tap() {
                            console.log('onTap', this);
                        }
                    },

                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },

                    breakpoints: {
                        768: {
                            slidesPerView: 1,
                        },
                    }
                }
            }
        }

    }
</script>

<style lang="scss">

    .newsSlider {

        &__title {
            width: 100%;

            margin: 0 auto 20px auto;

            text-align: center;
        }

        &__sliderSlide {
            height: 430px;


            @include below($md-desktop) {
                height: 260px;
            }

            @include below($lg-mobile) {
                height: 200px;
            }

        }

        &__sliderSlide.swiper-slide.swiper-slide-active {

            @include below($md-desktop) {
                width: 50% !important;
            }

            @include below($md-tablet) {
                width: 100% !important;
            }

            img {
                opacity: 1;
            }
        }

        &__sliderSlide.swiper-slide-prev {
            @include below($md-desktop) {
                width: 25% !important;
            }
            @include below($md-tablet) {
                width: 100% !important;
            }
        }

        &__sliderSlide.swiper-slide-next {
            @include below($md-desktop) {
                width: 25% !important;
            }
            @include below($md-tablet) {
                width: 100% !important;
            }
        }

        &__slideContent {
            height: 100%;
        }

        .newsSlider__sliderImg {
            height: 100%;
            object-fit: cover;
            opacity: .3;

            @include below($md-tablet) {
                object-fit: contain;
            }
        }

        &__sliderPrev {
            margin-left: 30%;
            width: 50px;
            height: 50px;
            color: white;
            border-radius: 50%;
            background-color: $red;
            background-image: url("/img/sprite/prev.svg");
            background-size: 10px;

            @include below($md-desktop) {
                width: 30px;
                height: 30px;

                margin-left: 20%;
            }

            @include below($md-tablet) {
                margin-left: 5%;
            }

            @include below(560px) {
                display: none;
            }
        }

        &__sliderNext {
            margin-right: 30%;
            width: 50px;
            height: 50px;
            color: white;
            border-radius: 50%;
            background-color: $red;
            background-image: url("/img/sprite/next.svg");
            background-size: 10px;

            @include below($md-desktop) {
                width: 30px;
                height: 30px;

                margin-right: 20%;
            }

            @include below($md-tablet) {
                margin-right: 5%;
            }

            @include below(560px) {
                display: none;
            }
        }

        .swiper-container {
            overflow-y: visible;
        }
    }
</style>