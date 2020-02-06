<template>
    <div class="about">
        <bread-crumbs class="about__breadCrumbs"/>
        <company-info class="about__companyInfo"
                      :about="about"/>
        <our-values class="about__ourValues"
                    :about="about"/>
        <statistic-company class="about__statisticCompany"
                           :statistics="statistics"/>
        <office-atmosphere class="about__officeAtmosphere"/>
        <!--        <mission class="about__mission"-->
        <!--                 :about="about"/>-->
    </div>
</template>

<script>
    import BreadCrumbs from "../../componets/breadCrumbs/index"
    import CompanyInfo from "../../componets/companyInfo/index"
    import OurValues from "../../componets/ourValues/index"
    import StatisticCompany from "../../componets/statisticCompany/index"
    import OfficeAtmosphere from "../../componets/officeAtmosphere/index"
    import Mission from "../../componets/mission/index"

    export default {
        name: "Index",

        data() {
            return {
                about: null,
                statistics: null,
            }
        },

        components: {
            BreadCrumbs,
            CompanyInfo,
            OurValues,
            StatisticCompany,
            OfficeAtmosphere,
            Mission,
        },
        //

        async asyncData({app}) {
            let [about, statistics] = await Promise.all([
                    app.$axios.$get("pageInfo?page=abouts")
                    console.log(about)
                        .catch(err => {
                            console.log(err);
                        }),
                    app.$axios.$get("statistics")
                    console.log(res)
                        .catch(err => {
                            console.log(err);
                        }),
                ])
            ;
            return {
                about: about,
                statistics: statistics
            }
        },

        // async asyncData({app}) {
        //     let [about, statistics] = await Promise.all([
        //         app.$axios.$get("pageInfo?page=abouts"),
        //         app.$axios.$get("statistics"),
        //     ])
        //         .catch(err => {
        //             console.log(err);
        //         });
        //     return {
        //         about: about,
        //         statistics: statistics
        //     }
        // },
        //


        // async asyncData({app}) {
        //     // const aboutPromise = new Promise((res, rej) => {
        //     //     app.$axios.$get("pageInfo?page=about")
        //     //         .then(res => {
        //     //             console.log(res, 'about');
        //     //         }).catch(err => {
        //     //         console.log(err, 'about');
        //     //     })
        //     // });
        //     // const statisticsPromise = new Promise((res, rej) => {
        //     //     app.$axios.$get("statistics")
        //     //         .then(res => {
        //     //             console.log(res, 'about');
        //     //         }).catch(err => {
        //     //         console.log(err, 'statistics');
        //     //     })
        //     // });
        //     //
        //     // await Promise.allSettled([aboutPromise, statisticsPromise]).then((res) => res.forEach((result) => console.log(result)));
        //
        //     const promise1 = app.$axios.$get("pageInfo?page=about");
        //     const promise2 = app.$axios.$get("statistics");
        //     const results = await Promise.allSettled([promise1, promise2]);
        //     results.forEach(res => console.log(res))
        // },

        methods: {
//
        }


        //example request dependent sellerRes

        // asyncData ({params, app, error }) {
        //     return app.$axios.$get(`/seller/${params.username}`).then(async sellerRes => {
        //         let [categoriesRes, reviewsRes, productsRes] = await Promise.all([
        //             app.$axios.$get(`/categories`),
        //             app.$axios.$get(`/seller/${params.username}/reviews`),
        //             app.$axios.$get(`/seller/${params.username}/products`)
        //         ])
        //         return {
        //             seller: sellerRes.data,
        //             metaTitle: sellerRes.data.name,
        //             categories: categoriesRes.data,
        //             reviewsSummary: reviewsRes.summary,
        //             products: productsRes.data,
        //         }
        //     }).catch(e => {
        //         error({ statusCode: 404, message: 'Seller not found' })
        //     });
        // },
        //
        // async asyncData({app}) {
        //     const about = await app.$axios.$get("pageInfo?page=about")
        //         .catch(err => {
        //             console.log(err, 'About');
        //         });
        //     const statistics = await app.$axios.$get("statistics")
        //         .catch(err => {
        //             console.log(err, 'Statistics');
        //         });
        //     console.log(about, statistics);
        //     return {
        //         about: about,
        //         statistics: statistics
        //     }
        // },
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