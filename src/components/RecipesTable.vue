<template>
    <div v-if="recipes.length">
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Style</th>
                <th>Gravity</th>
                <th>Volume</th>
                <th>Yeast</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            <tr :key="recipe.id" v-for="recipe in recipes">
                <td>{{recipe.name}}</td>
                <td>{{recipe.style}}</td>
                <td>{{recipe.gravity}}</td>
                <td>{{recipe.volume}}</td>
                <td>{{recipe.yeast.name}}</td>
                <td>
                    <button @click="removeRecipe(recipe.id)">
                        x
                    </button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "RecipesTable",
        computed: {
            recipes() {
                return this.$store.getters.recipes;
            }
        },
        created() {
            this.$store.dispatch('refreshRecipes');
        },
        methods: {
            removeRecipe(recipeId) {
                this.$store.dispatch('removeRecipe', recipeId)
            }
        }
    }
</script>