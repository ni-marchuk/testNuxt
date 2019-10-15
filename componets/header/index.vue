<template>
    <header class="header">
        <div class="container">
            <header-top class="header__top"/>
            <header-bottom class="header__bottom"/>
        </div>
    </header>

</template>

<script>
    import HeaderTop from "./HeaderTop";
    import HeaderBottom from "./HeaderBottom";

    export default {
        name: "Header",

        components: {
            HeaderTop,
            HeaderBottom
        }
    }
</script>

<style lang="scss">
    .header {

        &__top {
            margin-bottom: 20px;

            @include below($lg-tablet) {
                display: none;
            }
        }

        &__bottom {

            @include below($lg-tablet) {
                padding-top: 20px;
            }
        }
    }
</style>