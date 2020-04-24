<template>
    <div>
        <RecipesTable/>
        <AddRecipe/>
    </div>
</template>

<script>
    import RecipesTable from "./RecipesTable";
    import AddRecipe from "./AddRecipe";

    export default {
        name: "Recipes",
        components: {
            RecipesTable: RecipesTable,
            AddRecipe: AddRecipe
        }
    };
</script>