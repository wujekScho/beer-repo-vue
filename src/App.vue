<template>
    <div class="mx-5 my-2" id="app">
        <TopMenu/>
        <router-view class="py-2"/>
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
