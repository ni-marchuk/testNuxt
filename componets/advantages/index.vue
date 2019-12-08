<template>
    <div class="advantages">
        <div class="container">
            <h2 class="advantages__title">Преимущества сотрудничества</h2>
            <div class="advantages__itemBox">
                <div class="advantages__item">
                    <img class="advantages__itemImg" src="/img/item1.png">
                    <p class="advantages__itemTitle">Без предоплаты</p>
                    <p class="advantages__itemText">Оплата услуг по факту, согласно заключенного договора, сначала Вы
                        получаете деньги от должника и потом оплачиваете нашу работу</p>
                </div>
                <div class="advantages__item">
                    <img class="advantages__itemImg" src="/img/item2.png">
                    <p class="advantages__itemTitle">Более 18 лет опыта</p>
                    <p class="advantages__itemText">Мы специализируемся на представлении в судах и сопровождении
                        исполнения
                        решений</p>
                </div>
                <div class="advantages__item">
                    <img class="advantages__itemImg" src="/img/item3.png">
                    <p class="advantages__itemTitle">Экономия времени</p>
                    <p class="advantages__itemText">Обеспечиваем быструю подготовку документов у нотариуса, представляем
                        интересы на всех этапах дела без Вашего участия</p>
                </div>
                <div class="advantages__item">
                    <img class="advantages__itemImg" src="/img/item4.png">
                    <p class="advantages__itemTitle">Отчет о ходе дела</p>
                    <p class="advantages__itemText">Предоставляем отчет обо всех движениях по делу, в том числе о
                        поданных
                        процессуальных документах</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index"
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