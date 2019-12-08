<template>
    <div class="footerBottom">
        <div class="container">
            <div class="footerBottom__wrapper">
                <div class="footerBottom__info">
                    <p class="footerBottom__text">1900-2019 ООО «Юридическая фирма «Паритет». Любое использование
                        материалов
                        сайта без разрешения запрещено.</p>
                    <p class="footerBottom__text">Данный интернет-сайт носит информационный характер и не является
                        публичной
                        офертой, определяемой положениями Статьи 437 ГК РФ. </p>
                </div>
                <div class="footerBottom__production">
                    <p class="footerBottom__text">Сделанно в&nbsp-&nbsp</p>
                    <p class="footerBottom__by">WebShtorm</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FooterBottom"
    }
</script>

<style lang="scss">
    .footerBottom {
        padding: 25px 0 25px 0;
        background-color: #f4f4f4;

        &__wrapper {
            display: flex;
            justify-content: space-between;
            align-items: center;

            @include below($lg-tablet) {
                flex-direction: column;
            }
        }

        &__info {
            width: 80%;
            padding-right: 25px;

            @include below($lg-tablet) {
                width: 100%;

                padding-right:0;
                margin-bottom: 10px;
            }
        }

        &__text {
            font-size: 13px;
            line-height: 1.4;
            color: $greyLight;
        }

        &__production {
            display: flex;
            align-items: baseline;

            width: 20%;

            @include below($lg-tablet) {
                width: 100%;
            }
        }

        &__by {
            font-size: 18px;
            font-weight: 700;
            color: $grey;
        }
    }
</style>