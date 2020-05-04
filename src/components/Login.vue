<template>
    <div class="w-full max-w-xs">
        <form class="bg-white shadow-md rounded px-6 py-4">
            <h1 class="font-sans py-4 w-full text-center">Login</h1>
            <div class="mb-4">
                <label class="label"
                       for="email">Login</label>
                <input class="input" id="email"
                       type="text" v-bind:class="{'input-error':loginError}" v-model="email">
            </div>
            <div class="mb-4">
                <label class="label"
                       for="password">Password</label>
                <input class="input" id="password"
                       type="password" v-bind:class="{'input-error':loginError}" v-model="password">
            </div>
            <div class="bg-red-100 border border-red-400 text-red-700 text-sm px-2 py-1 rounded relative"
                 v-if="loginError">
                <span class="block sm:inline">Wrong username or password</span>
                <span class="absolute top-0 bottom-0 right-0 px-2 py-1">
                    <svg @click.prevent="removeError" class="fill-current h-5 w-5 text-red-500" role="button"
                         viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Close</title>
                    <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                </span>
            </div>
            <button @click.prevent="login" class="btn">Login</button>
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
                this.loginError = false;
                this.$store.dispatch('retrieveToken', {
                    login: this.email,
                    password: this.password
                })
                    .then(() => {
                        this.$router.push('/recipes');
                    })
                    .catch(err => {
                        if (err.response.status === 401) {
                            this.loginError = true;
                            }
                        }
                    )
                ;
            },
            removeError() {
                this.loginError = false;
            }
        }
    }
</script>

<style scoped>

</style>