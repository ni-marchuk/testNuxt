<template>
    <div class="customCheckbox">
        <input class="customCheckbox__input"
               type="checkbox"
               :id="id"
               :name="name"
               @change="updateInput()"
               :disabled="disabled"/>
        <label class="customCheckbox__label"
               :for="name">
            <span>cdsadsgfhgdfdskjfhfdh hg hgf hf h fghfhfghdfhdd</span>
        </label>
    </div>
</template>

<script>
    export default {
        name: 'Checkbox',
        data() {
            return {
                javascript: '',
            }
        },
        props: {

            id: {
                type: String,
                default() {
                    return ''
                }
            },

            className: {
                type: String,
                default() {
                    return ''
                }
            },

            name: {
                type: String,
                default() {
                    return ''
                }
            },

            value: {
                type: String,
                default() {
                    return ''
                }
            },

            checked: {
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

        methods: {
            updateInput: function (event) {
                this.$emit('input', event.target.checked);
            }
        }
    }
</script>

<style lang="scss">
    .customCheckbox {

        position: relative;

        span {
            position: absolute;
            top: 0;
            left: 30px;
        }

        input[type="checkbox"] {
            display: none;
        }

        input[type="checkbox"] + label {
            display: inline-block;
            width: 25px;
            height: 25px;
            margin: 0;
            vertical-align: middle;
            background: url(../../assets/sprite/svg/checked.svg) left top no-repeat;
            cursor: pointer;
        }

        input[type="checkbox"]:checked + label {
            background: url(../../assets/sprite/svg/unchecked.svg) left top no-repeat;
        }
    }

</style>