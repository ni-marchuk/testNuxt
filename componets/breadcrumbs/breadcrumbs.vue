<template>
    <div class="breadcrumbs" v-if="breadcrumbs">
        <div class="container">
            <ul class="breadcrumbs__list">
                <nuxt-link v-for="(item, index) in breadcrumbs"
                           :key="index"
                           :to="{path: item.name, query:item.query}"
                           class="breadcrumbs__item"
                           :class="{active: index === breadcrumbs.length-1}"
                >
                    {{item.text}}
                </nuxt-link>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Breadcrumbs",

        props: {
            breadcrumbs: {
                required: true,
                type: Array,
            }
        },

    }
</script>

<style lang="scss">
    .breadcrumbs {

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
            text-decoration: none;
            color: $greyLight;
        }

        &__item.active {
            color: #A4A4A3;
            cursor: default;
        }
    }
</style>