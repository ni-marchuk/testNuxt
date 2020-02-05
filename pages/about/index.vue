<template>
    <div class="about"
         v-if="aboutContent && aboutContent !== null && aboutContent !== undefined && typeof(aboutContent) === 'object'">
        <bread-crumbs class="about__breadCrumbs"/>
        <company-info class="about__companyInfo" :aboutContent="aboutContent"/>
        <our-values class="about__ourValues" :aboutContent="aboutContent"/>
        <statistic-company class="about__statisticCompany" :aboutContent="aboutContent"/>
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
                aboutContent: {},
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

        async mounted() {
            await this.fetchSomething();
        },

        methods: {
            async fetchSomething() {
                this.aboutContent = await this.$axios.$get('/pageInfo?page=about');
                return this.aboutContent;
            },
        },

        // computed: {
        //     checkOnContent() {
        //         if (this.aboutContent === null && this.aboutContent === undefined && typeof (this.aboutContent.values) === 'object') {
        //             return true;
        //         } else
        //             return false;
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