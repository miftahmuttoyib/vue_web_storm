<template>
    <div class="form-group pt-1">
        <a class="btn btn-block btn-primary btn-xl" :href="href">{{text}}</a>
    </div>
</template>

<script>
    export default {
        name: "GeneralButton",
        props: {
            text: {
                required: true
            },
            href: {
                required: true
            }
        }
    }
</script>

<style scoped>

</style>