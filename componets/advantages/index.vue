<template>
    <div class="advantages" v-if="benefits">
        <div class="container">
            <h2 class="advantages__title">Преимущества сотрудничества</h2>
            <div class="advantages__itemBox">
                <div class="advantages__item"
                     v-for="(item,index) in benefits"
                     :key="item.id">
                    <img class="advantages__itemImg" :src="item.thumb">
                    <p class="advantages__itemTitle">{{item.title}}</p>
                    <p class="advantages__itemText">{{item.text}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        props: {
            benefits: {
                required: true,
            }
        }
    }
</script>

<style lang="scss">
    .advantages {

        &__title {
            display: flex;
            justify-content: center;

            margin-bottom: 30px;
        }

        &__itemBox {
            display: flex;
            justify-content: space-between;

            @include below($lg-tablet) {
                justify-content: space-around;

                :nth-child(odd) {
                    margin-bottom: 20px;
                }

                flex-wrap: wrap;
            }

        }

        &__item {
            display: flex;
            flex-direction: column;
            align-items: center;

            max-width: 20%;

            @include below($lg-tablet) {
                max-width: 40%;
            }

            @include below($lg-mobile) {
                max-width: 100%;
            }
        }

        &__itemImg {
            width: 200px;
            height: 160px;
            margin-bottom: 10px;

            object-fit: contain;
        }

        &__itemTitle {
            margin-bottom: 15px;

            font-size: 20px;
            font-weight: 700;

            @include below($lg-tablet) {
                font-size: 16px;
            }
        }

        &__itemText {
            font-size: 14px;
            text-align: center;
        }
    }

</style>