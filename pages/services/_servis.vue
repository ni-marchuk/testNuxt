<template>
    <div class="servis">
        <bread-crumbs class="servis__breadCrumbs"
                      :breadcrumbs="breadcrumbs"/>
        <div class="container">
            <div class="servis__wrapper">
                <div class="servis__inner">
                    <h1 class="servis__title"
                        v-if="getServisContent">
                        {{getServisContent.title}}
                    </h1>
                    <div class="servis__content"
                         v-if="getServisContent"
                         v-html="getServisContent.text">
                    </div>
                </div>
                <services-form class="servis__servicesForm"/>
            </div>
        </div>
    </div>
</template>

<script>
    import BreadCrumbs from "../../componets/breadcrumbs/breadcrumbs"
    import ServicesForm from "../../componets/servicesForm/index"
    import Meta from '../../mixins/meta';

    export default {
        name: "Servis",
        mixins: [Meta],
        middleware: ['services'],
        components: {
            BreadCrumbs,
            ServicesForm,
        },

        data() {
            return {
                pageInfo : null,
                metaInformation : {},
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
                        name: this.$route.path,
                        text: 'Судебное представительство',
                    },
                ],
            }
        },
        async asyncData({app,params}) {
            let pageInfo = null;
            let metaInformation = {};

            const getPageInfo = async () => {
                await app.$axios.$get(`pageInfo?page=services&slug=${params.servis}`)
                    .then((response) => {
                        metaInformation = {
                            ogDescription: response.ogDescription || null,
                            ogThumb: response.ogThumb || null,
                            ogThumb2x: response.ogThumb2x || null,
                            ogTitle: response.ogTitle || null,
                            metaKeyword: response.metaKeyword || null,
                            metaDescription: response.metaDescription || null,
                        };
                        pageInfo = response;
                    })
                    .catch(err => console.log(err));
            };
            await getPageInfo();
            return {pageInfo, metaInformation};
        },

        created() {
            console.log("pageInfo?page=services&slug=" + this.$route.params.servis);
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
            @include below($md-tablet) {
                flex-direction: column;
            }
        }

        &__inner {
            width: 70%;
            padding: 0 5% 0 3%;
            margin-bottom: 50px;

            @include below($md-tablet) {
                width: 60%;
                margin-bottom: 25px;

            }

            @include below($lg-tablet) {
                width: 100%;

            }
        }

        &__servicesForm {
            padding: 40px;
            width: 30%;
            max-width: 320px;
            height: 100%;
            max-height: 700px;
            box-shadow: 0 10px 20px -2px rgba(27, 33, 58, 0.4);

            @include below($lg-tablet) {
                width: 100%;
                max-width: 320px;
            }

            @include below($md-tablet) {
                width: 100%;
                margin: 0 auto;
                margin-bottom: 50px;
            }

        }

        &__content {

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

            @include below($lg-tablet) {
                margin-bottom: 20px;
            }
        }

        h3 {
            position: relative;
            margin-bottom: 20px;

            &:before {
                position: absolute;
                top: 10px;
                left: -23px;
                content: '';
                width: 20px;
                height: 7px;
                background-image: url("../../assets/sprite/svg/rectangle.svg");
                background-repeat: no-repeat;
            }

            strong {
                font-size: 24px;
                font-weight: 700;
                color: $grey;
            }
        }

        p {
            margin-bottom: 20px;
        }

        ul {

            background-color: #F8F8F8;
        }

        li {
            position: relative;

            margin-bottom: 10px;

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