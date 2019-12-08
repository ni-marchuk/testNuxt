<template>
    <div class="footer">
            <footer-top class="footer__top"/>
            <footer-middle class="footer__middle"/>
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