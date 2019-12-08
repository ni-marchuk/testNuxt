<template>
    <div class="workScheme">
        <div class="workScheme__background"></div>
        <div class="container">
            <div class="workScheme__stage">
                <h2 class="workScheme__titleStage">Схема работы</h2>
                <div class="workScheme__stageBox">
                    <div class="workScheme__stageItem">
                        <div class="workScheme__stageItemTitle">Этап 1</div>
                        <div class="workScheme__stageItemState">
                            <svg-icon class="workScheme__stageItemIcn" name="check"></svg-icon>
                        </div>
                        <div class="workScheme__stageItemText">Заявка или звонок</div>
                    </div>
                    <div class="workScheme__stageItem">
                        <div class="workScheme__stageItemTitle">Этап 2</div>
                        <div class="workScheme__stageItemState">
                            <svg-icon class="workScheme__stageItemIcn" name="check"></svg-icon>
                        </div>
                        <div class="workScheme__stageItemText">Анализ документов</div>
                    </div>
                    <div class="workScheme__stageItem">
                        <div class="workScheme__stageItemTitle">Этап 3</div>
                        <div class="workScheme__stageItemState">
                            <svg-icon class="workScheme__stageItemIcn" name="check"></svg-icon>
                        </div>
                        <div class="workScheme__stageItemText">Заключение договора</div>
                    </div>
                    <div class="workScheme__stageItem">
                        <div class="workScheme__stageItemTitle">Этап 4</div>
                        <div class="workScheme__stageItemState">
                            <svg-icon class="workScheme__stageItemIcn" name="check"></svg-icon>
                        </div>
                        <div class="workScheme__stageItemText">Оказание услуги</div>
                    </div>
                    <div class="workScheme__stageItem">
                        <div class="workScheme__stageItemTitle">Этап 5</div>
                        <div class="workScheme__stageItemState">
                            <svg-icon class="workScheme__stageItemIcn" name="check"></svg-icon>
                        </div>
                        <div class="workScheme__stageItemText">Получение денег</div>
                    </div>
                </div>
            </div>
            <div class="workScheme__slider" v-swiper:mySwiper="swiperOption">
                <div class="workScheme__sliderWrapper swiper-wrapper">
                    <div class="workScheme__sliderSlide swiper-slide" v-for="banner in banners">
                        <div class="workScheme__slideContent">
                            <img class="workScheme__sliderImg" :src="banner.img">
                            <div class="workScheme__sliderTextContent">
                                <p class="workScheme__sliderStep">{{banner.step}}</p>
                                <h2 class="workScheme__sliderTitle">{{banner.title}}</h2>
                                <p class="workScheme__sliderText">{{banner.text}}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="workScheme__sliderNavigation">
                    <button class="workScheme__sliderNext swiper-button-next"></button>
                    <button class="workScheme__sliderPrev swiper-button-prev"></button>
                </div>
                <div class="swiper-pagination swiper-pagination-bullets">

                </div>
            </div>
        </div>

    </div>

</template>

<script>
    export default {
        name: "workScheme",

        mounted() {
            // console.log('app init', this)
            // setTimeout(() => {
            //     this.banners.push('/5.jpg')
            //     console.log('banners update')
            // }, 3000)
            // console.log(
            //     'This is current swiper instance object', this.mySwiper,
            //     'I will slideTo banners 3');
            // this.mySwiper.slideTo(3)
        },

        data() {
            return {
                banners: [
                    {
                        step: 'Этап 1',
                        title: 'Анализ документов',
                        text: `Вы излагаете суть проблемы, после чего мы уточняем нюансы, важные для дела и сообщаем о документах, необходимых для проведения полного анализа ситуации.
                               Первичная консультация может быть проведена как при личной встрече, так и онлайн по Skype. Конкретное время первичной консультации, согласовывается заранее (возможно после окончания рабочего дня).`,
                        img: '/img/banners/doc.png',
                    },
                    {
                        step: 'Этап 1',
                        title: 'Анализ документов',
                        text: `Вы излагаете суть проблемы, после чего мы уточняем нюансы, важные для дела и сообщаем о документах, необходимых для проведения полного анализа ситуации.
                               Первичная консультация может быть проведена как при личной встрече, так и онлайн по Skype. Конкретное время первичной консультации, согласовывается заранее (возможно после окончания рабочего дня).`,
                        img: '/img/banners/port.png',
                    },
                    {
                        step: 'Этап 1',
                        title: 'Анализ документов',
                        text: `Вы излагаете суть проблемы, после чего мы уточняем нюансы, важные для дела и сообщаем о документах, необходимых для проведения полного анализа ситуации.
                               Первичная консультация может быть проведена как при личной встрече, так и онлайн по Skype. Конкретное время первичной консультации, согласовывается заранее (возможно после окончания рабочего дня).`,
                        img: '/img/banners/port.png',
                    },
                ],

                swiperOption: {
                    loop: true,
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
        }

        &__stageItem {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;

            width: 100%;

            cursor: pointer;

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
                    border: 5px solid $red;
                }

                &:not(:last-child):before {
                    background: linear-gradient(to right, red 50%, white 50%);
                    background-size: 5%;
                }

                /*&:not(:first-child):after {*/
                /*    background: linear-gradient(to right, red 50%, white 50%);*/
                /*    background-size: 5%;*/
                /*}*/
                .workScheme__stageItemIcn {
                    display: flex;
                }

                .workScheme__stageItemTitle {
                    color: $red;
                }

                .workScheme__stageItemText {
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

                &:after {
                    background: linear-gradient(to right, red 50%, white 50%);
                    background-size: 5%;
                }

                .workScheme__stageItemIcn {
                    display: flex;
                }
            }

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
            height: 400px;
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
        }

        &__sliderTextContent {
            max-width: 50%;
            max-height: 300px;
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
        }

    }
</style>