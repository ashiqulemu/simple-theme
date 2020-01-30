<template>
    <div class="container">
        <div class="row pointed-area">
            <div class="col-md-6">
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
                                <span class="digit" v-for="i in days">{{i}}</span>
                                <span class="clone">:</span>
                                <div class="timer-intro">days</div>
                            </div>
                            <!--hours-->
                            <div class="coming-timer-div">
                                <span class="digit" v-for="i in hours">{{i}}</span>
                                <span class="clone">:</span>
                                <div class="timer-intro">hrs</div>
                            </div>
                            <!--minutes-->
                            <div class="coming-timer-div">
                                <span class="digit" v-for="i in minutes">{{i }}</span>
                                <span class="clone">:</span>
                                <div class="timer-intro">mn</div>
                            </div>
                            <!--seconds-->
                            <div class="coming-timer-div">
                                <span class="digit" v-for="i in seconds">{{i}}</span>
                                <div class="timer-intro">sec</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
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
</template>

<script>
    export default {
        name: "coming-soon",
        data() {
            return {
                username: '',
                email: '',
                date: Math.trunc(Date.parse('December 31, 2020') / 1000),
                now: Math.trunc((new Date()).getTime() / 1000)
            }
        },
        created() {
            window.setInterval(() => {
                this.now = Math.trunc((new Date()).getTime() / 1000);
            }, 1000);
        },
        computed: {
            seconds() {
                let second = (this.date - this.now) % 60;
                return second < 10 ? '0' + second : second.toString()
            },
            minutes() {
                let min = Math.trunc((this.date - this.now) / 60) % 60;
                return min < 10 ? '0' + min : min.toString()
            },
            hours() {
                let hour = Math.trunc((this.date - this.now) / 60 / 60) % 24;

                return hour < 10 ? '0' + hour : hour.toString()

            },
            days() {
                let day = Math.trunc((this.date - this.now) / 60 / 60 / 24);
                return day < 10 ? '0' + day : day.toString()
            }
        }
    }
</script>

<style scoped>

</style>