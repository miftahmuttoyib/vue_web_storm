<template>
    <div class="form-group">
        <input
                class="form-control form-control-lg"
                id="username" type="text"
                placeholder="Username"
                :value="value"
                @input="updateValue" autocomplete="off">
    </div>
</template>
<script>
    export default {
        name: "InputUsername",
        props: {
            value: {
                default: ""
            }
        },
        data: function () {
            return {
                username: ""
            }
        },
        methods: {
            updateValue: function (event) {
                alert(event.target.value);
                this.$emit('input', event.target.value)
            }
        }
    }
</script>

<style scoped>

</style>