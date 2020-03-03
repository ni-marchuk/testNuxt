<template>
    <div class="error">
        <div class="container">
            <img class="error__img" src="/img/error.png"/>
            <div class="error__wrapper">
                <h1 class="error__title">ошибка</h1>
                <p class="error__subTitle">Запрашиваемая вами страница не найдена</p>
                <Btn class="error__btn" :title="'На главную'" :class="'center'"></Btn>
            </div>
        </div>
    </div>
</template>

<script>
    import Btn from "../componets/btn/index"

    export default {
        name: "index",
        props: ['error'],
        components: {
            Btn,
        },
    }
</script>

<style lang="scss">
    .error {
        &__img {
            width: 70%;
            margin: 0 auto;
            margin-bottom: 20px;
        }

        &__wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;

            &__btn {
                padding: 0;
                margin-bottom: 25px;

                @include below($lg-tablet) {
                    font-size: 14px;
                    width: 160px;
                    height: 40px;
                }
            }

            h1 {
                margin-bottom: 25px;
            }

            p {
                margin-bottom: 25px;
            }
        }

    }
</style>