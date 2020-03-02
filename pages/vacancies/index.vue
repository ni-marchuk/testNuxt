<template>
    <div class="vacancies">
        <bread-crumbs class="services__breadCrumbs"
                      :breadcrumbs="breadcrumbs"
        />
        <career class="vacancies__career"
                :career="career"
                :pageInfo="pageInfo"/>
        <news-slider class="vacancies__newsSlider"/>
        <feedback class="vacancies__feedback"
                  :pageInfo="pageInfo"/>
        <open-vacancies class="vacancies__openVacancies"
                        :vacancies="vacanciesList"/>
    </div>
</template>

<script>
    import BreadCrumbs from "../../componets/breadcrumbs/breadcrumbs"
    import Career from "../../componets/career/index"
    import NewsSlider from "../../componets/newsSlider/index"
    import Feedback from "../../componets/feedback/index"
    import OpenVacancies from "../../componets/openVacancies/index"

    export default {
        //       <bread-crumbs class="vacancies__breadCrumbs"/>
        name: "Index",

        components: {
            BreadCrumbs,
            Career,
            NewsSlider,
            Feedback,
            OpenVacancies,
        },

        data() {
            return {
                breadcrumbs: [
                    {
                        name: '/',
                        text: 'Главная /',
                    },
                    {
                        name: '/vacancies',
                        text: 'Вакансии',
                    },
                ],

                pageInfo: null,
                career: null,
                vacanciesList: null,
                lifeNews: null,
            }
        },

        async asyncData({app}) {
            let pageInfo = null;
            let career = null;
            let vacanciesList = null;
            let lifeNews = null;

            let promiseList = [];

            const getPageInfo = async () => {
                await app.$axios.$get('pageInfo?page=vacancies')
                    .then(response => pageInfo = response)
                    .catch(err => console.log(err));
            };
            promiseList.push(getPageInfo());

            const getCareer = async () => {
                await app.$axios.$get('carrierBenefits')
                    .then(response => career = response)
                    .catch(err => console.log(err));
            };
            promiseList.push(getCareer());

            const getVacanciesList = async () => {
                await app.$axios.$get('vacanciesList')
                    .then(response => vacanciesList = response)
                    .catch(err => console.log(err));
            };
            promiseList.push(getVacanciesList());

            const getLifeNews = async () => {
                await app.$axios.$get('lifeNews')
                    .then(response => lifeNews = response)
                    .catch(err => console.log(err));
            };
            promiseList.push(getLifeNews());

            await Promise.all(promiseList);
            console.log(pageInfo, career);
            return {pageInfo: pageInfo, career: career, vacanciesList: vacanciesList, lifeNews: lifeNews};
        },
    }
</script>

<style lang="scss">

    .vacancies {

        &__newsSlider {
            margin-bottom: 60px;
        }

        &__feedback {
            margin-bottom: 30px;
        }

        &__openVacancies {

        }
    }


</style>