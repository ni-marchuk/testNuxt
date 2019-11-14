<template>
    <div class="services">
        <div class="container">
            <h2 class="services__title">Наши услуги</h2>
            <div class="services__container">
                <div class="services__item">
                    <div class="services__itemTitleBox">
                        <div class="services__itemTitle">Судебное представительство</div>
                        <svg-icon class="services__itemIcon" name="servicesHammer"></svg-icon>
                    </div>
                    <ul class="services__itemList">
                        <li>Взыскание задолженности</li>
                        <li>Налоговые споры</li>
                        <li>Сопровождение банкротства</li>
                    </ul>
                    <p class="services__text">Юридическая фирма «Паритет» предоставляет эффективные решения по
                        представлению
                        интересов в судах
                        и последующего исполнению судебных решений для реализации бизнес задач наших партнеров.</p>
                    <Btn class="services__btn"
                         :title="'Подробнее'"></Btn>
                </div>
                <div class="services__item">
                    <div class="services__itemTitleBox">
                        <div class="services__itemTitle">Исполнительное производство</div>
                        <svg-icon class="services__itemIcon" name="servicesLibra"></svg-icon>
                    </div>
                    <ul class="services__itemList">
                        <li>Взыскание задолженности</li>
                        <li>Налоговые споры</li>
                        <li>Сопровождение банкротства</li>
                    </ul>
                    <p class="services__text">Юридическая фирма «Паритет» предоставляет эффективные решения по
                        представлению
                        интересов в судах и
                        последующего исполнению судебных решений для реализации бизнес задач наших партнеров.</p>
                    <Btn class="services__btn"
                         :title="'Подробнее'"></Btn>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Btn from "../btn/index";

    export default {
        name: "Services",

        components: {
            Btn,
        }
    }
</script>

<style lang="scss">

    .services {

        padding-top: 30px;
        padding-bottom: 50px;

        background-color: #EEEEEE;

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
            max-height: 60px;
        }

        &__itemList {
            margin-bottom: 25px;
        }

        &__text {
            margin-bottom: 25px;
        }
    }
</style>