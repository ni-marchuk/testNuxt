<template>
    <div class="customInput"
         :class="{'is-error': error}"
         @click="$emit('click')">
        <template>
            <label class="customInput__wrapper"
                   v-if="inputType === 'text'"
            >
                {{ label }}
                <input class="customInput__input text"
                       :name="name"
                       :placeholder="placeholder"
                       :value="value"
                       :readonly="readonly"
                       :disabled="disabled"
                       autocomplete="off"
                       @input="$emit('input', $event.target.value)"
                       @focus="focus()"
                       @focusout="$emit('focusout')"
                       @blur="isFocused = true"
                />
            </label>
            <label class="customInput__wrapper" v-if="inputType === 'phone'">
                {{ label }}
                <input class="customInput__input phone"
                       type="text"
                       :name="name"
                       :placeholder="'+7 (999) 999 99 99'"
                       v-mask="'+7(###) - ### - ## - ##'"
                       :value="value"
                       :readonly="readonly"
                       :disabled="disabled"
                       autocomplete="off"
                       @input="$emit('input', $event.target.value)"
                       @focus="focus()"
                       @focusout="$emit('focusout')"
                       @blur="isFocused = true"
                />
            </label>
            <template v-if="error.length > 0">
                <p class="customInput__errorMessage">{{ error }}</p>
            </template>
        </template>
    </div>
</template>

<script>
    export default {
        name: "CustomInput",

        data() {
            return {
                isFocused: false,
            }
        },

        props: {
            label: {
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

            error: {
                default() {
                    return ''
                }
            },

            value: {
                type: String,
            },

            inputName: {
                type: String,
            },

            inputPhone: {
                type: String,
            },

            disabled: {
                type: Boolean,
                default() {
                    return false
                }
            },

            inputType: {
                type: String,
                default() {
                    return 'text'
                }
            },

            name: {
                type: String,
                default() {
                    return ''
                }
            },

            placeholder: {
                type: String,
                default() {
                    return ''
                }
            },
        },

        methods: {
            focus() {
                this.isFocused = true;
                this.$emit('clearError');
            },
        },

        computed: {
//
        },

    }
</script>

<style lang="scss">

    .customInput {

        width: 100%;

        &__input {
            width: 100%;
            height: 55px;
            padding: 0 30px;

            font-size: 14px;
        }

        &__errorMessage {
            font-size: 12px;
            color: $red;
        }

    }
</style>