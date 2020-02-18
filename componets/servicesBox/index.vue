<template>
    <div class="servicesBox">
        <div class="container">
            <h1 class="servicesBox__title">{{pageInfo.h1}}</h1>
            <div class="servicesBox__container">
                <div class="servicesBox__item" v-for="(servis, index) in services">
                    <div class="servicesBox__itemContent">
                        <div class="servicesBox__itemTitle">{{servis.title}}</div>
                        <div class="servicesBox__itemList" v-html="servis.short"></div>
                    </div>
                    <nuxt-link class="servicesBox__btn"
                               :to="{name: ''}"
                    >
                        <Btn :title="'Подробнее'"/>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Btn from "../btn/index";
    export default {
        name: "servicesBox",

        middleware: ['services'],

        components: {
            Btn,
        },

        props: {

            pageInfo: {
                required: true,
            },

            services: {
                required: true,
            },

        },

    }
</script>

<style lang="scss">

    .servicesBox {

        &__title {
            margin-left: 15px;
            margin-bottom: 30px;

            @include below($md-tablet) {
                margin-bottom: 20px;
            }
            @include below($lg-mobile) {
                flex-direction: column;
            }
        }

        &__container {
            display: flex;

            @include below($md-tablet) {
                flex-direction: column;
            }
        }

        &__item {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;

            width: 50%;
            padding: 50px 20px 50px 70px;

            z-index: 2;
            background-color: white;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

            &:first-child {
                width: calc(50% - 30px);
                margin-right: 30px;
            }

            @include below($lg-tablet) {
                padding-left: 30px;
            }
            @include below($md-tablet) {
                width: 100%;

                &:first-child {
                    width: 100%;

                    margin-right: 0;
                    margin-bottom: 20px;
                }
            }
        }

        &__itemContent {
            display: flex;
            justify-content: space-between;
            flex-direction: column;


            width: 100%;
        }

        &__itemTitle {
            margin-bottom: 20px;

            font-family: $Bebas;
            font-weight: 400;
            font-size: 24px;
        }

        &__itemList {
            margin-bottom: 25px;

            p {
                &:not(:last-child) {
                    margin-bottom: 20px;
                }
            }
        }

        &__text {
            margin-bottom: 25px;
        }

        &__btn {
            text-decoration: none;
        }
    }
</style>