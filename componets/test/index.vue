<template>
    <div class="test">

        <span class="test__title">{{ title }}</span>

        <p class="test__text">{{ text }}</p>

    </div>
</template>

<script>
    export default {
        name: "Test",

        props: {
            title: {
                type: String,
                required: true,
            },

            text: {
                type: String,
                default() {
                    return 'TEST TEXT';
                }
            }
        }
    }
</script>

<style lang="scss">

    .test {

    }

</style>