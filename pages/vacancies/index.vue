<template>
    <div class="vacancies">
        <bread-crumbs class="vacancies__breadCrumbs"/>
        <career class="vacancies__career"/>
        <news-slider class="vacancies__newsSlider"/>
        <feedback class="vacancies__feedback"/>
        <open-vacancies class="vacancies__openVacancies"/>
    </div>
</template>

<script>
    import BreadCrumbs from "../../componets/breadCrumbs/index"
    import Career from "../../componets/career/index"
    import NewsSlider from "../../componets/newsSlider/index"
    import Feedback from "../../componets/feedback/index"
    import OpenVacancies from "../../componets/openVacancies/index"

    export default {
        name: "Index",

        components: {
            BreadCrumbs,
            Career,
            NewsSlider,
            Feedback,
            OpenVacancies,
        }
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