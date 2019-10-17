<template>
    <div class="responsiveMenu">
        <div class="responsiveMenu__top">
            <a class="responsiveMenu__logoLink" href="">
                <svg-icon class="responsiveMenu__logo" name="logo"/>
            </a>
            <button class="responsiveMenu__close" type="submit" v-on:click.prevent="btnHamb">
                <svg-icon class="responsiveMenu__closeIcn" name="close"></svg-icon>
            </button>
        </div>

        <div class="responsiveMenu__bottom">
            <div class="responsiveMenu__menuBox">
                <ul class="responsiveMenu__menuList">
                    <li class="responsiveMenu__menuItem"><a class="responsiveMenu__itemLink">О компании</a></li>
                    <li class="responsiveMenu__menuItem"><a class="responsiveMenu__itemLink">Услуги</a></li>
                    <li class="responsiveMenu__menuItem"><a class="responsiveMenu__itemLink">Вакансии</a></li>
                    <li class="responsiveMenu__menuItem"><a class="responsiveMenu__itemLink">Контакты</a></li>
                </ul>
            </div>

            <div class="responsiveMenu__boxInfo">
                <div class="responsiveMenu__call">
                    <a class="responsiveMenu__requestCall">Заказать звонок</a>
                    <a class="responsiveMenu__phoneNumber" type="tel">+7 (3532) 78-13-37</a>
                </div>
                <div class="responsiveMenu__addressBox">
                    <a class="responsiveMenu__mapsLink">Схема проезда</a>
                    <p class="responsiveMenu__address">г. Оренбург, ул.Хабаровская, 53</p>
                </div>
                <p class="responsiveMenu__operatingMode">Открыто с 9:00 до 18:00</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ResponsiveMenu",

        methods: {
            btnHamb: function () {
                let btnOpen = document.querySelectorAll('.responsiveMenu__close');

                console.log(btnOpen.classList);
            }
        }
    }
</script>

<style lang="scss">

    .responsiveMenu {

        position: absolute;
        top: 0;
        right: 0;

        display: flex;
        justify-content: space-between;
        flex-direction: column;

        max-width: 270px;
        height: 100vh;

        padding: 20px;

        background-color: white;
        box-shadow: 0 0 10px;

        z-index: 3;

        &__top {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;

            width: 100%;
        }

        &__logo {
            width: 100px;
            height: 40px;
        }

        &__close {
            padding-top: 5px;
        }

        &__closeIcn {
            width: 15px;
            height: 15px;
        }

        &__bottom {
            display: flex;
            flex-direction: column;

        }

        &__menuBox {
            display: flex;
            justify-content: flex-end;
        }

        &__menuItem {
            margin-bottom: 20px;

            list-style: none;
        }

        &__itemLink {
            font-size: 16px;
            font-weight: 400;
            text-decoration: none;

            color: $grey;
        }

        &__call {
            display: flex;
            flex-direction: column;

            margin-bottom: 20px;
        }

        &__requestCall {
            margin-bottom: 5px;
            margin-left: auto;

            font-size: 12px;
            font-weight: 400;

            color: $red;
        }

        &__phoneNumber {
            margin-left: auto;

            font-size: 12px;
            text-decoration: none;
        }

        &__addressBox {
            display: flex;
            flex-direction: column;

            margin-bottom: 20px;
        }

        &__mapsLink {
            margin-bottom: 5px;
            margin-left: auto;

            text-align: end;
            font-size: 12px;
            font-weight: 400;

            color: $red;
        }

        &__address {
            margin-left: auto;

            font-size: 12px;
            text-decoration: none;
        }

        &__operatingMode {
            position: relative;

            font-size: 14px;
            text-align: right;

            &:before {
                content: '';
                position: absolute;
                top: 40%;
                left: 5%;
                width: 5px;
                height: 5px;
                background-color: #20D267;
                border-radius: 50%;
            }
        }


    }

</style>