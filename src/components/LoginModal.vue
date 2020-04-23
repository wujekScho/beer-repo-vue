<template>
    <div>
        <button @click.prevent="show">LOGIN</button>
        <modal name="login-modal">
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
        </modal>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                modalToggle: false,
                email: '',
                password: '',
                loginError: false
            }
        },
        methods: {
            show() {
                this.$modal.show('login-modal');
            },
            hide() {
                this.$modal.hide('login-modal');
            },
            login() {
                this.$store.dispatch('retrieveToken', {
                    login: this.email,
                    password: this.password
                })
                    .then(() => {
                        this.loginError = false;
                        this.hide;
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