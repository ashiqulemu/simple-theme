<template>
    <div>
        <header class="header">
            <div class="top-bar d-none d-sm-block">
                <div class="container">
                    <nav class="navbar navbar-expand-lg navbar-dark">
                        <div class="d-flex justify-content-between align-items-center w-100">
                            <div class="contact d-flex py-2">
                                <small class="p-0 m-0 text-white"> Need Help?  <a href="#" class="text-white"> 012-345-6789 </a></small>
                            </div>
                            <div>
                                <div class="media-icon">
                                    <a href="">
                                        <span class="mdi mdi-facebook"></span>
                                    </a>
                                    <a href="">
                                        <span class="mdi mdi-youtube"></span>
                                    </a>
                                    <a href="">
                                        <span class="mdi mdi-twitter"></span>
                                    </a>
                                    <a href="">
                                        <span class="mdi mdi-instagram"></span>
                                    </a>
                                    <a href="">
                                        <span class="mdi mdi-google-plus"></span>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </nav>
                </div>
            </div>
            <div class="container">
                <nav class="navbar navbar-expand-lg">
                    <a class="navbar-brand" href="#">
                        <img src="../../assets/images/logo.png" height="30" alt="">
                    </a>
                    <button class="navbar-toggler user-defined" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent-4" aria-controls="navbarSupportedContent-4"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <!--<span class="mdi mdi-menu"></span>-->

                        <span @click="icon=!icon" :class="[icon ? 'mdi mdi-menu' : 'mdi mdi-close']"></span>

                    </button>
                    <div class="collapse navbar-collapse nav-user-define micro-nav" id="navbarSupportedContent-4">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <button class="nav-link"  @click="$root.scrollToElement('home-slider')">
                                    home
                                </button>
                            </li>
                            <li class="nav-item">
                                <button class="nav-link"  @click="$root.scrollToElement('home-about')">
                                    about
                                </button>
                            </li>
                            <li class="nav-item">
                                <button class="nav-link"  @click="$root.scrollToElement('home-feature')">
                                    feature
                                </button>
                            </li>
                            <li class="nav-item">
                                <button class="nav-link"  @click="$root.scrollToElement('home-team')">
                                    team
                                </button>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-5"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fa fa-newspaper-o"></i> blog </a>
                                <div class="dropdown-menu dropdown-menu-right dropdown-user-define"
                                     aria-labelledby="navbarDropdownMenuLink-4">
                                    <router-link class="dropdown-item" :to="{name:'blogList'}">blog list</router-link>
                                    <router-link class="dropdown-item" :to="{name:'blogListLeft'}">blog list (left sidebar)</router-link>
                                    <router-link class="dropdown-item" :to="{name:'blogListRight'}">blog list (right sidebar)</router-link>
                                    <router-link class="dropdown-item" :to="{name:'blogDetails'}">blog Details</router-link>
                                    <router-link class="dropdown-item" :to="{name:'blogDetailsLeft'}">blog Details (left sidebar)</router-link>
                                    <router-link class="dropdown-item" :to="{name:'blogDetailsRight'}">blog Details (right sidebar)</router-link>
                                </div>
                            </li>
                            <li class="nav-item">
                                <button class="nav-link" @click="$root.scrollToElement('home-price')">
                                    price
                                </button>
                            </li>
                            <li class="nav-item">
                                <button class="nav-link" @click="$root.scrollToElement('home-contact')">
                                    contact us
                                </button>
                            </li>

                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-4"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    other page </a>
                                <div class="dropdown-menu dropdown-menu-right dropdown-user-define"
                                     aria-labelledby="navbarDropdownMenuLink-4">
                                    <router-link class="dropdown-item" :to="{name:'thankYou'}">Thank You</router-link>
                                    <router-link class="dropdown-item" :to="{name:'review'}">Review</router-link>
                                    <router-link class="dropdown-item" :to="{name:'download'}">Download</router-link>
                                    <router-link class="dropdown-item" :to="{name:'comingSoon'}">Coming Soon
                                    </router-link>
                                    <router-link class="dropdown-item" :to="{name:'error'}">404</router-link>
                                    <router-link class="dropdown-item" :to="{name:'faq'}">Faq</router-link>
                                    <router-link class="dropdown-item" :to="{name:'signIn'}">Sign In</router-link>
                                    <router-link class="dropdown-item" :to="{name:'signUp'}">Sign Up</router-link>
                                    <router-link class="dropdown-item" :to="{name:'forgotPassword'}">Forgot Password
                                    </router-link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>

    </div>
</template>

<script>
    export default {

        data(){
          return{
              icon:'true'
          }
        }

        }
</script>

<style scoped>

</style>