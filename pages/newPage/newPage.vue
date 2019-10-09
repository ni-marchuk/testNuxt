<template>
    <div id="app">
        <div class="form-group">
            <label for="firstName">First name</label>
            <input type="text" id="firstname" class="form-control" placeholder="firstname" v-model="formData.firstName">
        </div>
    </div>
</template>

<script>
    export default {
        name: "newPage",
        data() {
            return {
                formData: {
                    firstName: '',
                    lastName: '',
                    url: 'http://www',
                    badge: '',
                    bookisbn: ''
                }
            }
        }
    }
</script>

<style lang="scss">

</style>