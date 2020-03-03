<template>
    <div class="responsiveMenu">
        <div class="responsiveMenu__top">
            <nuxt-link class="responsiveMenu__logoLink"
                       :to="{path: '/'}">
                <svg-icon class="responsiveMenu__logo" name="logo"/>
            </nuxt-link>
            <button class="responsiveMenu__close"
                    @click="$emit('responsiveClose')">
                <svg-icon class="responsiveMenu__closeIcn"
                          name="close"/>
            </button>
        </div>
        <div class="responsiveMenu__bottom">
            <div class="responsiveMenu__menuBox">
                <ul class="responsiveMenu__menuList">
                    <li class="responsiveMenu__menuItem"
                        @click="$emit('responsiveClose')">
                        <nuxt-link class="responsiveMenu__itemLink"
                                   :to="{name: 'about'}">
                            О компании
                        </nuxt-link>
                    </li>
                    <li class="responsiveMenu__menuItem"
                        @click="$emit('responsiveClose')">
                        <nuxt-link class="responsiveMenu__itemLink"
                                   :to="{name: 'services'}">
                            Услуги
                        </nuxt-link>
                    </li>
                    <li class="responsiveMenu__menuItem"
                        @click="$emit('responsiveClose')">
                        <nuxt-link class="responsiveMenu__itemLink"
                                   :to="{name: 'vacancies'}">
                            Вакансии
                        </nuxt-link>
                    </li>
                    <li class="responsiveMenu__menuItem"
                        @click="$emit('responsiveClose')">
                        <nuxt-link class="responsiveMenu__itemLink"
                                   :to="{name: 'contacts'}">
                            Контакты
                        </nuxt-link>
                    </li>
                </ul>
            </div>
            <div class="responsiveMenu__boxInfo">
                <div class="responsiveMenu__call">
                    <button class="responsiveMenu__requestCall"
                            @click= "$emit('responsiveClose') && $modal.show('servicesForm')">
                        Заказать звонок
                    </button>
                    <a class="responsiveMenu__phoneNumber"
                       type="tel"
                       v-if="settings">
                        {{settings.phones[0]}}
                    </a>
                </div>
                <div class="responsiveMenu__addressBox">
                    <nuxt-link class="responsiveMenu__mapsLink"
                               @click.native="$emit('responsiveClose')"
                               :to="{name: 'contacts'}">
                        Схема проезда
                    </nuxt-link>
                    <p class="responsiveMenu__address"
                       v-if="settings">
                        {{settings.address}}
                    </p>
                </div>
                <p class="responsiveMenu__operatingMode"
                   v-if="settings"
                   :class="{'open': settings.workTime.status}">
                    {{settings.workTime.text}}
                </p>
            </div>
        </div>
    </div>
</template>

<script>

    import HeaderBottom from "../header/HeaderBottom";

    export default {

        name: "ResponsiveMenu",

        components: {
            HeaderBottom
        },

        props: {

            settings: {
                required: true,
            },

        },

        comments: {
            HeaderBottom,
        },

    }
</script>

<style lang="scss">

    .responsiveMenu.is-active {
        display: flex;

    }

    .responsiveMenu {
        position: fixed;
        top: 0;
        right: 0;

        display: none;
        justify-content: space-between;
        flex-direction: column;

        max-width: 270px;
        height: 100vh;

        padding: 20px;

        background-color: white;
        box-shadow: 0 0 10px;

        z-index: 4;

        &__top {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;

            width: 100%;

            /*&:before {*/
            /*    content: '';*/
            /*    display: flex;*/
            /*    position: fixed;*/
            /*    top: 0;*/
            /*    left: 0;*/
            /*    width: calc(100% - 270px);*/
            /*    height: 100%;*/
            /*    opacity: 0.7;*/
            /*    z-index: 2;*/
            /*    background-image: linear-gradient(120deg, #eaee44, #33d0ff);*/
            /*}*/
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

            font-family: $Roboto;
            font-weight: 400;
            font-size: 12px;
            text-decoration: underline;
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
            text-align: right;
        }

        &__operatingMode {
            position: relative;

            font-size: 14px;
            text-align: right;

            &:before {
                content: '';
                position: absolute;
                top: 40%;
                left: 45%;
                width: 5px;
                height: 5px;
                background-color: $red;
                border-radius: 50%;
            }
        }

        &__operatingMode.open {
            &:before {
                background-color: #20D267;
            }
        }

    }

</style>