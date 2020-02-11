<template>
    <div class="auth-form">
         <div class="container d-flex justify-content-center">
        <div class="container-box">
            <ol class="breadcrumb my-breadcrumb">
                    <li>Other Page</li>
                    <li>Sign Up</li>
                </ol>
            <div class="md-title mt-5">
                Sign Up
            </div>
            <div class="md-subtitle">
                Welcome To MicroDreamIT, Please Sign Up With Your Personal Account Information.
            </div>
            <div class="card">
                <div class="input-group flex-nowrap">
                    <div class="input-group-prepend">
                        <span class="input-group-text">
                            <i class="mdi mdi-account"></i>
                        </span>
                    </div>
                    <input type="text" class="form-control"
                           placeholder="Name"
                           aria-label="User name">
                </div>
                <div class="input-group flex-nowrap">
                    <div class="input-group-prepend">
                        <span class="input-group-text">
                            <i class="mdi mdi-cellphone"></i>
                        </span>
                    </div>
                    <input type="text"
                           class="form-control"
                           placeholder="Phone"
                           aria-label="User phone">
                </div>
                <div class="input-group flex-nowrap">
                    <div class="input-group-prepend">
                        <span class="input-group-text">
                            <i class="mdi mdi-email"></i>
                        </span>
                    </div>
                    <input type="text" class="form-control"
                           placeholder="Email Address"
                           aria-label="Email address">
                </div>

                <div class="input-group flex-nowrap">
                    <div class="input-group-prepend">
                        <span class="input-group-text">
                            <i class="mdi mdi-lock"></i>
                        </span>
                    </div>
                    <input type="password"
                           class="form-control"
                           placeholder="Password"
                           aria-label="Password">
                </div>
                <div class="input-group flex-nowrap">
                    <div class="input-group-prepend">
                        <span class="input-group-text">
                            <i class="mdi mdi-lock"></i>
                        </span>
                    </div>
                    <input type="password"
                           class="form-control"
                           placeholder="Confirm Password"
                           aria-label="Confirm Password">
                </div>

                <div class="remember-box">
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox"
                               class="custom-control-input"
                               id="customCheck1">
                        <label class="custom-control-label"
                               for="customCheck1">
                            Remember me
                        </label>
                    </div>

                    <div class="md-link mb-3">
                        <router-link :to="{name:'forgotPassword'}">
                            Forgot Password
                        </router-link>
                    </div>
                </div>

                <div class="text-center">
                    <button type="button"
                            class="btn auth-btn btn-md">
                        Login
                    </button>
                </div>
                <div class="or mt-2">
                    <hr>
                    <p>or</p>
                </div>
                <div class="text-center sign-text">SIGN UP WITH:</div>
                <div class="social-box">
                    <div>
                        <button type="button"
                                class="btn social-btn bg-social-1">
                            <i class="mdi mdi-facebook"></i>facebook
                        </button>
                    </div>
                    <div>
                        <button type="button"
                                class="btn social-btn bg-social-2">
                            <i class="mdi mdi-google"></i>google
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </div>

    </div>
</template>
