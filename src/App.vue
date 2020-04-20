<template>
    <div id="app">
        <TopMenu/>
        <Recipes v-if="$store.getters.loggedIn"/>
    </div>
</template>

<script>
    import Recipes from "./components/Recipes";
    import TopMenu from "./components/TopMenu";

    export default {
        name: "App",
        components: {
            Recipes: Recipes,
            TopMenu: TopMenu
        }
    };
</script>

<style>
</style>
