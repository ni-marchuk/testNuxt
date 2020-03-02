<template>
    <div class="footerMiddle">
        <div class="container">
            <div class="footerMiddle__wrapper">
                <a class="footerMiddle__logoLink" href="">
                    <svg-icon class="footerMiddle__logo" name="logo"/>
                </a>
                <div class="footerMiddle__menu">
                    <nuxt-link class="footerMiddle__menuItem"
                               :to="{name: 'about'}">
                        О компании
                    </nuxt-link>
                    <nuxt-link class="footerMiddle__menuItem"
                               :to="{name: 'services'}">
                        Услуги
                    </nuxt-link>
                    <nuxt-link class="footerMiddle__menuItem"
                               :to="{name: 'vacancies'}">
                        Вакансии
                    </nuxt-link>
                    <nuxt-link class="footerMiddle__menuItem"
                               :to="{name: 'contacts'}">
                        Контакты
                    </nuxt-link>
                    <nuxt-link class="footerMiddle__menuItem"
                               :to="{name: 'about'}">
                        О компании
                    </nuxt-link>
                </div>
                <div class="footerMiddle__social">
                    <a class="footerMiddle__socialItem" :href="settings.vk">
                        <svg-icon class="footerMiddle__socialItem" name="vk"></svg-icon>
                    </a>
                    <a class="footerMiddle__socialItem" :href="settings.instagram">
                        <svg-icon class="footerMiddle__socialItem" name="inst"></svg-icon>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FooterMiddle",

        props: {
            settings: {
                required: true,
            },
        },
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
            justify-content: flex-start;
            flex-wrap: wrap;

            width: 50%;

            @include below($lg-tablet) {
                width: 65%;
            }

            @include below($md-tablet) {
                display: none;
            }
        }

        &__menuItem {
            width: 33%;

            cursor: pointer;
            text-decoration: none;
            color: $grey;

            &:nth-child(-n+3) {
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