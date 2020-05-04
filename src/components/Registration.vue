<template>
    <div>
        <div class="w-full max-w-xs">
            <form class="bg-white shadow-md rounded px-6 py-4">
                <h1 class="font-sans py-4 w-full text-center">Register</h1>
                <div class="mb-4">
                    <label class="label"
                           for="login">Login</label>
                    <input class="input" id="login"
                           type="text" v-bind:class="{'input-error':submitted && $v.login.$error}" v-model="login">
                    <p class="error-message" v-if="submitted && !$v.login.required">Name is required</p>
                </div>
                <div class="mb-4">
                    <label class="label"
                           for="password">Password</label>
                    <input class="input" id="password"
                           type="password" v-bind:class="{'input-error':submitted && $v.password.$error}"
                           v-model="password">
                    <p class="error-message" v-if="submitted && !$v.password.required">Password is required</p>
                    <p class="error-message" v-if="submitted && !$v.password.strongPassword">Password must contain at least 8 characters, one letter, one number and one special character.</p>
                </div>
                <div class="mb-4">
                    <label class="label"
                           for="password">Repeat password</label>
                    <input class="input" id="repeat-password"
                           type="password" v-bind:class="{'input-error':submitted && $v.repeatedPassword.$error}"
                           v-model="repeatedPassword">
                    <p class="error-message" v-if="submitted && !$v.repeatedPassword.required">Repeated password is
                        required</p>
                    <p class="error-message" v-if="submitted && !$v.repeatedPassword.sameAsPassword">Passwords must
                        match</p>
                </div>
                <div class="mb-4">
                    <label class="label" for="time-zone">Time zone</label>
                    <select class="select" id="time-zone" v-model="timeZoneId">
                        <option :key="timeZone.id" :value="timeZone.id" v-for="timeZone in timeZones">
                            {{ timeZone.name }}
                        </option>
                    </select>
                </div>
                <button @click.prevent="register" class="btn">Register</button>
            </form>
        </div>
    </div>
</template>

<script>
    import {required, sameAs} from "vuelidate/lib/validators";

    export default {
        data() {
            return {
                login: '',
                password: '',
                repeatedPassword: '',
                timeZoneId: Number,
                submitted: false
            }
        },
        validations: {
            login: {required},
            password: {
                required,
                strongPassword(value) {
                    return /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,}$/.test(value);
                }
            },
            repeatedPassword: {
                required,
                sameAsPassword: sameAs('password')
            }
        },
        methods: {
            register() {
                this.submitted = true;
                this.$v.$touch();
                if (this.$v.$invalid) {
                    return;
                }

            }
        }

    }
</script>

<style scoped>

</style>