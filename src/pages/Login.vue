<template>
    <div class="login-page">
        <div class="splash-container">
            <div class="card ">
                <div class="card-header text-center"><a href="../index.html">img class="logo-img" src="../assets/images/logo.png" alt="logo"></a><span class="splash-description">Please enter your user information.</span></div>
                <div class="card-body">
                    <form>
                        <input-username></input-username>
                        <input-password></input-password>
                        <check-box-remember-me></check-box-remember-me>
                        <login-button></login-button>
                    </form>
                </div>
                <div class="card-footer bg-white p-0  ">
                    <div class="card-footer-item card-footer-item-bordered">
                        <a href="#" class="footer-link">Create An Account</a></div>
                    <div class="card-footer-item card-footer-item-bordered">
                        <a href="#" class="footer-link">Forgot Password</a>
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
    export default {
        name: "login",
        components: {InputUsername, InputPassword, CheckBoxRememberMe, LoginButton}
    }
</script>

<style scoped>
    .login-page {
        height: 100%;
    }

    .login-page {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        padding-top: 40px;
        padding-bottom: 40px;
    }
</style>