<template>
    <div class="form-group">
        <label :for="label">{{label}}</label>
        <input type="text"
               class="form-control"
               :id="label"
               :placeholder="placeholder"
               :value="value"
               :required="mandatory"
               @input="updateValue">
        <div class="invalid-feedback">
            {{validationFeedback}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "InputText",
        props: {
            value: {
                default: ""
            },
            label: {
                required: true
            },
            placeholder: {
                default: ""
            },
            validationFeedback: {
                default: "Wrong Input!"
            },
            mandatory: {
                default: false
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