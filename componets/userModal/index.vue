<template>
    <modal :name="name"
           class="userModal"
           :width="360"
    >
        <svg-icon class="userModal__close"
                  name="close"
                  @click="$modal.hide('servicesForm')"
        />
        <slot></slot>
    </modal>
</template>

<script>
    export default {
        name: "UserModal",
        props: {
            name: {
                required: true,
            },
        },
    }
</script>

<style lang="scss">
    .v--modal-box {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        max-width: 360px !important;
        width: 100% !important;
        height: auto !important;
        padding: 40px;

        position: absolute !important;
        top: 50% !important;
        left: 50% !important;
        -webkit-transform: translate(-50%, -50%) !important;
        transform: translate(-50%, -50%) !important;
    }

    .userModal {

        &__close {
            position: absolute;
            top: 15px;
            right: 15px;

            width: 15px;
            height: 15px;

            cursor: pointer;
        }
    }
</style>