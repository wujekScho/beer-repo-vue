<template>
    <div class="py-4">
        <router-link class="btn" to="/recipes">Recipes</router-link>
        <router-link class="btn ml-2" to="/about">About</router-link>
        <router-link class="btn ml-2" to="/login" v-if="!this.$store.getters.loggedIn">Login</router-link>
        <button @click.prevent="logout" class="btn ml-2" v-if="this.$store.getters.loggedIn">Logout</button>
    </div>
</template>

<script>

    export default {
        methods: {
            logout() {
                this.$store.dispatch('destroyToken');
                this.$router.push('/login');
            }
        },
    }
</script>

<style scoped>

</style>