<template>
  <div id="app">
    <Recipes/>
  </div>
</template>

<script>
  import Recipes from "./components/Recipes";

  export default {
    name: "App",
    components: {
      Recipes: Recipes
    }
  };
</script>

<style>
</style>
