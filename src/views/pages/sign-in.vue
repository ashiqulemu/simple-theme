<template>
    <div class="auth-form">
        <div class="container-box">
            <div class="md-title">
                Login
            </div>
            <div class="md-subtitle">
                Welcome To MicroDreamIT, Please Login With Your Personal Account Information.
            </div>
            <div class="card">
                <div class="input-group flex-nowrap">
                    <div class="input-group-prepend">
                        <span class="input-group-text">@</span>
                    </div>
                    <input type="text" class="form-control" placeholder="Username or Email"
                           aria-label="Username or Email">
                </div>

                <div class="input-group flex-nowrap">
                    <div class="input-group-prepend">
                        <span class="input-group-text">@</span>
                    </div>
                    <input type="text" class="form-control" placeholder="Password" aria-label="Password">
                </div>
                <div class="remember-box">

                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="customCheck1">
                        <label class="custom-control-label" for="customCheck1">Remember me</label>
                    </div>

                    <div class="md-link mb-4">
                        <router-link :to="{name:'forgetPassword'}">
                            Forgot Password
                        </router-link>
                    </div>
                </div>
                <div class="text-center">
                    <button type="button" class="btn auth-btn btn-md">Login</button>
                </div>
                <div class="or mt-2">
                    <hr>
                    <p>or</p>
                </div>
                <div class="text-center">SIGN IN WITH:</div>
                <div class="d-flex justify-content-between">
                    <div>fb</div>
                    <div>goog</div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "sign-in"
    }
</script>

<style scoped>

</style>