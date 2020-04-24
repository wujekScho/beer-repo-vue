<template>
    <div>
        <router-link to="/recipes">Recipes</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/login" v-if="!this.$store.getters.loggedIn">Login</router-link>
        <button @click.prevent="logout" v-if="$store.getters.loggedIn">Logout</button>
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