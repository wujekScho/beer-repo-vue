<template>
    <div>
        <RecipesTable
                v-bind:recipes="beerRecipes"
                v-if="beerRecipes.length"
                v-on:delete-recipe="deleteRecipe"/>

        <form v-if="yeasts.length">
            <input placeholder="Name" v-model="name">
            <input placeholder="Style" v-model="style">
            <input min="0.1" placeholder="Gravity" step="0.1" type="number" v-model="gravity">
            <input min="0.1" placeholder="Volume" step="0.1" type="number" v-model="volume">
            <select v-model="yeastId">
                <option :key="yeast.id" :value="yeast.id" v-for="yeast in yeasts">
                    {{ yeast.name }}
                </option>
            </select>
            <button @click="addRecipe">Add</button>
        </form>

    </div>
</template>

<script>
    import api from "../api";
    import RecipesTable from "./RecipesTable";

    export default {
        name: "Recipes",
        data() {
            return {
                beerRecipes: [],
                yeasts: [],
                yeastId: Number,
                name: "",
                style: "",
                gravity: Number,
                volume: Number
            };
        },
        created() {
            api
                .get("brewings")
                .then(res => {
                    this.beerRecipes = res.data.entity;
                })
                .catch(err => console.log(err));
            api
                .get("yeasts")
                .then(res => {
                    this.yeasts = res.data.entity;
                    this.yeastId = this.yeasts[0].id;
                })
                .catch(err => console.log(err));
        },
        components: {
            RecipesTable: RecipesTable
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
            addRecipe: function (event) {
                event.preventDefault();
                let recipe = {
                    name: this.name,
                    gravity: this.gravity,
                    volume: this.volume,
                    style: this.style,
                    yeastId: this.yeastId
                }
                api
                    .post("brewings", recipe)
                    .then(res => {
                        if (res.status === 201) {
                            this.beerRecipes.push(res.data.entity);
                        } else {
                            console.log("Unknown status")
                        }
                    })
                    .catch(err => {
                        console.log("Unexpected error occurred" + err);
                    })
            }
        }
    };
</script>