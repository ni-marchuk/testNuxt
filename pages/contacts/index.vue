<template>
    <div class="contacts">
        <bread-crumbs class="services__breadCrumbs"
                      :breadcrumbs="breadcrumbs"
        />
        <contacts-box class="contacts__contactsBox"/>
        <driving-directions class="contacts__drivingDirections"/>
    </div>
</template>

<script>
    import BreadCrumbs from "../../componets/breadcrumbs/breadcrumbs"
    import ContactsBox from "../../componets/contactsBox/index"
    import DrivingDirections from "../../componets/drivingDirections/index"
    import Meta from '../../mixins/meta';

    export default {
        name: "Index",
        mixins: [Meta],

        components: {
            BreadCrumbs,
            ContactsBox,
            DrivingDirections,
        },

        data() {
            return {
                breadcrumbs: [
                    {
                        name: '/',
                        text: 'Главная /',
                    },
                    {
                        name: '/contacts',
                        text: 'Контакты',
                    },
                ],
            }
        },

        async asyncData({app}) {
            let pageInfo = null;
            let metaInformation = {};

            const getPageInfo = async () => {
                await app.$axios.$get("pageInfo?page=contacts")
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


    }
</script>

<style lang="scss">
    .contacts {

        &__contactsBox {
            margin-bottom: 40px;

            @include below($lg-mobile) {
                margin-bottom: 20px;
            }
        }

    }
</style>



