<template>
    <div>
        <RecipesTable
                v-bind:recipes="beerRecipes"
                v-if="beerRecipes.length"
                v-on:delete-recipe="deleteRecipe"/>
        <AddRecipe
                v-on:recipe-added="addRecipe"/>
    </div>
</template>

<script>
    import api from "../api";
    import RecipesTable from "./RecipesTable";
    import AddRecipe from "./AddRecipe";

    export default {
        name: "Recipes",
        data() {
            return {
                beerRecipes: []
            };
        },
        created() {
            api
                .get("brewings")
                .then(res => {
                    this.beerRecipes = res.data.entity;
                })
                .catch(err => console.log(err));
        },
        components: {
            RecipesTable: RecipesTable,
            AddRecipe: AddRecipe
        },
        methods: {
            deleteRecipe: function (recipeId) {
                let toDelete = this.beerRecipes.filter(r => r.id === recipeId);
                this.beerRecipes = this.beerRecipes.filter(r => r.id !== recipeId);
                api
                    .delete("brewings/" + recipeId)
                    .then(res => {
                        if (res.status === 204) {
                            console.log("Recipe deleted");
                        } else if (res.status === 404) {
                            console.log("Recipe with passed id not found");
                            this.beerRecipes.push(toDelete);
                        } else {
                            console.log("Unknown status occurred" + status);
                            this.beerRecipes.push(toDelete);
                        }
                    })
                    .catch(err => {
                        console.log("Unexpected error occurred" + err);
                        this.beerRecipes.push(toDelete);
                    })
            },
            addRecipe: function (recipe) {
                this.beerRecipes.push(recipe);
            }
        }
    };
</script>