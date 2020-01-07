<template>
    <label class="checkbox"
           :class="{'is-active' : $attrs.value}">
        <span class="checkbox__custom"></span>

        <input class="checkbox__input"
               type="checkbox"
               :checked="$attrs.value"
               :disabled="disabled">
        <slot></slot>
    </label>
</template>

<script>
    export default {
        name: 'Checkbox',
        props: {

            type: {
                type: String,
                default() {
                    return 'checkbox'
                }
            },

            disabled: {
                type: Boolean,
                default() {
                    return false
                }
            }

        },

        methods: {
            input(checked) {
                if (!this.$attrs.disabled) {
                    this.$emit('input', checked)
                }
            }
        },
    }
</script>

<style lang="scss">
    .checkbox {
        position: relative;
        display: block;
        padding-left: 35px;
        font-size: 12px;
        font-weight: 400;
        text-transform: uppercase;
        cursor: pointer;

        &--radio &__custom {
            border-radius: 50%;

            &:before {
                border-radius: 50%;
            }
        }

        &--roll &__custom {
            border-radius: 25px;
            width: 32px;

            &:before {
                border-radius: 50%;
                left: 3px;
                right: auto;
                transform: translate(0, -50%);
                background-color: #747678;
                transition: transform ease .2s;
            }
        }

        &__input {
            display: none;
        }

        &__custom {
            position: absolute;
            left: 0;
            top: 0;
            width: 16px;
            height: 16px;
            display: inline-block;
            border: 1px solid #C7CACD;
            border-radius: 2px;

            &:before {
                position: absolute;
                content: '';
                width: 9px;
                height: 9px;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                background: none;
                border-radius: 1px;
            }
        }

        &.is-active {
            .checkbox__custom {
                &:before {
                    background: #3AA18E;
                }
            }
        }

        &--roll.is-active &__custom:before {
            transform: translate(15px, -50%);
        }
    }
</style>