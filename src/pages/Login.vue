<template>
    <div id="login">
        <div class="splash-container">
            <div class="card ">
                <div class="card-header text-center">
                    <a href="#/login">
                        <img class="logo-img" src="../assets/puzzle.png" alt="logo">
                    </a>
                    <h5 class="pageheader-title">My Home Sweet Apartment</h5>
<!--                    <span class="splash-description">Please enter your user information.</span>-->
                </div>
                <div class="card-body">
                    <form>
                        <input-username v-model="username"></input-username>
                        <input-password v-model="password"></input-password>
<!--                        <label>test: {{username}}</label>-->
                        <check-box-remember-me></check-box-remember-me>
                        <login-button @click.native="onLoginButtonClick"></login-button>
                    </form>
                </div>
                <div class="card-footer bg-white p-0  ">
                    <div class="card-footer-item card-footer-item-bordered">
                        <a href="#/sign-up" class="footer-link">Create An Account</a></div>
                    <div class="card-footer-item card-footer-item-bordered">
                        <a href="#/forgot-password" class="footer-link">Forgot Password</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import LoginButton from "@/components/button/LoginButton";
    import CheckBoxRememberMe from "@/components/input/CheckBoxRememberMe";
    import InputPassword from "@/components/input/InputPassword";
    import InputUsername from "@/components/input/InputUsername";
    // import {LoginApi} from "@/API/LoginApi";
    export default {
        name: "login",
        components: {InputUsername, InputPassword, CheckBoxRememberMe, LoginButton},
        data: function () {
            return {
                username: "",
                password: ""
            }
        },
        methods: {
            onLoginButtonClick() {
                window.location.hash = "#/complaint";
                window.location.reload();
                // LoginApi.getUser(function (result) {
                //     alert(result.id);
                // });
            }
        }
    }
</script>