<template>
    <div id="app">
        <top-bar/>
        <my-header/>
        <router-view/>
        <my-footer/>
    </div>
</template>

<script>
    import topBar from "./components/partial/topBar";
    import myHeader from "./components/partial/myHeader";
    import myFooter from "./components/partial/myFooter"

    export default {
        components: {
            myFooter, myHeader, topBar
        }
    }
</script>