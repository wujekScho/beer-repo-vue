<template>
    <div id="app">
        <TopMenu/>
        <router-view/>
    </div>
</template>

<script>
    import TopMenu from "./components/TopMenu";

    export default {
        name: "App",
        components: {
            TopMenu: TopMenu
        }
    };
</script>

<style>
</style>
