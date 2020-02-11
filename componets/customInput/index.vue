<template>
    <div class="customInput"
         :class="{'is-error': error}"
         @click="$emit('click')">

        <template v-if="type === 'text'">
            <label class="customInput__wrapper">
                {{ label }}
                <input class="customInput__input"
                       :type="type"
                       :name="name"
                       :placeholder="placeholder"
                       :value="value"
                       :readonly="readonly"
                       :disabled="disabled"
                       autocomplete="off"
                       @input="$emit('input', $event.target.value)"
                       @focus="focus()"
                       @focusout="$emit('focusout')"
                       @blur="isFocused = true">
            </label>

            <template v-if="error">
                <p class="input__errorMessage">{{ error }}</p>
            </template>
        </template>

    </div>
</template>

<script>
    export default {
        name: "CustomInput",

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
                    return null
                }
            },

            value: {},

            disabled: {
                type: Boolean,
                default() {
                    return false
                }
            },

            type: {
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

    }
</script>

<style lang="scss">

    .customInput {

        width: 100%;

        &__input {
            width: 100%;
        }

        &__errorMessage {
            font-size: 12px;
            color: $red;
        }

    }
</style>