<template>
    <div class="shortInfo">
        <div class="shortInfo__sloganBox">
            <h1 class="shortInfo__slogan">Берем любую ситуацию под свой контроль</h1>
            <Btn class="shortInfo__btn"
                 :title="'Подробнее'"></Btn>
        </div>
        <img class="shortInfo__hero" src="../../assets/img/man.png">
        <div class="shortInfo__statistics">
            <div class="shortInfo__statisticsItem">
                <p class="shortInfo__itemTitle">50+</p>
                <p class="shortInfo__itemText">Профессиональных юристов</p>
            </div>
            <div class="shortInfo__statisticItem">
                <p class="shortInfo__itemTitle">18лет</p>
                <p class="shortInfo__itemText">Успешной работы</p>
            </div>
            <div class="shortInfo__statisticItem">
                <p class="shortInfo__itemTitle">41 793</p>
                <p class="shortInfo__itemText">Удачно решенных дел</p>
            </div>
            <div class="shortInfo__statisticItem">
                <p class="shortInfo__itemTitle">72.5 млн руб</p>
                <p class="shortInfo__itemText">Возвращено клиентам</p>
            </div>
        </div>
    </div>
</template>

<script>
    import Btn from "../btn/index";

    export default {
        name: "index",
        components: {
            Btn,
        }
    }
</script>

<style lang="scss">
    .shortInfo {
        display: flex;
        justify-content: center;

        &__sloganBox {
            max-width: 305px;

            margin-top: 150px;
        }

        &__slogan {
            margin-bottom: 40px;

            font-family: $Bebas;
            font-size: 48px;
            font-weight: 400;
        }

        &__hero {
            max-width: 310px;
            height: 980px;

            margin-right: 35px;
        }

        &__statistics {
            max-width: 170px;
            margin-top: 150px;
        }

        &__statisticItem {
            margin-bottom: 20px;
        }

        &__itemTitle {
            font-family: $Bebas;
            font-size: 48px;
            font-weight: 400;
        }

        &__itemText {
            font-family: $Roboto;
            font-size: 14px;
            opacity:.8;
            color: $greyLight
        }
    }
</style>