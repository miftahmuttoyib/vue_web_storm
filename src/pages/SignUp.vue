<template>
    <div>
        <div class="splash-container-form">
<!--            <div class="section-block" id="basicform">-->
<!--                <h3 class="section-title">Create New Account</h3>-->
<!--                -->
<!--            </div>-->
            <div class="card">
                <h5 class="card-header text-center">
                    <a href="#/login">
                        <img class="logo-img" src="../assets/puzzle.png" alt="logo">
                    </a>
                    <h5 class="pageheader-title">Sign Up</h5>
                    <div v-show="!isSubmit">
                        <p>Yaaaayy... Create new account and get some wonderful experience</p>
                    </div>
                </h5>
                <div class="card-body">
                    <div v-show="!isSubmit">
                        <form>
                            <input-text v-model="username" label="Username" placeholder="Username" mandatory="true"></input-text>
                            <input-text v-model="name" label="Name" placeholder="Your Name" mandatory="true"></input-text>
                            <input-email-address v-model="email"></input-email-address>
                            <input-password v-model="password"></input-password>
                            <submit-button @click.native="onSubmitClick"></submit-button>
                        </form>
                    </div>
                    <div v-show="isSubmit">
                        <p>Wow... You just create new account. Wonderful!!</p>
                        <p>Now, you can login into the application</p>
                        <a href="#/login">Check This Out</a>
                        <general-button href="#/login" text="Back"></general-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // import InputPassword from "@/components/input/InputPassword";
    // import InputUsername from "@/components/input/InputUsername";
    // import LoginButton from "@/components/button/LoginButton";
    // import CheckBoxRememberMe from "@/components/input/CheckBoxRememberMe";
    // import InputEmail from "@/components/input/InputEmail";
    import InputEmailAddress from "@/components/form/input/InputEmailAddress";
    import InputText from "@/components/input/InputText";
    import InputPassword from "@/components/form/input/InputPassword";
    import SubmitButton from "@/components/button/SubmitButton";
    import GeneralButton from "@/components/button/LinkedButton";
    export default {
        name: "SignUp",
        components: {GeneralButton, SubmitButton, InputPassword, InputText, InputEmailAddress},
        // components: {InputEmail, InputUsername, InputPassword, CheckBoxRememberMe, LoginButton},
        data: function () {
            return {
                name: "",
                username: "",
                password: "",
                email: "",
                isSubmit: false
            }
        },
        methods: {
            onSubmitClick() {
                this.isSubmit = true
            }
        }
    }
</script>

<style scoped>

</style>