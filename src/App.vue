<template>
    <div id="app">
        <my-header/>
        <router-view style="padding-top:50px"/>
        <my-footer/>
    </div>
</template>

<script>
    import myHeader from "./components/partial/myHeader";
    import myFooter from "./components/partial/myFooter"

    export default {
        components: {
            myFooter, myHeader
        }
    }
</script>