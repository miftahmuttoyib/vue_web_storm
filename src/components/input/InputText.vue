<template>
    <div>
        <label for="fieldValidation">{{label}}</label>
        <input type="text" class="form-control" id="fieldValidation" :placeholder=placeholder value="Mark" :required=required>
        <div class="valid-feedback">
            {{validFeedback}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "InputText",
        props: {
            label: {
                default: ""
            },
            placeholder: {
                default: ""
            },
            validFeedback: {
                default: "Looks good!"
            },
            required: function (value) {
                if (value === true || value === "true") {
                    return true;
                } else return false;
            }
        },
        data: function () {
            return {

            }
        },
        methods: {

        }
    }
</script>

<style scoped>

</style>