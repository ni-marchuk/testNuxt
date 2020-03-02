<template>
    <div class="headerBottom">
        <div class="headerBottom__logoBox">
            <nuxt-link class="headerBottom__logoLink"
                       :to="{path: '/'}">
                <svg-icon class="headerBottom__logo" name="logo"/>
            </nuxt-link>
            <p class="headerBottom__operatingMode"
               :class="{'open': settings.workTime.status}"
               v-if="settings">
                {{settings.workTime.text}}
            </p>
        </div>
        <div class="headerBottom__menuBox">
            <ul class="headerBottom__menuList">
                <li class="headerBottom__menuItem">
                    <nuxt-link class="headerBottom__itemLink"
                               :to="{name: 'about'}">
                        О компании
                    </nuxt-link>
                </li>
                <li class="headerBottom__menuItem">
                    <nuxt-link class="headerBottom__itemLink"
                               :to="{name: 'services'}">
                        Услуги
                    </nuxt-link>
                </li>
                <li class="headerBottom__menuItem">
                    <nuxt-link class="headerBottom__itemLink"
                               :to="{name: 'vacancies'}">
                        Вакансии
                    </nuxt-link>
                </li>
                <li class="headerBottom__menuItem">
                    <nuxt-link class="headerBottom__itemLink"
                               :to="{name: 'contacts'}">
                        Контакты
                    </nuxt-link>
                </li>
            </ul>
        </div>
        <div class="headerBottom__phone">
            <p class="headerBottom__phoneNumber" type="tel">+7 (3532) 78-13-37</p>
            <a class="headerBottom__requestCall"
               @click="$modal.show('servicesForm')">
                Заказать звонок
            </a>
        </div>

        <button class="headerBottom__hambrugerBtn"
                @click="$emit('responsiveOpen')">
            <svg-icon class="headerBottom__hambruger"
                      name="hamburger"/>
        </button>
    </div>

</template>

<script>
    import ResponsiveMenu from "../../componets/responsiveMenu/index";
    import Overlay from "../../componets/overlay/index";


    export default {
        name: "HeaderBottom",

        components: {
            ResponsiveMenu,
            Overlay,
        },

        props: {
            settings: {
                required: true,
            },
        },

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

            &:before {
                content: '';
                position: absolute;
                top: 40%;
                left: -7%;
                width: 5px;
                height: 5px;
                background-color: $red;
                border-radius: 50%;
            }

            @include below($lg-tablet) {
                display: none;
            }
        }

        &__operatingMode.open {
            &:before {
                background-color: #20D267;
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
            text-decoration: none;

            color: $grey;

            @include below($lg-mobile) {
                font-size: 12px;
            }
        }

        &__requestCall {
            font-size: 12px;
            font-weight: 400;

            color: $red;
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