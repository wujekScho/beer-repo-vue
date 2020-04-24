<template>
    <div>
        <form>
            <div>
                <label for="email">Login</label>
                <input id="email" type="text" v-model="email">
            </div>
            <div>
                <label for="password">Password</label>
                <input id="password" type="password" v-model="password">
            </div>
            <div v-if="loginError">
                <p>Wrong username or password</p>
            </div>
            <button @click.prevent="login">Login</button>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                email: '',
                password: '',
                loginError: false
            }
        },
        methods: {
            login() {
                this.$store.dispatch('retrieveToken', {
                    login: this.email,
                    password: this.password
                })
                    .then(() => {
                        this.loginError = false;
                    })
                    .catch(err => {
                            if (err.response.status === 401) {
                                this.loginError = true;
                            }
                        }
                    )
                ;
            }
        }
    }
</script>

<style scoped>

</style>