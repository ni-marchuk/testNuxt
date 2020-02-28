<template>
    <div class="servis">
        <bread-crumbs class="servis__breadCrumbs"
                      :breadcrumbs="breadcrumbs"
        />
        <div class="container">
            <h1 class="servis__title">{{getServisContent.title}}</h1>
            <div class="servis__content"
                 v-html="getServisContent.text">
            </div>
        </div>
    </div>
</template>

<script>
    import BreadCrumbs from "../../componets/breadcrumbs/breadcrumbs"

    export default {
        name: "Servis",

        components: {
            BreadCrumbs,
        },

        middleware: ['services'],

        data() {
            return {
                breadcrumbs: [
                    {
                        name: '/',
                        text: 'Главная /',
                    },
                    {
                        name: '/services',
                        text: 'Услуги /',
                    },
                    {
                        name: '/services/judical',
                        text: 'Судебное представительство',
                    },
                ],
            }
        },

        mounted() {
            //
        },

        computed: {
            getServisContent() {
                //slice убрать 1ый слэш
                return this.$store.getters['services/GET_SERVIS_CONTENT'](this.$route.path.slice(1));
            },
        }
    }
</script>

<style lang="scss">
    .servis {

        &__wrapper {
            display: flex;
        }

        &__inner {
            padding: 0 5%;
            width: 70%;
        }


        &__subTitle {
            margin-bottom: 20px;

            font-size: 24px;
            font-weight: 700;
            color: $grey;
        }

        &__text {
            margin-bottom: 20px;
            padding-left: 5%;
        }

        &__schemeBox {
            margin-bottom: 40px;
        }

        &__schemeTitle {
            padding-left: 5%;
            margin-bottom: 10px;

            font-size: 18px;
            font-weight: 700;

            color: $grey;
        }
////
        &__title {
            margin-bottom: 40px;

            @include below($md-tablet) {
                margin-bottom: 20px;
            }
        }

        h3 {
            &:before {
                position: absolute;
                top: 50%;
                left: -15px;
                content: '';
                width: 4px;
                height: 4px;
                background-image: url("../../assets/sprite/svg/rectangle.svg");

                strong {

                }
            }
        }

        ul {
            padding: 20px 40px;

            background-color: #F8F8F8;
        }

        li {
            position: relative;

            margin-bottom: 10px;

            font-size: 16px;
            color: $greyLight;
            list-style: none;

            &:before {
                position: absolute;
                top: 50%;
                left: -15px;
                content: '';
                width: 4px;
                height: 4px;
                background-color: $red;
            }
        }

        &__breadCrumbs ul {
            padding: 0;
            background: none;
        }

    }
</style>