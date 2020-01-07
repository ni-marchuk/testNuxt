<template>
    <modal name="modalForm" class="modalForm"
           :width="300"
           :height="300"
           @before-open="beforeOpen"
           @before-close="beforeClose">
        <b>{{time}}</b>
        <p class="modalForm__title">Закажите консультацию специалиста</p>
        <p class="modalForm__text">Просто заполните форму ниже. Мы перезвоним, назначим время для собеседования</p>
        <form class="modalForm__form">
            <custom-input class="modalForm__input"/>
            <custom-input class="modalForm__input"/>

            <checkbox class="checkbox--roll modalForm__checkbox"
                      type="checkbox"
                      v-model="status"
                      @change="status = $event">
            </checkbox>
        </form>
    </modal>
</template>

<script>
    import CustomInput from "../customInput/index"
    import Checkbox from "../checkbox/index"

    export default {
        name: "modalForm",

        props: {

        },

        components: {
            CustomInput,
            Checkbox,
        },

        data() {
            return {
                time: 0,
                duration: 5000,
                status: false,
            }
        },

        methods: {
            beforeOpen(event) {
                console.log(event);
                // Set the opening time of the modal
                this.time = Date.now()
            },

            beforeClose(event) {
                console.log(event);
                // If modal was open less then 5000 ms - prevent closing it
                if (this.time + this.duration < Date.now()) {
                    event.stop()
                }
            }
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