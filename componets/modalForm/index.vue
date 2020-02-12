<template>
    <modal name="modalForm" class="modalForm"
           :width="300"
           :height="300">
        <p class="modalForm__title">Закажите консультацию специалиста</p>
        <p class="modalForm__text">Просто заполните форму ниже. Мы перезвоним, назначим время для собеседования</p>
        <form class="modalForm__form">
            <custom-input class="modalForm__input modalForm__inputName"
                          :inputType="`text`"
                          :placeholder="'Имя и фамилия'"
                          @focusout="met()"
                          :error="`errrrrr`"
            />
            <custom-input class="modalForm__input modalForm__inputPhone"
                          :inputType="`phone`"
                          @focusout="met()"
                          :error="`errrrrr`"
            />
            <custom-checkbox :id="'checkName'"
                             v-model="conditionsCheck"
                             @change="met()"
                             :htmlContent="`Я согласен на обработку персональных данных. <a href='/'>С политикой защиты данных</a> ООО «Паритет» ознакомлен.`"
            />
        </form>
    </modal>
</template>

<script>
    import CustomInput from "../customInput/index"
    import CustomCheckbox from "../customCheckbox/index"

    export default {
        name: "modalForm",

        props: {},

        components: {
            CustomInput,
            CustomCheckbox,
        },

        data() {
            return {
                time: 0,
                duration: 5000,
                status: false,
                conditionsCheck: true,
            }
        },

        methods: {
            met() {
                console.log(this.conditionsCheck);
            },
        },
    }
</script>

<style lang="scss">

    .modalForm {

        width: 100%;

        &__input {
            max-width: 200px;
        }

        &__checkbox {

        }

        &__btn {

        }
    }
</style>