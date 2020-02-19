<template>
    <div class="judicalRepresintation">
        <div class="container">
            <div class="judicalRepresintation__wrapper">
                <div class="judicalRepresintation__inner">
                    <h1 class="judicalRepresintation__title">Судебное представительство</h1>
                    <p class="judicalRepresintation__subTitle">Массовое судебное взыскание</p>
                    <p class="judicalRepresintation__text">Взаимодействие по агентской схеме работы с Юридической фирмой
                        «Паритет» является эффективным вариантом сотрудничества для Банков и иных организаций, путем
                        передачи процесса взыскания специализированной Компании и использования наших бизнес-процессов.
                        По
                        поручению Клиента мы осуществляем работу с долговым портфелем любого объема с целью возврата
                        задолженности до полного взыскания суммы долга</p>
                    <div class="judicalRepresintation__schemeBox">
                        <p class="judicalRepresintation__schemeTitle">Схема взаимодействия:</p>
                        <ul class="judicalRepresintation__schemeList">
                            <li class="judicalRepresintation__schemeItem"><p>Правовой анализ документов и условий
                                возникновения
                                задолженности, оценка перспектив судебного взыскания по долговому портфелю.</p>
                            </li>
                            <li class="judicalRepresintation__schemeItem"><p>Подготовка искового заявления о взыскании
                                задолженности или заявления о выдаче судебного приказа.</p>
                            </li>
                            <li class="judicalRepresintation__schemeItem"><p>Предъявление искового заявления, заявления
                                о
                                выдаче судебного приказа в судебный орган, в том числе подача заявлений/ходатайств о
                                принятии мер по обеспечению иска.</p>
                            </li>
                        </ul>
                    </div>
                    <p class="judicalRepresintation__subTitle">Представительство в суде по гражданским спорам</p>
                    <p class="judicalRepresintation__text">В ходе деятельности юридических лиц и в жизни граждан
                        возникают
                        споры и конфликтные ситуации с другими компаниями, физическими лицами и государственными
                        органами.
                        Для защиты и восстановления нарушенных прав государством установлен порядок разрешения споров в
                        органах судебной системы. Специализацией Юридической фирмы «Паритет» является представление
                        клиентов
                        в имущественных спорах. Выполняя свою работу, мы ставим цель не только выиграть дело в суде, но
                        и
                        обеспечить реальное исполнение решения суда. Клиент получает информацию не только о перспективах
                        рассмотрения дела судом, но и о вероятности реального исполнения судебного решения и
                        фактического
                        получения присужденных денег или имущества.</p>
                    <div class="judicalRepresintation__schemeBox">
                        <p class="judicalRepresintation__schemeTitle">Схема взаимодействия:</p>
                        <ul class="judicalRepresintation__schemeList">
                            <li class="judicalRepresintation__schemeItem"><p>Анализ документов и информации о споре.</p>
                            </li>
                            <li class="judicalRepresintation__schemeItem"><p>Разработка и реализация стратегии
                                представления
                                интересов Клиента.</p>
                            </li>
                            <li class="judicalRepresintation__schemeItem"><p>Оценка перспективы дела с учетом возможных
                                позиций
                                сторон.</p>
                            </li>
                            <li class="judicalRepresintation__schemeItem"><p>Поиск и подготовка доказательств.</p></li>
                            <li class="judicalRepresintation__schemeItem"><p>Подготовка процессуальных документов
                                (исковое
                                заявление, ходатайство о принятии обеспечительных мер и др.)</p>
                            </li>
                            <li class="judicalRepresintation__schemeItem"><p>Представление интересов Клиента в суде во
                                всех
                                судебных инстанциях.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "JudicalRepresintation",

        components: {
            //
        }
    }
</script>

<style lang="scss">
    .judicalRepresintation {

        &__wrapper {
            display: flex;
        }

        &__inner {
            padding: 0 5%;
            width: 70%;
        }

        &__title {
            margin-bottom: 40px;
        }

        &__subTitle {
            margin-bottom: 20px;

            font-size: 24px;
            font-weight: 700;
            color: $grey;
        }

        &__text {
            margin-bottom: 20px;
            padding-left: 5%;
        }

        &__schemeBox {
            margin-bottom: 40px;
        }

        &__schemeTitle {
            padding-left: 5%;
            margin-bottom: 10px;

            font-size: 18px;
            font-weight: 700;

            color: $grey;
        }

        &__schemeList {
            padding: 20px 40px;

            background-color: #F8F8F8;

            list-style-type: square;
            color: $red;

            p {
                color: $greyLight;
            }
        }

        &__schemeItem {
            padding-bottom: 10px;
        }

    }
</style>