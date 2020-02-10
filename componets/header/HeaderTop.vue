<template>
    <div class="headerTop">
        <div class="headerTop__addressBox">
            <a class="headerTop__address">
                {{settings.address}}
            </a>
            <nuxt-link class="headerTop__mapsLink"
                       :to="{name: 'contacts'}">
                Схема проезда
            </nuxt-link>
        </div>
        <div class="headerTop__call">
            <a class="headerTop__phoneNumber"
               type="tel">
                {{settings.phones[0]}}
            </a>
            <button class="headerTop__requestCall"
                    @click="$modal.show('modalForm')">
                Заказать звонок
            </button>
        </div>
    </div>

</template>

<script>

    export default {
        name: "headerTop",

        props: {
            settings: {
                required: true,
            },
        },
    }

</script>

<style lang="scss">

    .headerTop {
        display: flex;
        justify-content: flex-end;
        align-items: center;

        &__addressBox {
            display: flex;
            align-items: center;

            margin-right: 75px;
        }

        &__address {
            margin-right: 10px;

            text-decoration: none;
        }

        &__mapsLink {
            font-weight: 400;
            font-size: 14px;

            color: $red;
        }

        &__call {
            display: flex;
        }

        &__phoneNumber {
            margin-right: 10px;

            text-decoration: none;
            font-size: 16px;
            font-weight: 400;

            color: $grey;
        }

        &__requestCall {
            font-family: $Roboto;
            font-weight: 400;
            font-size: 14px;
            text-decoration: underline;
            color: $red;
        }
    }

</style>