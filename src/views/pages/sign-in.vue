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
                    <input type="text" class="form-control" placeholder="Username or Email" aria-label="Username or Email">
                </div>

                <div class="input-group flex-nowrap">
                    <div class="input-group-prepend">
                        <span class="input-group-text">@</span>
                    </div>
                    <input type="text" class="form-control" placeholder="Password" aria-label="Password">
                </div>
                <div class="remember-box">
                    <div>remeber</div>
                    <div>forgot</div>
                </div>
                <div class="text-center">login</div>
                <div>or</div>
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