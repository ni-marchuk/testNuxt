<template>
    <div id="#app">
        <div class="form-group">
            <label for="firstName" class="titleLabel">first name</label>
            <input type="text" id="firstName" class="form-control" placeholder="firstName" v-model="formData.firstName">
        </div>
        <div class="form-group">
            <label for="lastName" class="titleLabel">last name</label>
            <input type="text" id="lastName" class="form-control" placeholder="lastName" v-model="formData.lastName">
        </div>
        <div class="form-group">
            <label for="lastName" class="titleLabel">url</label>
            <input type="text" id="url" class="form-control" placeholder="url" v-model="formData.url">
        </div>
        <div class="form-group">
            <label for="lastName" class="titleLabel">personal badge(html)</label>
            <textarea type="text" id="badge" class="form-control" cols="10" rows="3"
                      v-model="formData.badge"></textarea>
        </div>
        <div class="form-group">
            <label for="bookisbn" class="titleLabel">favorite book ISBN</label>
            <input type="text" id="bookisbn" class="form-control" placeholder="bookisbn"
                   v-model="formData.bookisbn">
        </div>
        <div class="form-group">
            <label for="technologies" class="titleLabel">Technologies</label>
            <input type="text" id="technologies" class="form-control" placeholder="technologies"
                   v-model="formData.technologies">
        </div>

        <button type="submit" class="btn btn-default" v-on:click.prevent="submit">Submit</button>

        <div class="well" v-if="showDetails">
            <h3>Dear {{fullName}}!</h3>
            <p v-html="formData.badge"></p>
            <p>my blog is <a :href="formData.url">here</a></p>
            <p></p>
            <h4>My favourite book is ''</h4>
            <img :src="book.url">
            <p>my technologies</p>
            <ul>
                <li v-for="tech in mytechnologies">{{tech}}</li>
            </ul>
        </div>
        <div v-else class="well">PLEASE submit the form</div>
    </div>
</template>

<script>
    export default {
        script: [
            { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' },
        ],

        name: "newPage",

        data() {
            return {
                formData: {
                    firstName: '',
                    lastName: '',
                    url: 'http://www.',
                    badge: '',
                    bookisbn: '',
                    technologies: '',
                },
                showDetails: false,
                book: {
                    title: '',
                    url: '',
                }
            }
        },

        methods: {
            submit: function () {
                this.showDetails = true;
            }
        },

        computed: {
            fullName: function () {
                return this.formData.firstName + " " + this.formData.lastName;
            },

            mytechnologies: function () {
                return this.formData.technologies.split(',');
            }
        },

        watch: {
            "formData.bookisbn": function () {
                let url = "http://crossorigin.me/http://openlibrary.org/api/books?bibkeys=ISBN:" + this.formData.bookisbn + "&json&jscmd=data";
                let inst = this;
                $.getJSON(url, function (data) {
                    inst.book.title = data["ISBN:" + inst.formData.bookisbn].title;
                    inst.book.title = data["ISBN:" + inst.formData.bookisbn].title;
                });
            }
        }
    }
</script>

<style lang="scss">

    .form-group {
        display: flex;
        flex-direction: column;
    }

    .titleLabel {
        font-size: 18px;
        margin: 10px;
    }

</style>

<!--https://www.youtube.com/watch?v=b7r6JlLvF0Q&list=PLu_62Q68DvTrWAR_3-iOfIdbqKU912i3z&index=2-->
