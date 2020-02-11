<template>
    <modal name="modalForm" class="modalForm"
           :width="300"
           :height="300">
        <p class="modalForm__title">Закажите консультацию специалиста</p>
        <p class="modalForm__text">Просто заполните форму ниже. Мы перезвоним, назначим время для собеседования</p>
        <form class="modalForm__form">
            <custom-input class="modalForm__input modalForm__inputName"
                          :placeholder="'Имя и фамилия'"
            />
            <custom-input class="modalForm__input modalForm__inputPhone"/>

            <custom-checkbox class="modalForm__checkbox"
                             :id="'javascript'"
                             :name="'javascript'"
                             :value="'3'"
                             @input="newMeth()"
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
            }
        },

        methods: {
            newMeth(){
                console.log('hello')
            },
        }
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