<template>
    <div class="career">
        <div class="container">
            <div class="career__wrapper">
                <div class="career__inner">
                    <div class="career__content">
                        <h1 class="career__title">Карьера</h1>
                        <p class="career__slogan">Вы можете стать частью нашей постоянно растущей и развивающейся
                            команды
                            Юридической фирмы «Паритет»</p>
                        <p class="career__text">Поставьте перед собой амбициозную задачу стать частью нашей команды.</p>
                        <br>
                        <p class="career__text">Если вы разделяете наши ценности и принципы и стремитесь ставить перед
                            собой
                            новые цели, наша
                            компания может стать новым местом вашей работы.</p>
                    </div>
                    <img class="career__img" src="/img/career.png">
                </div>
                <div class="career__items">
                    <div class="career__item">
                        <svg-icon class="career__itemImg" name="ratingSvg"/>
                        <p class="career__itemTitle">Возможность построить карьеру</p>
                        <p class="career__itemText">Профессиональный и карьерный рост каждого сотрудника вместе с
                            компанией. Большинство действующих руководителей пришли к нам на позиции линейных
                            специалистов.</p>
                    </div>

                    <div class="career__item">
                        <svg-icon class="career__itemImg" name="money"/>
                        <p class="career__itemTitle">Достойный заработок</p>
                        <p class="career__itemText">Официальная заработная плата, формирующаяся из окладной
                            фиксированной части и премии, на размер которой вы влияете личным результатом работы.</p>
                    </div>

                    <div class="career__item">
                        <svg-icon class="career__itemImg" name="comand"/>
                        <p class="career__itemTitle">Команда</p>
                        <p class="career__itemText">Успех компании зависит от каждого члена команды. Нашими ценностями
                            являются проактивность, нацеленность на результат и желание улучшить свою жизнь.</p>
                    </div>

                    <div class="career__item">
                        <svg-icon class="career__itemImg" name="ostrov"/>
                        <p class="career__itemTitle">Кто хорошо работает, тот отлично отдыхает!</p>
                        <p class="career__itemText">Мы регулярно устраиваем корпоративные праздники, выезды на природу,
                            празднование дней рождений – все это и многое другое ждет вас в нашей компании.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Career"
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
            margin-bottom: 40px;

            @include below($lg-tablet) {
                margin-bottom: 20px;
            }
        }

        &__slogan {
            margin-bottom: 45px;

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