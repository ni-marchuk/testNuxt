<template>
    <button class="btn"
            :class="{'center':textCenter}"
    >
        {{title}}
        <svg-icon class='btn__arrow'
                  name="arrow"
        />
    </button>
</template>

<script>
    export default {
        name: "Btn",

        props: {
            title: {
                type: String,
                required: true,
            },
            textCenter: {
                type: Boolean,
                required: false,
                default: false,
            }
        }
    }
</script>

<style lang="scss">

    .btn.center {
        text-align: center;

        svg {
            display: none;
        }
    }

    .btn:disabled {
        background-color: $greyLight;
    }
    .btn {
        position: relative;

        display: flex;
        justify-content: center;
        align-items: center;

        width: 220px;
        height: 55px;

        padding: 15px;

        font-size: 18px;
        font-family: $Bebas;
        font-weight: 400;
        vertical-align: middle;
        text-transform: uppercase;

        color: white;
        cursor: pointer;
        background-color: $red;
        border-radius: 5px;

        &__arrow {
            width: 8px;
            height: 10px;

            margin-left: auto;
        }
    }
</style>