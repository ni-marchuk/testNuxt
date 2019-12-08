<template>
    <div class="breadCrumbs">
        <div class="container">
            <p>Главная/Вакансии</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BreadCrumbs"
    }
</script>

<style lang="scss">
    .breadCrumbs {

        margin-bottom: 25px;

        @include below($md-tablet) {
            margin-bottom: 30px;
        }

        p {
            padding-bottom: 20px;
            font-size: 14px;

            color: $greyLight;
            border-bottom: 1px solid $greyLight;
        }
    }
</style>