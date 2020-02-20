<template>
    <div class="workScheme">
        <div class="workScheme__background"></div>
        <div class="container">
            <div class="workScheme__stage">
                <h2 class="workScheme__titleStage">Схема работы</h2>
                <div class="workScheme__stageBox">
                    <div class="workScheme__stageItem"
                         v-for="(step,index) in workSchemes.steps"
                         @click="goToSlide(index,'step')"
                         :class="{isActive:index === 0}"
                    >
                        <div class="workScheme__stageItemTitle">{{step.step}}</div>
                        <div class="workScheme__stageItemState">
                            <svg-icon class="workScheme__stageItemIcn" name="check"></svg-icon>
                        </div>
                        <div class="workScheme__stageItemText">{{step.description}}</div>
                    </div>
                </div>
            </div>
            <div class="workScheme__slider"
                 v-swiper:mySwiper="swiperOption"
            >
                <div class="workScheme__sliderWrapper swiper-wrapper">
                    <div class="workScheme__sliderSlide swiper-slide"
                         v-for="step in workSchemes.steps">
                        <div class="workScheme__slideContent">
                            <img class="workScheme__sliderImg" :src="step.thumb">
                            <div class="workScheme__sliderTextContent">
                                <p class="workScheme__sliderStep">{{step.step}}</p>
                                <h2 class="workScheme__sliderTitle">{{step.description}}</h2>
                                <p class="workScheme__sliderText">{{step.text}}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="workScheme__sliderNavigation">
                    <button class="workScheme__sliderNext swiper-button-next"
                            @click="goToSlide(index,'next')"
                    >
                    </button>
                    <button class="workScheme__sliderPrev swiper-button-prev"
                            @click="goToSlide(index,'prev')"
                    >
                    </button>
                </div>
                <div class="swiper-pagination swiper-pagination-bullets"></div>
            </div>
        </div>

    </div>

</template>

<script>
    export default {
        name: "workScheme",

        props: {
            workSchemes: {
                required: true,
            },
        },

        data() {
            return {
                swiperOption: {
                    loop: false,
                    slidesPerView: 'auto',
                    centeredSlides: true,
                    spaceBetween: 30,
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
                }
            }
        },

        methods: {
            goToSlide(slide, type) {
                console.log(this.mySwiper);
                if (type === 'step') {
                    if (event.target.classList.contains('isFullActive')) {
                        event.target.closest('.workScheme__stageBox').childNodes.forEach((item, index) => {
                            if (index >= slide) {
                                console.log(item);
                                if (index === slide) {
                                    if (index === 0) {
                                        item.classList.remove('isFullActive');
                                    } else {
                                        item.classList.remove('isActive');
                                    }
                                } else {
                                    item.classList.remove('isActive');
                                    item.classList.remove('isFullActive');
                                }
                            }
                        })
                    } else {
                        for (let i = slide; i >= 0; i--) {
                            if (i === slide) {
                                event.target.closest('.workScheme__stageBox').childNodes[i].classList.add('isFullActive');
                            } else {
                                event.target.closest('.workScheme__stageBox').childNodes[i].classList.add('isActive');
                                event.target.closest('.workScheme__stageBox').childNodes[i].classList.add('isFullActive');
                            }
                        }
                    }
                    this.mySwiper.slideTo(slide);
                }

                if (type === 'next') {

                }

                if (type === 'prev') {

                }
            },
        }
    }

</script>

<style lang="scss">

    .workScheme {
        position: relative;

        &__background {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background-image: url("/img/bgSlider.png");
            opacity: .2;

            background-position-x: right;
            background-repeat-x: no-repeat;
            background-size: contain;
        }

        &__titleStage {
            display: flex;
            justify-content: center;

            margin-bottom: 20px;
        }

        &__stageBox {
            display: flex;
            justify-content: space-between;

            margin-bottom: 50px;

            @include below($md-tablet) {
                display: none;
            }
        }

        &__stageItem {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;

            width: 100%;

            cursor: pointer;
            //grey
            &:not(:last-child):before {
                position: absolute;
                top: 50%;
                left: calc(50% + 17px);
                content: '';
                width: calc(50% - 17px);
                height: 2px;
                background: linear-gradient(to right, lightgrey 50%, white 50%);
                background-size: 5%;
            }

            &:not(:first-child):after {
                position: absolute;
                top: 50%;
                right: calc(50% + 15px);
                content: '';
                width: calc(50% - 15px);
                height: 2px;
                background: linear-gradient(to right, lightgrey 50%, white 50%);
                background-size: 5%;
            }

            &.isActive {

                .workScheme__stageItemState {
                    pointer-events: none;
                    border: 5px solid $red;
                }

                .workScheme__stageItemIcn {
                    display: flex;
                }

                .workScheme__stageItemTitle {
                    pointer-events: none;
                    color: $red;
                }

                .workScheme__stageItemText {
                    pointer-events: none;
                    color: $red;
                }

            }

            &.isFullActive {

                .workScheme__stageItemState {
                    border: 5px solid $red;
                }

                .workScheme__stageItemTitle {
                    color: $red;
                }

                .workScheme__stageItemText {
                    color: $red;
                }

                .workScheme__stageItemIcn {
                    display: flex;
                }
            }

        }

        &__stageItem.isActive:not(:first-child):before {
            background: linear-gradient(to right, red 50%, white 50%);
            background-size: 5%;
        }

        &__stageItem.isFullActive:first-child:before {
            background: linear-gradient(to right, red 50%, white 50%);
            background-size: 5%;
        }

        &__stageItem.isFullActive:after {
            background: linear-gradient(to right, red 50%, white 50%);
            background-size: 5%;
        }

        &__stageItemTitle {
            margin-bottom: 10px;

            text-transform: uppercase;
            color: lightgrey;
        }

        &__stageItemState {
            display: flex;
            justify-content: center;
            align-items: center;

            width: 40px;
            height: 40px;

            margin-bottom: 10px;

            border: 5px solid lightgrey;
            border-radius: 50%;

            z-index: 2;
        }

        &__stageItemIcn {
            display: none;
            width: 20px;
            height: 20px;
        }

        &__stageItemText {
            font-weight: bold;
            color: lightgrey;
        }

        &__slider {
            width: 100%;
            /*height: 400px;*/
        }

        &__sliderSlide {
            display: flex;
            align-items: center;
            justify-content: center;

            width: 100%;
            max-width: 100%;
        }

        &__slideContent {
            display: flex;
            justify-content: space-between;
            align-content: flex-start;

            width: 80%;

        }

        &__sliderImg {
            width: 40%;
            max-height: 300px;
            object-fit: contain;

            @include below($md-tablet) {
                display: none;
            }
        }

        &__sliderTextContent {
            width: 50%;
            /*max-height: 300px;*/

            @include below($md-tablet) {
                margin: 0 auto;
                width: 90%;
            }
        }

        &__sliderStep {
            margin-bottom: 10px;

            font-weight: 700;
            text-transform: uppercase;
            color: $red;
        }

        &__sliderTitle {
            margin-bottom: 15px;
        }

        &__sliderText {
            margin-bottom: 20px;
        }

        &__sliderNavigation {
            display: flex;
            justify-content: space-between;
        }

        &__sliderPrev {
            /*left: 50px;*/
            width: 50px;
            height: 50px;
            color: white;
            border-radius: 50%;
            background-color: $red;
            background-image: url("/img/sprite/prev.svg");
            background-size: 10px;

            @include below($md-tablet) {
                display: none;
            }
        }

        &__sliderNext {
            /*right: 50px;*/
            width: 50px;
            height: 50px;
            color: white;
            border-radius: 50%;
            background-color: $red;
            background-image: url("/img/sprite/next.svg");
            background-size: 10px;

            @include below($md-tablet) {
                display: none;
            }
        }

    }
</style>