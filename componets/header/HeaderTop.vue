<template>
    <div class="headerTop">
        <div class="headerTop__addressBox">
            <a class="headerTop__address">г. Оренбург, ул. ул.Хабаровская, 53</a>
            <a class="headerTop__mapsLink">Схема проезда</a>
        </div>
        <div class="headerTop__call">
            <a class="headerTop__phoneNumber" type="tel">+7 (3532) 78-13-37</a>
            <a class="headerTop__requestCall">Заказать звонок</a>
        </div>
    </div>

</template>

<script>

    export default {
        name: "headerTop",
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

        &__address{
            margin-right: 10px;

            text-decoration: none;
        }

        &__mapsLink {
            font-weight: 400;
        }

        &__call{
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
            font-weight: 400;

            color: $red;
        }
    }

</style>