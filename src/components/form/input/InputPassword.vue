<template>
    <div class="form-group">
        <label for="inputPassword">Password</label>
        <input id="inputPassword" type="password" placeholder="Password" class="form-control" :value="value" @input="updateValue">
    </div>
</template>

<script>
    export default {
        name: "InputPassword",
        props: {
            value: {
                default: ""
            }
        },
        data: function() {
            return{

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