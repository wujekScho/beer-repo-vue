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
            <button @click="addRecipe">Add</button>
        </form>
    </div>
</template>

<script>
    import api from "../api";

    export default {
        data() {
            return {
                yeasts: [],
                yeastId: Number,
                name: "",
                style: "",
                gravity: Number,
                volume: Number
            }
        },
        created() {
            api
                .get("yeasts")
                .then(res => {
                    this.yeasts = res.data.entity;
                    this.yeastId = this.yeasts[0].id;
                })
                .catch(err => console.log(err));
        },
        methods: {
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
                            this.$emit('recipe-added', res.data.entity);
                        } else {
                            console.log("Unknown status")
                        }
                    })
                    .catch(err => {
                        console.log("Unexpected error occurred" + err);
                    })
            }
        }
    }
</script>

<style scoped>

</style>