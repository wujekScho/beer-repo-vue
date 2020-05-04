<template>
    <div>
        <p @click="show">REGISTER</p>

        <modal :adaptive="true" height="auto" name="register">
            <p>REGISTER</p>
        </modal>
    </div>
</template>

<script>
    export default {
        methods: {
            show() {
                this.$modal.show('register');
            },
            hide() {
                this.$modal.hide('register');
            }
        }
    }
</script>

<style scoped>

</style>