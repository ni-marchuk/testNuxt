<template>
    <div class="headerBottom">

        <div class="headerBottom__logoBox">
            <a class="headerBottom__logoLink" href="">
                <svg-icon class="headerBottom__logo" name="logo"/>
            </a>
            <p class="headerBottom__operatingMode">Открыто с 9:00 до 18:00</p>
            <p class="headerBottom__operatingModeAdapt">Открыто до 18:00</p>
        </div>

        <div class="headerBottom__menuBox">
            <ul class="headerBottom__menuList">
                <li class="headerBottom__menuItem"><a class="headerBottom__itemLink">О компании</a></li>
                <li class="headerBottom__menuItem"><a class="headerBottom__itemLink">Услуги</a></li>
                <li class="headerBottom__menuItem"><a class="headerBottom__itemLink">Вакансии</a></li>
                <li class="headerBottom__menuItem"><a class="headerBottom__itemLink">Контакты</a></li>
            </ul>
        </div>

        <div class="headerBottom__phone">
            <p class="headerBottom__phoneNumber">+7 (3532) 78-13-37</p>
            <a class="headerBottom__requestCall">Заказать звонок</a>
        </div>

        <svg-icon class="headerBottom__hambruger" name="hamburger"></svg-icon>

    </div>
</template>

<script>
    export default {
        name: "HeaderBottom",
        components: {
            //
        }
    }
</script>

<style lang="scss">

    .headerBottom {
        display: flex;
        justify-content: space-between;
        align-items: center;

        &__logoBox {
            display: flex;
            align-items: center;
        }

        &__logo {
            width: 150px;
            height: 50px;

            margin-right: 50px;

            @include below($lg-tablet) {
                margin-right: 0;
            }
        }

        &__operatingMode {
            display: flex;
            position: relative;

            @include below($md-desktop) {
                display: none;
            }

            &:before {
                content: '';
                position: absolute;
                top: 40%;
                left: -7%;
                width: 5px;
                height: 5px;
                background-color: #20D267;
                border-radius: 50%;
            }
        }

        //временно
        &__operatingModeAdapt {
            display: none;
            position: relative;

            @include below($md-desktop) {
                display: flex;
            }

            @include below($lg-tablet) {
                display: none;
            }

            &:before {
                content: '';
                position: absolute;
                top: 40%;
                left: -7%;
                width: 5px;
                height: 5px;
                background-color: #20D267;
                border-radius: 50%;
            }
        }

        &__menuBox {
            display: flex;
            align-items: center;

            @include below($lg-tablet) {
                display: none;
            }
        }

        &__menuList {
            display: flex;
            justify-content: space-between;
        }

        &__menuItem {
            list-style: none;

            &:not(:last-child) {
                margin-right: 50px;
            }
        }

        &__itemLink {
            position: relative;

            font-size: 16px;
            font-family: $Roboto;
            font-weight: 400;
            text-decoration: none;

            color: $grey;

            &:before {
                display: none;
                content: '';
                position: absolute;
                top: 120%;
                left: 50%;
                width: 5px;
                height: 5px;
                background-color: $red;
            }

            &:hover {
                color: $red;

                &:before {
                    display: flex;
                }
            }
        }

        &__phone {
            display: none;

            @include below($lg-tablet) {
                display: flex;
            }

            @include below($lg-mobile) {
                flex-direction: column;
            }
        }

        &__phoneNumber {
            margin-right: 10px;

            font-size: 14px;
            font-weight: 400;

            color: $grey;

            @include below($lg-mobile) {
                font-size: 12px;
            }
        }

        &__requestCall {
            font-size: 12px;
            font-weight: 400;
        }

        &__hambruger {
            display: none;
            width: 25px;
            height: 30px;

            @include below($lg-tablet) {
                display: flex;
            }
        }
    }

</style>