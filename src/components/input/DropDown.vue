<template>
    <div class="form-group">
        <label :for="label">{{label}}</label>
        <select class="form-control" :id="label" :required="mandatory" @input="updateValue">
            <option value="">Please Select</option>
            <option v-for="(item, index) in listValue" v-bind:value="item.id" :key="index">
                {{item.name}}
            </option>
        </select>
    </div>
</template>

<script>
    export default {
        name: "DropDown",
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
            listValue: {
                default: []
            }
        },
        data: function () {
            return {
                // list: this.listValue
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