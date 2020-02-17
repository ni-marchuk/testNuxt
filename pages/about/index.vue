<template>
    <div class="about">
        <breadcrumbs class="about__breadсrumbs"
                     :breadcrumbs="breadcrumbs"
        />
        <company-info class="about__companyInfo"
                      :about="about"/>
        <our-values class="about__ourValues"
                    :about="about"/>
        <statistic-company class="about__statisticCompany"
                           :statistics="statistics"/>
        <office-atmosphere class="about__officeAtmosphere"/>
        <mission class="about__mission"
                 :about="about"/>
    </div>
</template>

<script>
    import Breadcrumbs from "../../componets/breadcrumbs/breadcrumbs"
    import CompanyInfo from "../../componets/companyInfo/index"
    import OurValues from "../../componets/ourValues/index"
    import StatisticCompany from "../../componets/statisticCompany/index"
    import OfficeAtmosphere from "../../componets/officeAtmosphere/index"
    import Mission from "../../componets/mission/index"

    export default {
        name: "Index",

        components: {
            Breadcrumbs,
            CompanyInfo,
            OurValues,
            StatisticCompany,
            OfficeAtmosphere,
            Mission,
        },

        data() {
            return {
                about: null,
                statistics: null,
                breadcrumbs: [
                    {
                        name: '/',
                        text: 'Главная /',
                        params: {
                            //
                        },
                        query: {
                            // id: 1,
                        }
                    },
                    {
                        name: '/about',
                        text: 'О компании',
                        params: {
                            // id: 2,
                        },
                        query: {
                            //
                        }
                    },
                ],
            }
        },

        async asyncData({app}) {
            let about = null;
            let statistics = null;
            let promiseList = [];

            const getPageInfo = async () => {
                await app.$axios.$get("pageInfo?page=about")
                    .then(response => about = response)
                    .catch(err => console.log(err));
            };
            promiseList.push(getPageInfo());

            const getStatistics = async () => {
                await app.$axios.$get('statistics')
                    .then(response => statistics = response)
                    .catch(err => console.log(err));
            };
            promiseList.push(getStatistics());

            await Promise.all(promiseList);

            return {about, statistics};
        },

        methods: {
//
        }

    }
</script>

<style lang="scss">
    .about {

        &__companyInfo {
            margin-bottom: 50px;

            @include below($md-tablet) {
                margin-bottom: 30px;
            }
        }

        &__ourValues {
            margin-bottom: 50px;

            @include below($md-tablet) {
                margin-bottom: 30px;
            }
        }

        &__statisticCompany {
            margin-bottom: 50px;

            @include below($md-tablet) {
                margin-bottom: 30px;
            }
        }

        &__officeAtmosphere {
            margin-bottom: 50px;

            @include below($md-tablet) {
                margin-bottom: 30px;
            }
        }

        &__mission {

        }
    }
</style>