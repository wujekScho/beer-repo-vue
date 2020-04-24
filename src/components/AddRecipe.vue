<template>
    <div>
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
            <button @click.prevent="addRecipe">Add</button>
        </form>
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
            }
        }
    }
</script>

<style scoped>

</style>