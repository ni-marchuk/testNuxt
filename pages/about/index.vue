<template>
    <div class="about">
        <bread-crumbs class="about__breadCrumbs"/>
        <company-info class="about__companyInfo" :pageInfo="pageInfo"/>
        <our-values class="about__ourValues"/>
        <statistic-company class="about__statisticCompany"/>
        <office-atmosphere class="about__officeAtmosphere"/>
        <mission class="about__mission"/>
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
                pageInfo: {},
                pageInfoParse: {},
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

        created() {
            this.fetchSomething();
        },

        methods: {
            async fetchSomething() {
                this.pageInfo = await this.$axios.$get('/pageInfo?page=about');
            },
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