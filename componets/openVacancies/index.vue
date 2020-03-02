<template>
    <div class="openVacancies">
        <div class="container">
            <h2 class="openVacancies__title">Открытые вакансии</h2>
            <div class="openVacancies__wrapper">
                <p class="openVacancies__noVacansies"
                   v-if="vacancies.noVacancy">
                    {{vacancies.noVacancy}}
                </p>
                <div class="openVacancies__vacanciesList"
                     v-else>
                    <div class="openVacancies__item" v-for="(item,index) in vacancies.item">
                        <p class="openVacancies__itemTitle">{{item.title}}</p>
                        <p class="openVacancies__itemPriceInterval">{{item.price}}</p>
                    </div>
                    <div class="openVacancies__item">
                        <p class="openVacancies__itemTitle">Бухгалтер по расчету заработной платы</p>
                        <p class="openVacancies__itemPriceInterval">17 000 — 35 000 ₽</p>
                    </div>
                    <div class="openVacancies__item">
                        <p class="openVacancies__itemTitle">Бухгалтер по расчету заработной платы</p>
                        <p class="openVacancies__itemPriceInterval">17 000 — 35 000 ₽</p>
                    </div>
                    <div class="openVacancies__item">
                        <p class="openVacancies__itemTitle">Бухгалтер по расчету заработной платы</p>
                        <p class="openVacancies__itemPriceInterval">17 000 — 35 000 ₽</p>
                    </div>
                    <div class="openVacancies__item">
                        <p class="openVacancies__itemTitle">Бухгалтер по расчету заработной платы</p>
                        <p class="openVacancies__itemPriceInterval">17 000 — 35 000 ₽</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "OpenVacancies",
        props: {
            vacancies: {
                required: true,
            }
        }
    }
</script>

<style lang="scss">
    .openVacancies {
        padding: 60px 0;

        @include below($lg-tablet) {
            padding: 35px 0;
        }

        &__title {
            margin-bottom: 20px;

            text-align: center;
        }

        &__wrapper {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 0 5%;
        }

        &__noVacansies {
            text-align: center;
        }

        &__item {
            display: flex;
            align-items: center;
            justify-content: space-between;

            padding: 30px;

            &:nth-child(odd) {
                background: rgba(114, 114, 113, 0.05);
            }

            &:hover {
                color: white;
                background: $red;
            }

            @include below($md-tablet) {
                padding: 20px 10px 20px 25px;
            }
        }

        &__item:hover &__itemTitle:after {
            position: absolute;
            top: 5px;
            left: -22px;
            display: block;
            width: 22px;
            height: 22px;
            content: '';
            background-image: url('../../static/img/sprite/rectangleWhite.svg');
            background-size: 15px 15px;
            background-repeat: no-repeat;
        }

        &__itemTitle {
            position: relative;

            margin-right: 40px;

            font-size: 20px;
            font-weight: 700;

            &:after {
                position: absolute;
                top: 5px;
                left: -25px;

                display: block;
                width: 22px;
                height: 22px;

                content: '';
                background-image: url('../../static/img/sprite/rectangle.svg');
                background-size: 22px 22px;
                background-repeat: no-repeat;
            }

            @include below($md-desktop) {
                font-size: 18px;
            }

            @include below($md-tablet) {
                font-size: 16px;
            }

            @include below($lg-mobile) {
                font-size: 14px;
            }
        }

        &__itemPriceInterval {
            font-size: 16px;
            white-space: nowrap;

            @include below($md-desktop) {
                font-size: 14px;
            }

            @include below($md-tablet) {
                font-size: 12px;
            }
        }
    }

</style>