<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="pointed-area">
                    <div class="coming-soon-area">
                        <div class="coming-soon">
                            <div class="title-and-msg">
                                <img src="https://www.freeiconspng.com/uploads/flame-logo-png-30.png" alt="">
                                <h3>We are going to meet soon</h3>
                                <p>Please keep checking after few days, we will get close gradually.</p>
                            </div>
                            <div class="coming-timer">
                                <!--days-->
                                <div class="coming-timer-div">
                                    <span class="digit">3</span>
                                    <span class="digit">5</span>
                                    <span class="clone">:</span>
                                    <div class="timer-intro">days</div>
                                </div>
                                <!--hours-->
                                <div class="coming-timer-div">
                                    <span class="digit">1</span>
                                    <span class="digit">7</span>
                                    <span class="clone">:</span>
                                    <div class="timer-intro">hrs</div>
                                </div>
                                <!--minutes-->
                                <div class="coming-timer-div">
                                    <span class="digit">5</span>
                                    <span class="digit">9</span>
                                    <span class="clone">:</span>
                                    <div class="timer-intro">mn</div>
                                </div>
                                <!--seconds-->
                                <div class="coming-timer-div">
                                    <span class="digit">5</span>
                                    <span class="digit">5</span>
                                    <div class="timer-intro">sec</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="news-letter-area">
                        <div class="news-letter">
                            <p class="newsletter-title">NewsLetter</p>
                            <form>
                                <div class="form-input">
                                    <input v-model="username" placeholder="Username">
                                </div>
                                <div class="form-input">
                                    <input type="email" v-model="email" placeholder="E-Mail">
                                </div>
                                <button>Subscribe</button>
                                <p>Some exclusive contents are going to be written here .....</p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "coming-soon",
        data(){
            return{
                username:'',
                email:''
            }
        }
    }
</script>

<style scoped>

</style>