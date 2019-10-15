<template>

    <div class="overlay">
        <div class="menu">
            <button class="btnOpen" type="submit" v-on:click.prevent="btnHamb">X</button>
            <ul class="hambmenu">
                <li>item1</li>
                <li>item1</li>
                <li>item1</li>
                <li>item1</li>
                <li>item1</li>
                <li>item1</li>
            </ul>
        </div>
    </div>

</template>

<script>
    export default {
        name: "v3",

        methods: {
            btnHamb: function () {
                let btnOpen = document.querySelectorAll('.btnOpen');

                // btnOpen.classList.toggle(".open");
                console.log(btnOpen.classList);
            },
        }
    }
</script>

<style lang="scss">

    .btnOpen {
        padding: 0 5px 0 0;
        margin-left: auto;

        color: white;
    }

    .menu {
        position: absolute;
        right: 0;
        top: 0;

        display: flex;
        flex-direction: column;

        width: 350px;
        height: 100vh;

        padding: 15px 0 0 15px;

        -webkit-box-shadow: -3px 0px 7px 1px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: -3px 0px 7px 1px rgba(0, 0, 0, 0.75);
        box-shadow: -3px 0px 7px 1px rgba(0, 0, 0, 0.75);

        background: brown;
    }

    .hambmenu li {
        padding-bottom: 10px;

        list-style: none;
        font-size: 16px;
        font-weight: 400;

        color: white;
    }

    .overlay {
        display: flex;
        position: fixed;
        top: 0;
        height: 100%;
        width: 100%;
        background: #333;
        overflow: auto;
        z-index: 99;
    }

</style>