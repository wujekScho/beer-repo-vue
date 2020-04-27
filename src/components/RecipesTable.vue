<template>
    <div v-if="recipes.length">
        <table class="table-auto mx-auto border shadow-md bg-white mb-8">
            <thead>
            <tr>
                <th class="px-4 py-2">Name</th>
                <th class="px-4 py-2">Style</th>
                <th class="px-4 py-2">Gravity</th>
                <th class="px-4 py-2">Volume</th>
                <th class="px-4 py-2">Yeast</th>
                <th class="px-4 py-2">Delete</th>
            </tr>
            </thead>
            <tbody>
            <tr :key="recipe.id" @click.prevent="showDetails(recipe.id)" class="tr-even-odd" v-for="recipe in recipes">
                <td class="border px-4 py-2">{{recipe.name}}</td>
                <td class="border px-4 py-2">{{recipe.style}}</td>
                <td class="border px-4 py-2">{{recipe.gravity}}</td>
                <td class="border px-4 py-2">{{recipe.volume}}</td>
                <td class="border px-4 py-2">{{recipe.yeast.name}}</td>
                <td @click.prevent="removeRecipe($event, recipe.id)" class="border px-4 py-2">
                    x
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
            removeRecipe(event, recipeId) {
                event.stopPropagation();
                this.$store.dispatch('removeRecipe', recipeId)
            },
            showDetails(recipeId) {
                console.log(recipeId);
            }
        }
    }
</script>