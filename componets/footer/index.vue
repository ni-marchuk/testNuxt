<template>
    <div class="footer">
        <footer-top class="footer__top"
                    :settings="settings"/>
        <footer-middle class="footer__middle"
                       :settings="settings"/>
        <footer-bottom class="footer__bottom"/>
    </div>
</template>

<script>
    import FooterTop from "./FooterTop";
    import FooterMiddle from "./FooterMiddle";
    import FooterBottom from "./FooterBottom";

    export default {
        name: "index",

        components: {
            FooterTop,
            FooterMiddle,
            FooterBottom,
        },

        props: {
            settings: {
                required: true,
            },
        },
    }
</script>

<style lang="scss">
    .footer {
        padding-top: 60px;
        background-color: #F7F7F7;

        @include below($lg-tablet) {
            padding-top: 40px;
        }

        &__top {
        }

        &__bottom {

        }
    }
</style>