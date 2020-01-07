<template>
    <div class="companyInfo">
        <div class="container">
            <h1 class="companyInfo__title">{{pageInfo.h1}}</h1>
            <div class="companyInfo__textContent" v-html="pageInfo.text">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CompanyInfo",

        props: {
            pageInfo: {},
        },
    }
</script>

<style lang="scss">
    .companyInfo {

        &__title {
            margin-bottom: 40px;

            @include below($lg-tablet) {
                margin-bottom: 30px;
            }

            @include below($md-tablet) {
                margin-bottom: 20px;
            }
        }

        &__textContent {
            padding-left: 5%;

            p {
                margin-bottom: 20px;

                @include below($lg-tablet) {
                    font-size: 14px;
                }

                @include below($lg-mobile) {
                    font-size: 12px;
                }
            }
        }
    }
</style>