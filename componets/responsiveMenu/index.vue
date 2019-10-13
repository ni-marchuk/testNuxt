<template>
    <div class="responsiveMenu">
        <div class="responsiveMenu__top">
            <a class="responsiveMenu__logoLink" href="">
                <svg-icon class="responsiveMenu__logo" name="logo"/>
            </a>
            <button class="responsiveMenu__close">
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
                    <a class="responsiveMenu__phoneNumber">+7 (3532) 78-13-37</a>
                </div>
                <div class="responsiveMenu__address">
                    <a class="responsiveMenu__mapsLink">Схема проезда</a>
                    <p class="responsiveMenu__city">г. Оренбург, ул. ул.Хабаровская, 53</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ResponsiveMenu"
    }
</script>

<style lang="scss">

    .responsiveMenu {
        display: flex;
        justify-content: space-between;
        flex-direction: column;

        max-width: 270px;

        background-color: wheat;

        &__top {
            display: flex;
            justify-content: space-between;
            align-items: center;

            width: 100%;

            padding: 0 10px;
        }

        &__logo {
            width: 150px;
            height: 50px;
        }

        &__closeIcn {
            width: 15px;
            height: 15px;
        }
    }

</style>