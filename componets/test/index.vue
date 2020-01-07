<template>
    <div class="test">
        <input type="text"
               class="testInput"
               v-model="inputText"
               @blur="sendToSave">
    </div>
</template>

<script>
    export default {
        name: "Test",

        data() {
            return {
                inputText: '',
                newInputTxt: '',
                arrayMessageDelete228: [],
            }
        },

        props: {
            title: {
                type: String,
                required:
                    true,
            },

            text: {
                type: String,
                default
                    () {
                    return 'TEST TEXT';
                }
            },
        },
        methods: {
            sendToSave(newInputTxt) {
                newInputTxt = this.inputText + "228";
                this.$emit('send-to-save', newInputTxt)
            },
        }
    }

</script>

<style lang="scss">

    .test {

    }

</style>