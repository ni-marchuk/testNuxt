<template>
    <div class="contactsBox">
        <div class="container">
            <div class="contactsBox__head">
                <h1 class="contactsBox__title">Контакты</h1>
                <button class="contactsBox__feedBackBtn">
                    <svg-icon class="contactsBox__feedBackImg" name="writing"></svg-icon>
                    <a class="contactsBox__feedBackLink">Обратная связь</a>
                </button>
            </div>
            <div class="contactsBox__body">
                <div class="contactsBox__bodyRow">
                    <div class="contactsBox__bodyCollumn">
                        <p class="contactsBox__bodyTitle">Фактический адрес:</p>
                        <p class="contactsBox__bodyText">460000, Оренбург, ул. Хабаровская, 53</p>
                    </div>
                    <div class="contactsBox__bodyCollumn">
                        <p class="contactsBox__bodyTitle">Позвонить:</p>
                        <a class="contactsBox__phone" href="tel: +73532781337">+7 (3532) 78-13-37</a>
                    </div>
                </div>
                <div class="contactsBox__bodyRow">
                    <div class="contactsBox__bodyCollumn">
                        <p class="contactsBox__bodyTitle">Режим работы:</p>
                        <p class="contactsBox__bodyText">Пн-вс, 9:00 - 18:00</p>
                    </div>
                    <div class="contactsBox__bodyCollumn">
                        <p class="contactsBox__bodyTitle">Написать нам:</p>
                        <a class="contactsBox__mail" href="mailto:post@ufparitet.ru">post@ufparitet.ru</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "contactsBox"
    }
</script>

<style lang="scss">
    .contactsBox {

        &__head {
            display: flex;
            align-items: center;
            justify-content: space-between;

            margin-bottom: 40px;

            @include below($lg-tablet) {
                margin-bottom: 30px;
            }

            @include below($lg-mobile) {
                flex-direction: column;
                align-items: flex-start;
            }
        }

        &__title {
            @include below($lg-mobile) {
                margin-bottom: 20px;
            }
        }

        &__feedBackBtn {
            display: flex;
            align-items: center;
        }

        &__feedBackLink {
            color: $red;
        }

        &__feedBackImg {
            width: 30px;
            height: 30px;

            margin-right: 10px;
            fill: $red;
        }

        &__body {
            max-width: 80%;

            @include below($lg-mobile) {
                width: 100%;
            }
        }

        &__bodyRow {
            display: flex;
            justify-content: space-between;
            width: 100%;

            &:first-child {
                margin-bottom: 20px;
            }

            @include below($lg-mobile) {
                flex-direction: column;
            }
        }

        &__bodyCollumn {
            display: flex;
            flex-direction: column;

            width: 30%;

            @include below($lg-mobile) {
                width: 100%;
            }

            &:nth-child(odd) {
                padding-right: 10%;
                width: 70%;

                @include below($lg-mobile) {
                    padding-right: 0;
                    width: 100%;
                    margin-bottom: 20px;
                }
            }
        }

        &__bodyTitle {
            margin-bottom: 10px;
            font-size: 14px;
            line-height: 1.3;
            color: $greyLight;
            opacity: .6;
        }

        &__text {
            font-weight: 400;

            color: $grey;
        }

        &__phone {
            font-size: 20px;
            font-weight: 700;
            text-decoration: none;

            color: $grey;
        }

        &__mail {
            color: $red;
        }

    }
</style>