<template>
    <div class="form-group">
        <label :for="label">{{label}} <small class="text-muted">{{note}}</small></label>
        <input type="number" class="form-control decimal-inputmask"
               :id="label"
               :placeholder="placeholder"
               :value="value"
               :required="mandatory"
               @input="updateValue"
               style="text-align: left;">
        <div class="invalid-feedback">
            {{validationFeedback}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "InputNumber",
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
            },
            note: {
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