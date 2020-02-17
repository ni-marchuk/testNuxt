<template>
    <div class="servicesForm">

        <form class="servicesForm__wrapper">
            <p class="servicesForm__title"
               @click="test()">
                Закажите консультацию специалиста
            </p>
            <p class="servicesForm__text">
                Просто заполните форму ниже. Мы перезвоним, назначим время для
                собеседования
            </p>
            <div class="servicesForm__controls">
                <custom-input class="servicesForm__input inputName"
                              :placeholder="'Имя и фамилия'"
                              v-model="inputName"
                              :error="errorName"
                              @focusout="errorMessegeName()"
                />
                <custom-input class="servicesForm__input inputPhone"
                              :inputType="`phone`"
                              v-model="inputPhone"
                              :error="errorPhone"
                              @focusout="errorMessegePhone()"

                />
                <custom-checkbox class="servicesForm__checkbox"
                                 :id="'checkName'"
                                 v-model="conditionsCheck"
                                 :htmlContent="`Я согласен на обработку персональных данных. <a href='/'>С политикой защиты данных</a> ООО «Паритет» ознакомлен.`"
                />
                <Btn class="servicesForm__btn"
                     :textCenter="true"
                     :title="`Отправить`"
                     :disabled="!validationForm()"
                     :checked="false"
                >
                </Btn>
            </div>
        </form>
    </div>
</template>

<script>
    import CustomInput from "../customInput/index"
    import CustomCheckbox from "../customCheckbox/index"
    import Btn from "../btn/index"

    export default {
        name: "ServicesForm",

        props: {},

        components: {
            CustomInput,
            CustomCheckbox,
            Btn,
        },

        data() {
            return {
                time: 0,
                duration: 5000,
                status: false,

                conditionsCheck: false,
                disabledBtn: true,

                errorName: '',
                errorPhone: '',

                inputName: '',
                inputPhone: '',
            }
        },

        methods: {
            validationForm() {
                if (this.isNameValid && this.isPhoneValid && this.conditionsCheck) {
                    return true;
                }
            },

            errorMessegeName() {
                if (!this.isNameValid) {
                    console.log(this.isNameValid);
                    this.errorName = 'Некоректный ввод. Имя и фамилия должно быть длинее чем 5 знаков и не должны содержать спец.символы'
                } else
                    this.errorName = ''
            },

            errorMessegePhone() {
                if (!this.isPhoneValid) {
                    this.errorPhone = 'Номер телефона введен неверно'
                } else
                    this.errorPhone = ''
            },
        },

        computed: {

            isNameValid() {
                return this.inputName.length > 5 && /^[a-zA-Zа-яА-ЯёЁ'][a-zA-Z-а-яА-ЯёЁ' ]+[a-zA-Zа-яА-ЯёЁ']?$/.test(this.inputName);
            },

            isPhoneValid() {
                return this.inputPhone.length === 23;
            },
        },

    }
</script>

<style lang="scss">


    .servicesForm {
        width: 100%;


        &__title {
            text-align: center;
            margin-bottom: 15px;
            font-family: $Bebas;
            font-size: 28px;
            font-weight: 700;
        }

        &__text {
            text-align: center;
            margin-bottom: 15px;
            font-size: 14px;
            color: $greyLight;
        }

        &__input {
            margin-bottom: 15px;
        }

        &__checkbox {
            margin-bottom: 15px;
        }

        &__btn {
            margin: 0 auto;
        }
    }
</style>