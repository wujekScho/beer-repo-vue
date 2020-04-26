<template>
    <div class="py-4">
        <router-link class="btn" to="/recipes">Recipes</router-link>
        <router-link class="btn" to="/about">About</router-link>
        <router-link class="btn" to="/login" v-if="!this.$store.getters.loggedIn">Login</router-link>
        <button @click.prevent="logout" class="btn" v-if="$store.getters.loggedIn">Logout</button>
    </div>
</template>

<script>

    export default {
        methods: {
            logout() {
                this.$store.dispatch('destroyToken');
            }
        },
    }
</script>

<style scoped>

</style>