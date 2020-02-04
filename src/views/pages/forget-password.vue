<template>
    <div class="auth-form">
         <div class="container d-flex justify-content-center">
        <div class="container-box">
            <div class="md-title mt-5">
                Reset Your Password
            </div>
            <div class="card">
                <div class="input-group flex-nowrap">
                    <div class="input-group-prepend">
                        <span class="input-group-text">
                            <i class="mdi mdi-email"></i>
                        </span>
                    </div>
                    <input type="text"
                           class="form-control"
                           placeholder="Your Email"
                           aria-label="User email">
                </div>

                <div class="text-center">
                    <button type="button"
                            class="btn full-btn">
                        Send
                    </button>
                </div>
                <div class="resend">
                    IF DON'T RECEIVE Token?
                    <button type="button"
                            class="btn">
                        Resend
                    </button>
                </div>

                <div class="input-group flex-nowrap token-input">
                   <input type="password"
                           class="form-control "
                           placeholder="Enter Token"
                           aria-label="token">
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
                           placeholder="Retype Password"
                           aria-label="Retype Password">
                </div>

                <div class="text-center">
                    <button type="button"
                            class="btn auth-btn btn-md">
                        Done
                    </button>
                </div>
            </div>
            </div>
        </div>

    </div>
</template>
