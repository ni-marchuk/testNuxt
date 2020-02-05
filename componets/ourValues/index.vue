<template>
    <div class="ourValues">
        <div class="container">
            <h2 class="ourValues__title">{{aboutContent.values['title']}}</h2>
            <ul class="ourValues__list">
                <li class="ourValues__item" v-for="value in aboutContent.values.items">{{value}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "OurValues",

        props: {
            aboutContent: {},
        },
    }
</script>

<style lang="scss">
    .ourValues {

        &__title {
            margin-bottom: 25px;

            @include below($lg-mobile) {
                margin-bottom: 15px;
            }
        }

        &__list {
            display: flex;
            flex-wrap: wrap;

            padding-left: 5%;

            max-width: 70%;

            @include below($lg-tablet) {
                max-width: 100%;
            }
        }

        &__item {
            position: relative;
            width: calc(50% - 10px);


            margin-bottom: 10px;

            font-size: 20px;
            font-weight: 700;
            list-style: none;

            color: $grey;

            &:after {
                position: absolute;
                top: 5px;
                left: -25px;

                display: block;
                width: 22px;
                height: 22px;

                content: '';
                background-image: url('../../static/img/sprite/rectangle.svg');
                background-size: 22px 22px;
                background-repeat: no-repeat;
            }

            &:nth-child(odd) {
                margin-right: 20px;
            }

            @include below($lg-mobile) {
                font-size: 16px;
            }

            @include below($lg-mobile) {
                width: 100%;
            }
        }

    }
</style>