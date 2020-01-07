<template>
    <div class="feedbackForm">
        <p class="feedbackForm__title">Закажите консультацию
            Специалиста</p>
        <p class="feedbackForm__text">Просто заполните форму ниже.
            Мы перезвоним,
            ответим на все ваши вопросы
            и поможем с решением</p>
        <custom-input class="feedbackForm__input"
                      :class="{'isActive': defaultInput !== ''}"
                      :label="defaultInput"
                      :error="''"
                      v-model="defaultInput"
                      name="fullName"
                      type="text"
                      placeholder="Представьтесь"/>
        <test class="testParrent"
              @send-to-save="acceptanceCheck"
        />
    </div>
</template>

<script>
    import CustomInput from "../../componets/customInput/index";
    import Test from "../../componets/test/index";

    export default {
        name: "feedbackForm",

        components: {
            CustomInput,
            Test,
        },

        data() {
            return {
                defaultInput: '',
                arrayMessage: [],
                arrayMessageDelete228: [],
            }
        },
//в компоненте методы доступны друг для друга через this

        methods: {

            acceptanceCheck(newInputTxt) {
                this.arrayMessage.push(newInputTxt);
                this.arrayMessage = this.arrayMessage.map(item => {
                   return item.replace(/228/,'');
                });
                console.log(this.arrayMessage);
            },

            delete(arr, str) {

                let currentIndex = arr.findIndex(item => {
                    return item === str;
                });

                if (currentIndex !== -1) {
                    return arr.splice(currentIndex, 1);
                }
            }
        }

    }
</script>

<style lang="scss">
    .feedbackForm {
        width: 30%;
        max-height: 480px;

        background-color: white;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    }
</style>