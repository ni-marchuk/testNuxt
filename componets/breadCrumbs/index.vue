<template>
    <div class="breadCrumbs">
        <div class="container">
            <ul class="breadCrumbs__list">
                <nuxt-link v-for="(item,index) in breadcrumbs"
                           :to="{path: item.name, query:item.query}"
                           class="breadCrumbs__item"
                >
                    {{item.text}}
                </nuxt-link>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BreadCrumbs",

        props: {
            breadcrumbs: {
                required: true,
                type: Array,
            }
        },

    }
</script>

<style lang="scss">
    .breadCrumbs {

        margin-bottom: 25px;

        @include below($md-tablet) {
            margin-bottom: 30px;
        }

        p {
            padding-bottom: 20px;
            font-size: 14px;

            color: $greyLight;
            border-bottom: 1px solid $greyLight;
        }

        &__list {
            list-style: none;
        }

        &__item {
            display: inline;
        }

        &__item.active {
            color: #929394;
        }
    }
</style>