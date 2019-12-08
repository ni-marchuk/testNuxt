<template>
    <div class="vacancies">
        <bread-crumbs class="vacancies__breadCrumbs"/>
        <career class="vacancies__career"/>
        <news-slider class="vacancies__newsSlider"/>
        <feed-back class="vacancies__feedBack"/>
        <open-Vacancies class="vacancies__openVacancies"/>
    </div>
</template>

<script>
    import BreadCrumbs from "../../componets/breadCrumbs/index"
    import Career from "../../componets/career/index"
    import NewsSlider from "../../componets/newsSlider/index"
    import FeedBack from "../../componets/feedBack/index"
    import OpenVacancies from "../../componets/openVacancies/index"

    export default {
        name: "Index",

        components: {
            BreadCrumbs,
            Career,
            NewsSlider,
            FeedBack,
            OpenVacancies,
        }
    }
</script>

<style lang="scss">

    .vacancies {

        &__newsSlider {
            margin-bottom: 60px;
        }

        &__feedBack {
            margin-bottom: 30px;
        }

        &__openVacancies {

        }
    }



</style>