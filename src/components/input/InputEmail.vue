<template>
    <div class="form-group">
        <input
                class="form-control form-control-lg"
                type="email"
                name="email"
                required=""
                placeholder="Your Email"
                autocomplete="on"
                :value="value"
                @input="updateValue">
    </div>
</template>

<script>
    export default {
        name: "InputEmail",
        props: {
            value: {
                default: ""
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