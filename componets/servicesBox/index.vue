<template>
    <div class="servicesBox">
        <div class="container">
            <h2 class="servicesBox__title">{{title}}</h2>
            <div class="servicesBox__container">
                <div class="servicesBox__item">
                    <div class="servicesBox__itemTitleBox">
                        <div class="servicesBox__itemTitle">Судебное представительство</div>
                        <svg-icon class="servicesBox__itemIcon" name="servicesBoxHammer"></svg-icon>
                    </div>
                    <ul class="servicesBox__itemList">
                        <li>Взыскание задолженности</li>
                        <li>Налоговые споры</li>
                        <li>Сопровождение банкротства</li>
                    </ul>
                    <p class="servicesBox__text">Юридическая фирма «Паритет» предоставляет эффективные решения по
                        представлению
                        интересов в судах
                        и последующего исполнению судебных решений для реализации бизнес задач наших партнеров.</p>
                    <Btn class="servicesBox__btn"
                         :title="'Подробнее'"></Btn>
                </div>
                <div class="servicesBox__item">
                    <div class="servicesBox__itemTitleBox">
                        <div class="servicesBox__itemTitle">Исполнительное производство</div>
                        <svg-icon class="servicesBox__itemIcon" name="servicesBoxLibra"></svg-icon>
                    </div>
                    <ul class="servicesBox__itemList">
                        <li>Взыскание задолженности</li>
                        <li>Налоговые споры</li>
                        <li>Сопровождение банкротства</li>
                    </ul>
                    <p class="servicesBox__text">Юридическая фирма «Паритет» предоставляет эффективные решения по
                        представлению
                        интересов в судах и
                        последующего исполнению судебных решений для реализации бизнес задач наших партнеров.</p>
                    <Btn class="servicesBox__btn"
                         :title="'Подробнее'"></Btn>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Btn from "../btn/index";

    export default {
        name: "servicesBox",

        components: {
            Btn,
        },
        //
        // data: function () {
        //     return {
        //         title: "Наши улуги",
        //     }
        // },
    }
</script>

<style lang="scss">

    .servicesBox {

        &__title {
            margin-left: 15px;
            margin-bottom: 30px;

            @include below($md-tablet) {
                margin-bottom: 20px;
            }
            @include below($lg-mobile) {
                flex-direction: column;
            }
        }

        &__container {
            display: flex;

            @include below($md-tablet) {
                flex-direction: column;
            }
        }

        &__item {
            display: flex;
            flex-direction: column;
            align-items: flex-start;

            width: 50%;
            padding: 50px 20px 50px 70px;

            background-color: white;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);

            &:first-child {
                width: calc(50% - 30px);
                margin-right: 30px;
            }

            @include below($lg-tablet) {
                padding-left: 30px;
            }
            @include below($md-tablet) {
                width: 100%;

                &:first-child {
                    width: 100%;

                    margin-right: 0;
                    margin-bottom: 20px;
                }
            }
        }

        &__itemTitleBox {
            display: flex;
            justify-content: space-between;
            align-items: center;

            margin-bottom: 10px;

            width: 100%;
        }

        &__itemTitle {
            font-family: $Bebas;
            font-weight: 400;
            font-size: 24px;
        }

        &__itemIcon {
            max-width: 60px;
            max-height: 60px;
            min-width: 60px;
        }

        &__itemList {
            margin-bottom: 25px;
        }

        &__text {
            margin-bottom: 25px;
        }
    }
</style>