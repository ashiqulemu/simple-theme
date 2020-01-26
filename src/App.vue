<template>
    <div id="app">
        <my-header/>
        <router-view/>
        <my-footer/>
    </div>
</template>

<script>
    import myHeader from "./components/partial/header";
    import myFooter from "./components/partial/footer"

    export default {
        components: {
            myFooter, myHeader
        }
    }
</script>