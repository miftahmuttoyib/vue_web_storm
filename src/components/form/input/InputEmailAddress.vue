<template>
    <div class="form-group">
        <label for="inputEmail">Email address</label>
        <input id="inputEmail" type="email" placeholder="name@example.com" class="form-control" :value="value" @input="updateValue">
        <p>We'll never share your email with anyone else.</p>
    </div>
</template>

<script>
    export default {
        name: "InputEmailAddress",
        props: {
            value: {
                default: ""
            }
        },
        data: function () {
            return {

            }
        },
        methods: {
            updateValue: function (event) {
                this.$emit('input', event.target.value)
            }
        }
    }
</script>

<style scoped>

</style>