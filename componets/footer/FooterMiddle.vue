<template>
    <div class="footerMiddle">
        <div class="container">
            <div class="footerMiddle__wrapper">
                <a class="footerMiddle__logoLink" href="">
                    <svg-icon class="footerMiddle__logo" name="logo"/>
                </a>
                <div class="footerMiddle__menu">
                    <a class="footerMiddle__menuItem">О компании</a>
                    <a class="footerMiddle__menuItem">Отзывы клиентов</a>
                    <a class="footerMiddle__menuItem">Вакансии</a>
                    <a class="footerMiddle__menuItem">Наши услуги</a>
                    <a class="footerMiddle__menuItem">Защита данных</a>
                    <a class="footerMiddle__menuItem">Контакты</a>
                </div>
                <div class="footerMiddle__social">
                    <svg-icon class="footerMiddle__socialItem" name="vk"></svg-icon>
                    <svg-icon class="footerMiddle__socialItem" name="inst"></svg-icon>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FooterMiddle"
    }
</script>

<style lang="scss">
    .footerMiddle {
        padding: 35px 0 35px 0;
        background-color: #F9F9F9;

        &__wrapper {
            display: flex;
            align-items: center;

            @include below($md-tablet) {
                justify-content: space-between;
                flex-wrap: wrap;
            }
        }

        &__logoLink {
            display: flex;
            width: 25%;
        }

        &__logo {
            min-width: 150px;
            height: 50px;

            margin-right: 50px;

            @include below($md-tablet) {
                margin-right: 0;
            }
        }

        &__menu {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;

            width: 50%;

            @include below($lg-tablet) {
                justify-content: center;

                width: 65%;
            }

            @include below($md-tablet) {
                justify-content: flex-start;
                order: 1;

                width: 100%;

                padding-top: 35px;
            }
        }

        &__menuItem {
            width: 33%;

            &:nth-child(-n+3) {
                margin-bottom: 20px;
            }

            @include below($md-tablet) {
                width: auto;
                margin-right: 20px;
                margin-bottom: 20px;
            }
        }

        &__social {
            display: flex;

            width: 25%;

            @include below($lg-tablet) {
                justify-content: center;

                width: 15%;
            }

            @include below($md-tablet) {
                order: 0;
                width: 25%;
            }
        }

        &__socialItem {
            width: 40px;
            height: 40px;

            margin-right: 5px;
        }
    }
</style>