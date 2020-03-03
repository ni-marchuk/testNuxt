<template>
    <div class="footerTop">
        <div class="container">
            <div class="footerTop__wrapper">
                <div class="footerTop__services">
                    <p class="footerTop__title">Юридические услуги</p>
                    <div class="footerTop__servicesItemBox">
                        <nuxt-link class="footerTop__servicesLink"
                                   v-for="(item,index) in servicesInfo"
                                   :key="item.id"
                                   :to="{path: '/' + item.link}">
                            <p class="footerTop__servicesItem">
                                {{item.title}}
                            </p>
                        </nuxt-link>
                    </div>
                </div>
                <div class="footerTop__contacts">
                    <p class="footerTop__title">Мы на связи</p>
                    <div class="footerTop__contactsBox">
                        <div class="footerTop__contactsItem">
                            <p class="footerTop__contactsTitle">Фактический адрес</p>
                            <p class="footerTop__contactsStreet">{{settings.address}}</p>
                            <nuxt-link class="footerTop__contactsLink"
                                       :to="{name: 'contacts'}">
                                Схема проезда
                            </nuxt-link>
                        </div>
                        <div class="footerTop__contactsItem">
                            <p class="footerTop__contactsTitle">Телефон</p>
                            <p class="footerTop__contactsNumber" v-for="(item,index) in settings.phones">{{item}}</p>
                            <button class="footerTop__contactsLink"
                                    @click="$modal.show('servicesForm')">
                                Заказать звонок
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "footerTop",

        props: {
            settings: {
                required: true,
            },
        },

        computed: {
            servicesInfo() {
                return this.$store.getters['services/SERVICES'];
            },
        },
    }
</script>

<style lang="scss">
    .footerTop {
        padding-bottom: 60px;

        @include below($lg-tablet) {
            padding-bottom: 40px;
        }

        &__wrapper {
            display: flex;

            @include below($lg-mobile) {
                flex-direction: column;
            }
        }

        &__title {
            margin-bottom: 30px;

            font-family: $Bebas;
            font-size: 24px;
            font-weight: 700;
            text-transform: uppercase;
        }

        &__services {
            display: flex;
            flex-direction: column;
            width: 100%;
        }

        &__servicesItemBox {
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;

            padding: 0 25px;
        }

        &__servicesLink {
            position: relative;
            width: auto;

            margin-bottom: 20px;
            color: $grey;
            text-decoration: none;

            &:not(:last-child) {
                margin-right: 45px;
            }
        }

        &__servicesItem {
            &:after {
                position: absolute;
                top: 10%;
                left: -25px;

                display: block;
                width: 22px;
                height: 22px;

                content: '';
                background-image: url('../../static/img/sprite/rectangle.svg');
                background-size: 22px 22px;
                background-repeat: no-repeat;
            }
        }

        &__contacts {
            display: flex;
            flex-direction: column;

            width: 100%;
        }

        &__contactsBox {
            display: flex;
            justify-content: space-between;

            @include below($lg-tablet) {
                flex-direction: column;
            }
        }

        &__contactsItem {
            display: flex;
            flex-direction: column;

            width: 50%;

            &:first-child {
                margin-right: 20px;
                width: calc(50% - 20px);
            }

            @include below($lg-tablet) {
                width: 100%;
                &:first-child {
                    width: 100%;
                    margin-bottom: 20px;
                }
            }
        }

        &__contactsTitle {
            color: $greyLight;
            margin-bottom: 10px;
        }

        &__contactsStreet {
            color: $grey;
            margin-bottom: 5px;
        }

        &__contactsNumber {
            font-size: 20px;
            font-weight: 700;
        }

        &__contactsLink {
            font-size: 14px;
            text-decoration: underline;
            text-align: left;
            color: $red;
        }

    }

</style>