<template>
    <div class="container">
        <div class="homeTestClass">
            <p>hello {{name}}</p>
            <h3><a :href="url"> hi HomePage</a></h3>
            <h3>{{userInfo}}</h3>
            <button class='btn' @click="changeName">change to Niki</button>
            <button class='btn' @click="returnName">change to Nik</button>

            <br><br>
            Add book: <input type="text" v-model="currentBook">
            <button class='btn' @click="addBook">Add Book</button>
            <br><br>
            <div v-if="books.length > 0">
                books
                <ul>
                    <li v-for="book in books">{{book}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

    export default {

        head: {
            title: 'homeTitleTest'
        },
        components: {

        },

        data() {

            return {
                name: 'nik',
                age: '26',
                url: "http://google.com",
                currentBook: 'VueJS Book',
                books: []
            }

        },

        methods: {
            changeName: function () {
                this.name = "Niki";
                this.age = "26";
            },

            returnName: function () {
                this.name = "nik";
                this.age = "85";
            },

            addBook: function () {
                this.books.push(this.currentBook);
            }
        }
        ,

        computed: {
            userInfo: function () {
                return this.name + " is " + this.age;
            }
        },

        watch: {
            name: function () {
                console.log(this.name);
            }
        }
    }
</script>

<style lang='scss'>

    .container {
        margin: 0 auto;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .btn {
        padding: 10px;

        border-radius: 5px;
        border: 1px solid green;
    }

</style>
