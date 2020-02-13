<template>
    <label class="customCheckbox">
        <input class="customCheckbox__input"
               type="checkbox"
               :id="id"
               :disabled="disabled"
               :readonly="readonly"
               :checked="checked"
               :name="name"
               :value="value"
               @change="$emit('change', $event.target.checked)"
        />
        <label class="customCheckbox__label"
               :for="id">
        </label>
        <span v-html="htmlContent + textContent"></span>
    </label>
</template>

<script>
    export default {
        name: 'Checkbox',
        data() {
            return {
//
            }
        },

        //По умолчанию v-model на компоненте использует входной параметр value
        // и событие input. Но некоторые типы полей, такие как чекбоксы или
        // радиокнопки, могут использовать атрибут value для других целей.
        // Использование опции model позволит избежать конфликта в таких случаях:
        model: {
            prop: 'checked',
            event: 'change'
        },

        props: {

            checked: {
                type: Boolean,
            },

            id: {
                type: String,
                default() {
                    return ''
                }
            },

            name: {
                type: String,
                default() {
                    return ''
                },
            },

            value: {
                type: String,
                default() {
                    return ''
                }
            },

            textContent: {
                type: String,
                default() {
                    return ''
                }
            },

            htmlContent: {
                type: String,
                default() {
                    return ''
                }
            },

            readonly: {
                type: Boolean,
                default() {
                    return false
                }
            },

            disabled: {
                type: Boolean,
                default() {
                    return false
                }
            }

        },

    }
</script>

<style lang="scss">
    .customCheckbox {

        position: relative;
        display: flex;

        span {
            position: relative;
            display: inline-block;
            font-size: 12px;
            cursor: pointer;

            a {
                font-size: 12px;
                color: $red;
            }
        }

        input[type="checkbox"] {
            display: none;
        }

        input[type="checkbox"] + label {
            display: inline-block;
            width: 30px;
            height: 15px;
            margin: 0 5px 0 0;
            vertical-align: middle;
            border: 1px solid black;
            border-radius: 2px;
            cursor: pointer;
        }

        input[type="checkbox"]:checked + label {
            background: url(../../assets/sprite/svg/check.svg) left top 2px no-repeat;
        }

        input[type="checkbox"]:disabled + label {
            background: url(../../assets/sprite/svg/checkDisabled.svg) left top 2px no-repeat;
            border: 1px solid grey;
        }
    }

</style>