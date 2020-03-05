<template>
    <button class="btn btn-space btn-secondary" :href="href">Cancel</button>
</template>

<script>
    export default {
        name: "CancelButton",
        props: {
            href: {
                required: true
            }
        }
    }
</script>

<style scoped>

</style>