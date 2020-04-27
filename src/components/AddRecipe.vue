<template>
    <div>
        <button @click="show" class="btn">Add recipe</button>
        <modal :adaptive="true" :height="400" name="add-recipe">
            <div class="px-8 py-4">
                <h1 class="font-mono py-4 w-full text-center">Add recipe</h1>
                <form v-if="yeasts.length">
                    <div>
                        <label class="label" for="name">Name</label>
                        <input class="input" id="name" placeholder="Name" v-model="name">
                    </div>
                    <div class="pt-2">
                        <label class="label" for="style">Style</label>
                        <input class="input" id="style" placeholder="Style" v-model="style">
                    </div>
                    <div class="flex -mx-2 mb-2">
                        <div class="w-1/3 px-2 pt-2">
                            <label class="label" for="gravity">Gravity </label>
                            <input class="input" id="gravity" min="0.1" placeholder="Gravity" step="0.1" type="number"
                                   v-model="gravity">
                        </div>
                        <div class="w-1/3 px-2 pt-2">
                            <label class="label" for="volume">Volume</label>
                            <input class="input" id="volume" min="0.1" placeholder="Volume" step="0.1" type="number"
                                   v-model="volume">
                        </div>
                        <div class="w-1/3 px-2 pt-2">
                            <label class="label" for="yeast">Yeast</label>
                            <select class="select" id="yeast" v-model="yeastId">
                                <option :key="yeast.id" :value="yeast.id" v-for="yeast in yeasts">
                                    {{ yeast.name }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <button @click.prevent="addRecipe" class="btn">Add</button>
                </form>
            </div>
        </modal>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                yeastId: Number,
                name: "",
                style: "",
                gravity: Number,
                volume: Number
            }
        },
        computed: {
            yeasts() {
                return this.$store.getters.yeasts;
            }
        },
        created() {
            this.$store.dispatch('refreshYeasts')
                .then(res => {
                    this.yeastId = res[0].id;
                });
        },
        methods: {
            addRecipe() {
                let recipe = {
                    name: this.name,
                    gravity: this.gravity,
                    volume: this.volume,
                    style: this.style,
                    yeastId: this.yeastId
                }
                this.$store.dispatch('addRecipe', recipe);
                this.clearData();
            },
            clearData() {
                this.name = '';
                this.gravity = null;
                this.volume = null;
                this.style = '';
                this.yeastId = this.yeasts[0].id;
            },
            show() {
                this.$modal.show('add-recipe');
            },
            hide() {
                this.$modal.hide('add-recipe');
            }
        }
    }
</script>

<style scoped>

</style>