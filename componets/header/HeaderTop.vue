<template>
    <div class="headerTop">
        <div class="headerTop__address">
            <a class="headerTop__city">г. Оренбург, ул. ул.Хабаровская, 53</a>
            <a class="headerTop__mapsLink">Схема проезда</a>
        </div>
        <div class="headerTop__call">
            <a class="headerTop__phoneNumber">+7 (3532) 78-13-37</a>
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

        &__address {
            display: flex;
            align-items: center;

            margin-right: 75px;

        }

        &__city {
            margin-right: 10px;
        }

        &__mapsLink {
            font-weight: 400;
        }

        &__call{
            display: flex;
        }

        &__phoneNumber {
            margin-right: 10px;

            font-size: 16px;
            font-weight: 400;

            color: $grey;
        }

        &__requestCall {
            font-weight: 400;
        }
    }

</style>