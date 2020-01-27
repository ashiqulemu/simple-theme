<template>
    <div class="blog-container">
        <div class="blog-box">
            <div class="row">
                <div class="col-md-3 mb-3">
                    <div class="card" style="width: 18rem;">
                        <router-link to="/">
                            <img class="card-img-top"
                                 src="../../assets/images/blog/blog1.png"
                                 alt="Card image cap"
                            >
                        </router-link>

                        <div class="card-body">
                            <div class="blog-writer">
                                <img src="../../assets/images/person/image1.jpg"
                                     alt="writer"
                                     title="Blog Writer"
                                     class="person-image"
                                />
                                <a href="#" class="writer">Smith Handa</a>
                            </div>
                            <p class="blog-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div class="my-footer">
                            <div class="first">
                                <i class="mdi mdi-star"/>
                                <div class="rank">4.8 <span>(53)</span></div>
                            </div>
                            <div class="last">
                                <button type="button"
                                        class="mdi"
                                        title="Add to favourite"
                                        :class="{'mdi-heart':favourites.includes(1),'mdi-heart-outline':!favourites.includes(1)}"
                                        @click="doFavourite(1)"
                                >
                                </button>
                                <button class="mdi mdi-share"
                                        title="Share this post"
                                />
                            </div>
                        </div>
                    </div>

                </div>
                <div class="col-md-3 mb-3">
                    <div class="card" style="width: 18rem;">
                        <router-link to="/">
                            <img class="card-img-top"
                                 src="../../assets/images/blog/blog1.png"
                                 alt="Card image cap"
                            >
                        </router-link>

                        <div class="card-body">
                            <div class="blog-writer">
                                <img src="../../assets/images/person/image1.jpg"
                                     alt="writer"
                                     title="Blog Writer"
                                     class="person-image"
                                />
                                <a href="#" class="writer">Smith Handa</a>
                            </div>
                            <p class="blog-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div class="my-footer">
                            <div class="first">
                                <i class="mdi mdi-star"/>
                                <div class="rank">4.8 <span>(53)</span></div>
                            </div>
                            <div class="last">
                                <button type="button"
                                        class="mdi"
                                        title="Add to favourite"
                                        :class="{'mdi-heart':favourites.includes(2),'mdi-heart-outline':!favourites.includes(2)}"
                                        @click="doFavourite(2)"
                                >
                                </button>
                                <button class="mdi mdi-share"
                                        title="Share this post"
                                />
                            </div>
                        </div>
                    </div>

                </div>
                <div class="col-md-3 mb-3">
                    <div class="card" style="width: 18rem;">
                        <router-link to="/">
                            <img class="card-img-top"
                                 src="../../assets/images/blog/blog1.png"
                                 alt="Card image cap"
                            >
                        </router-link>

                        <div class="card-body">
                            <div class="blog-writer">
                                <img src="../../assets/images/person/image1.jpg"
                                     alt="writer"
                                     title="Blog Writer"
                                     class="person-image"
                                />
                                <a href="#" class="writer">Smith Handa</a>
                            </div>
                            <p class="blog-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div class="my-footer">
                            <div class="first">
                                <i class="mdi mdi-star"/>
                                <div class="rank">4.8 <span>(53)</span></div>
                            </div>
                            <div class="last">
                                <button type="button"
                                        class="mdi"
                                        title="Add to favourite"
                                        :class="{'mdi-heart':favourites.includes(3),'mdi-heart-outline':!favourites.includes(3)}"
                                        @click="doFavourite(3)"
                                >
                                </button>
                                <button class="mdi mdi-share"
                                        title="Share this post"
                                />
                            </div>
                        </div>
                    </div>

                </div>
                <div class="col-md-3 mb-3">
                    <div class="card" style="width: 18rem;">
                        <router-link to="/">
                            <img class="card-img-top"
                                 src="../../assets/images/blog/blog1.png"
                                 alt="Card image cap"
                            >
                        </router-link>

                        <div class="card-body">
                            <div class="blog-writer">
                                <img src="../../assets/images/person/image1.jpg"
                                     alt="writer"
                                     title="Blog Writer"
                                     class="person-image"
                                />
                                <a href="#" class="writer">Smith Handa</a>
                            </div>
                            <p class="blog-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div class="my-footer">
                            <div class="first">
                                <i class="mdi mdi-star"/>
                                <div class="rank">4.8 <span>(53)</span></div>
                            </div>
                            <div class="last">
                                <button type="button"
                                        class="mdi"
                                        title="Add to favourite"
                                        :class="{'mdi-heart':favourites.includes(4),'mdi-heart-outline':!favourites.includes(4)}"
                                        @click="doFavourite(4)"
                                >
                                </button>
                                <button class="mdi mdi-share"
                                        title="Share this post"
                                />
                            </div>
                        </div>
                    </div>

                </div>
                <div class="col-md-3 mb-3">
                    <div class="card" style="width: 18rem;">
                        <router-link to="/">
                            <img class="card-img-top"
                                 src="../../assets/images/blog/blog1.png"
                                 alt="Card image cap"
                            >
                        </router-link>

                        <div class="card-body">
                            <div class="blog-writer">
                                <img src="../../assets/images/person/image1.jpg"
                                     alt="writer"
                                     title="Blog Writer"
                                     class="person-image"
                                />
                                <a href="#" class="writer">Smith Handa</a>
                            </div>
                            <p class="blog-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div class="my-footer">
                            <div class="first">
                                <i class="mdi mdi-star"/>
                                <div class="rank">4.8 <span>(53)</span></div>
                            </div>
                            <div class="last">
                                <button type="button"
                                        class="mdi"
                                        title="Add to favourite"
                                        :class="{'mdi-heart':favourites.includes(5),'mdi-heart-outline':!favourites.includes(5)}"
                                        @click="doFavourite(5)"
                                >
                                </button>
                                <button class="mdi mdi-share"
                                        title="Share this post"
                                />
                            </div>
                        </div>
                    </div>

                </div>
                <div class="col-md-3 mb-3">
                    <div class="card" style="width: 18rem;">
                        <router-link to="/">
                            <img class="card-img-top"
                                 src="../../assets/images/blog/blog1.png"
                                 alt="Card image cap"
                            >
                        </router-link>

                        <div class="card-body">
                            <div class="blog-writer">
                                <img src="../../assets/images/person/image1.jpg"
                                     alt="writer"
                                     title="Blog Writer"
                                     class="person-image"
                                />
                                <a href="#" class="writer">Smith Handa</a>
                            </div>
                            <p class="blog-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div class="my-footer">
                            <div class="first">
                                <i class="mdi mdi-star"/>
                                <div class="rank">4.8 <span>(53)</span></div>
                            </div>
                            <div class="last">
                                <button type="button"
                                        class="mdi"
                                        title="Add to favourite"
                                        :class="{'mdi-heart':favourites.includes(6),'mdi-heart-outline':!favourites.includes(6)}"
                                        @click="doFavourite(6)"
                                >
                                </button>
                                <button class="mdi mdi-share"
                                        title="Share this post"
                                />
                            </div>
                        </div>
                    </div>

                </div>
                <div class="col-md-3 mb-3">
                    <div class="card" style="width: 18rem;">
                        <router-link to="/">
                            <img class="card-img-top"
                                 src="../../assets/images/blog/blog1.png"
                                 alt="Card image cap"
                            >
                        </router-link>

                        <div class="card-body">
                            <div class="blog-writer">
                                <img src="../../assets/images/person/image1.jpg"
                                     alt="writer"
                                     title="Blog Writer"
                                     class="person-image"
                                />
                                <a href="#" class="writer">Smith Handa</a>
                            </div>
                            <p class="blog-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div class="my-footer">
                            <div class="first">
                                <i class="mdi mdi-star"/>
                                <div class="rank">4.8 <span>(53)</span></div>
                            </div>
                            <div class="last">
                                <button type="button"
                                        class="mdi"
                                        title="Add to favourite"
                                        :class="{'mdi-heart':favourites.includes(7),'mdi-heart-outline':!favourites.includes(7)}"
                                        @click="doFavourite(7)"
                                >
                                </button>
                                <button class="mdi mdi-share"
                                        title="Share this post"
                                />
                            </div>
                        </div>
                    </div>

                </div>
                <div class="col-md-3 mb-3">
                    <div class="card" style="width: 18rem;">
                        <router-link to="/">
                            <img class="card-img-top"
                                 src="../../assets/images/blog/blog1.png"
                                 alt="Card image cap"
                            >
                        </router-link>

                        <div class="card-body">
                            <div class="blog-writer">
                                <img src="../../assets/images/person/image1.jpg"
                                     alt="writer"
                                     title="Blog Writer"
                                     class="person-image"
                                />
                                <a href="#" class="writer">Smith Handa</a>
                            </div>
                            <p class="blog-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div class="my-footer">
                            <div class="first">
                                <i class="mdi mdi-star"/>
                                <div class="rank">4.8 <span>(53)</span></div>
                            </div>
                            <div class="last">
                                <button type="button"
                                        class="mdi"
                                        title="Add to favourite"
                                        :class="{'mdi-heart':favourites.includes(8),'mdi-heart-outline':!favourites.includes(8)}"
                                        @click="doFavourite(8)"
                                >
                                </button>
                                <button class="mdi mdi-share"
                                        title="Share this post"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "blog-list",
        data(){
            return{
                favourites:[2]
            }
        },
        methods:{
            doFavourite(item){
                this.favourites.includes(item)?this.favourites.splice(this.favourites.indexOf(item),1):this.favourites.push(item)
            }
        }
    }
</script>
