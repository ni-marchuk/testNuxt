<template>
    <div class="workScheme">
        <div class="container">
            <div class="workScheme__stage">
                <h2 class="workScheme__titleStage">Схема работы</h2>
                <div class="workScheme__stageBox">
                    <div class="workScheme__stageItem">
                        <div class="workScheme__stageItemTitle">Этап 1</div>
                        <div class="workScheme__stageItemState">
                            <svg-icon class="workScheme__stageItemIcn" name="check"></svg-icon>
                        </div>
                        <div class="workScheme__stageItemText">Заявка или звонок</div>
                    </div>
                    <div class="workScheme__stageItem">
                        <div class="workScheme__stageItemTitle">Этап 2</div>
                        <div class="workScheme__stageItemState">
                            <svg-icon class="workScheme__stageItemIcn" name="check"></svg-icon>
                        </div>
                        <div class="workScheme__stageItemText">Анализ документов</div>
                    </div>
                    <div class="workScheme__stageItem">
                        <div class="workScheme__stageItemTitle">Этап 3</div>
                        <div class="workScheme__stageItemState">
                            <svg-icon class="workScheme__stageItemIcn" name="check"></svg-icon>
                        </div>
                        <div class="workScheme__stageItemText">Заключение договора</div>
                    </div>
                    <div class="workScheme__stageItem">
                        <div class="workScheme__stageItemTitle">Этап 4</div>
                        <div class="workScheme__stageItemState">
                            <svg-icon class="workScheme__stageItemIcn" name="check"></svg-icon>
                        </div>
                        <div class="workScheme__stageItemText">Оказание услуги</div>
                    </div>
                    <div class="workScheme__stageItem">
                        <div class="workScheme__stageItemTitle">Этап 5</div>
                        <div class="workScheme__stageItemState">
                            <svg-icon class="workScheme__stageItemIcn" name="check"></svg-icon>
                        </div>
                        <div class="workScheme__stageItemText">Получение денег</div>
                    </div>

                </div>
            </div>
        </div>
        <div class="workScheme__slider">

        </div>
    </div>
</template>

<script>
    export default {
        name: "workScheme",
    }

</script>

<style lang="scss">

    .workScheme {
        margin-bottom: 500px;

        &__titleStage {
            display: flex;
            justify-content: center;

            margin-bottom: 20px;
        }

        &__stageBox {
            display: flex;
            justify-content: space-between;

            margin-bottom: 50px;
        }

        &__stageItem {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;

            width: 100%;

            cursor: pointer;
            background-color: white;

            &:not(:last-child):before {
                position: absolute;
                top: 50%;
                left: calc(50% + 17px);
                content: '';
                width: calc(50% - 17px);
                height: 2px;
                background: linear-gradient(to right, lightgrey 50%, white 50%);
                background-size: 5%;
            }

            &:not(:first-child):after {
                position: absolute;
                top: 50%;
                right: calc(50% + 15px);
                content: '';
                width: calc(50% - 15px);
                height: 2px;
                background: linear-gradient(to right, lightgrey 50%, white 50%);
                background-size: 5%;
            }

            &.isActive {
                .workScheme__stageItemState {
                    border: 5px solid $red;
                }

                &:not(:last-child):before {
                    background: linear-gradient(to right, red 50%, white 50%);
                    background-size: 5%;
                }

                /*&:not(:first-child):after {*/
                /*    background: linear-gradient(to right, red 50%, white 50%);*/
                /*    background-size: 5%;*/
                /*}*/
                .workScheme__stageItemIcn {
                    display: flex;
                }

            }

            &.isFullActive {

                .workScheme__stageItemState {
                    border: 5px solid $red;
                }

                &:after {
                    background: linear-gradient(to right, red 50%, white 50%);
                    background-size: 5%;
                }

                .workScheme__stageItemIcn {
                    display: flex;
                }
            }

        }

        &__stageItemTitle {
            margin-bottom: 10px;

            text-transform: uppercase;
            color: lightgrey;
        }

        &__stageItemState {
            display: flex;
            justify-content: center;
            align-items: center;

            width: 40px;
            height: 40px;

            margin-bottom: 10px;

            border: 5px solid lightgrey;
            border-radius: 50%;

            z-index: 2;
        }

        &__stageItemIcn {
            display: none;
            width: 20px;
            height: 20px;
        }

        &__stageItemText {
            font-weight: bold;
            color: lightgrey;
        }

        &__slider {
            width: 100%;
            height: 500px;

            background-color: #3AA18E;
        }
    }
</style>