<template>
    <div class="officeAtmosphere">
        <div class="container">
            <div class="officeAtmosphere__wrapper">
                <h2 class="officeAtmosphere__title">Атмосфера офиса</h2>
                <p class="officeAtmosphere__subTitle">Мы рассмотрим проблему со всех сторон и предложим решение без
                    лишних вопросов!</p>
                <div class="officeAtmosphere__imgBox">
                    <img class="officeAtmosphere__imgLg" src="/img/officeAtmosphere/offieLg1.png">
                    <img class="officeAtmosphere__imgSm" src="/img/officeAtmosphere/offieSm1.png">
                    <img class="officeAtmosphere__imgSm" src="/img/officeAtmosphere/offieSm2.png">
                    <img class="officeAtmosphere__imgSm" src="/img/officeAtmosphere/offieSm3.png">
                    <img class="officeAtmosphere__imgSm" src="/img/officeAtmosphere/offieSm4.png">
                    <img class="officeAtmosphere__imgLg" src="/img/officeAtmosphere/offieLg2.png">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "OfficeAtmosphere",
    }
</script>

<style lang="scss">

    .officeAtmosphere {

        &__title {
            text-align: center;
            margin-bottom: 20px;

            @include below($md-desktop) {
                margin-bottom: 15px;
            }
        }

        &__subTitle {
            text-align: center;
            margin-bottom: 50px;

            @include below($md-desktop) {
                margin-bottom: 30px;
            }
        }

        &__imgBox {
            display: flex;
            flex-wrap: wrap;

            @include below($md-tablet) {
                justify-content: center;
            }
        }

        &__imgLg {
            width: calc(50% - 20px);

            margin-right: 20px;
            margin-bottom: 20px;

            @include below($md-tablet) {
                width: 100%;
                margin-right: 0;
            }
        }

        &__imgSm {
            width: calc(25% - 20px);

            margin-bottom: 20px;

            margin-right: 20px;

            @include below($md-tablet) {
                width: calc(50% - 20px);

                &:nth-child(odd) {
                    margin-right: 0;
                }
            }
        }
    }

</style>