<template>
    <div>
        <LoginModal v-if="!$store.getters.loggedIn"/>
        <button @click.prevent="logout" v-if="$store.getters.loggedIn">Logout</button>
    </div>
</template>

<script>
    import LoginModal from "./LoginModal"

    export default {
        components: {
            LoginModal: LoginModal
        },
        methods: {
            logout() {
                this.$store.dispatch('destroyToken');
            }
        },
    }
</script>

<style scoped>

</style>