<template>
    <div class="contacts">
<!--        <bread-crumbs class="contacts__breadCrumbs"/>-->
        <contacts-box class="contacts__contactsBox"/>
        <driving-directions class="contacts__drivingDirections"/>
    </div>
</template>

<script>
    import BreadCrumbs from "../../componets/breadcrumbs/breadcrumbs"
    import ContactsBox from "../../componets/contactsBox/index"
    import DrivingDirections from "../../componets/drivingDirections/index"

    export default {
        name: "Index",

        components: {
            BreadCrumbs,
            ContactsBox,
            DrivingDirections,
        },
    }
</script>

<style lang="scss">
    .contacts {

        &__contactsBox {
            margin-bottom: 40px;

            @include below($lg-mobile) {
                margin-bottom: 20px;
            }
        }

    }
</style>



