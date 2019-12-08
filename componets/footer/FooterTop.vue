<template>
    <div class="footerTop">
        <div class="container">
            <div class="footerTop__wrapper">
                <div class="footerTop__services">
                    <p class="footerTop__title">Юридические услуги</p>
                    <div class="footerTop__servicesItemBox">
                        <p class="footerTop__servicesItem">Массовое судебное взыскание</p>
                        <p class="footerTop__servicesItem">Исполнительное производство</p>
                        <p class="footerTop__servicesItem">Представительство в суде по гражданским спорам</p>
                    </div>
                </div>
                <div class="footerTop__contacts">
                    <p class="footerTop__title">Мы на связи</p>
                    <div class="footerTop__contactsBox">
                        <div class="footerTop__contactsItem">
                            <p class="footerTop__contactsTitle">Фактический адрес</p>
                            <p class="footerTop__contactsStreet">460000, Оренбург, ул. Хабаровская, 53</p>
                            <a class="footerTop__contactsLink">Схема проезда</a>
                        </div>
                        <div class="footerTop__contactsItem">
                            <p class="footerTop__contactsTitle">Телефон</p>
                            <p class="footerTop__contactsNumber">+7 (3532) 78-13-37</p>
                            <a class="footerTop__contactsLink">Заказать звонок</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "footerTop"
    }
</script>

<style lang="scss">
    .footerTop {
        padding-bottom: 60px;

        @include below($lg-tablet) {
            padding-bottom: 40px;
        }

        &__wrapper {
            display: flex;

            @include below($lg-mobile) {
                flex-direction: column;
            }
        }

        &__title {
            margin-bottom: 30px;

            font-family: $Bebas;
            font-size: 24px;
            font-weight: 700;
            text-transform: uppercase;
        }

        &__services {
            display: flex;
            flex-direction: column;
            width: 50%;

            margin-right: 100px;

            @include below($md-desktop) {
                margin-right: 50px;
            }

            @include below($lg-mobile) {
                width: 100%;

                margin-right: 0;
                margin-bottom: 20px;
            }
        }

        &__servicesItemBox {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;

            padding-left: 25px;
        }

        &__servicesItem {
            position: relative;
            width: auto;

            margin-bottom: 20px;

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
        }

        &__contacts {
            display: flex;
            flex-direction: column;

            width: 50%;

            @include below($lg-mobile) {
                width: 100%;
            }
        }

        &__contactsBox {
            display: flex;
            justify-content: space-between;

            @include below($lg-tablet) {
                flex-direction: column;
            }
        }

        &__contactsItem {
            display: flex;
            flex-direction: column;

            width: 50%;

            &:first-child {
                margin-right: 20px;
                width: calc(50% - 20px);
            }

            @include below($lg-tablet) {
                width: 100%;
                &:first-child {
                    width: 100%;
                    margin-bottom: 20px;
                }
            }
        }

        &__contactsTitle {
            color: $greyLight;
            margin-bottom: 10px;
        }

        &__contactsStreet {
            color: $grey;
            margin-bottom: 5px;
        }

        &__contactsNumber {
            font-size: 20px;
            font-weight: 700;
        }

        &__contactsLink {
            color: $red;
        }
    }
</style>