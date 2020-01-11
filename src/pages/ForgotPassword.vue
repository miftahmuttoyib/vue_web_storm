<template>
    <div class="splash-container">
        <div class="card">
            <div class="card-header text-center">
                <img class="logo-img" src="../assets/puzzle.png" alt="logo">
                <span class="splash-description">Please enter your user information.</span>
            </div>
            <div v-show="initiate" class="card-body">
                <form>
                    <p>Don't worry, we'll send you an email to reset your password.</p>
                    <input-email v-model="email"></input-email>
                    <reset-password-button @click.native="onResetPasswordClick"></reset-password-button>
                </form>
            </div>
            <div v-show="!initiate" class="card-body">
                <p>Thank you ^_^. Temporary password already sent to your Email. Make sure you change it and don't forget again. Okey...</p>
                <general-button href="#/login" text="Back"></general-button>
            </div>
            <div class="card-footer text-center">
                <span>Don't have an account? <a href="pages-sign-up.html">Sign Up</a></span>
            </div>
        </div>
    </div>
</template>

<script>
    import InputEmail from "@/components/input/InputEmail";
    import ResetPasswordButton from "@/components/button/ResetPasswordButton";
    import GeneralButton from "@/components/button/LinkedButton";
    export default {
        name: "ForgotPassword",
        components: {GeneralButton, ResetPasswordButton, InputEmail},
        data: function () {
            return {
                initiate: true,
                email: ""
            }
        },
        methods: {
            onResetPasswordClick() {
                this.initiate = false;
            }
        }
    }
</script>

<style scoped>

</style>