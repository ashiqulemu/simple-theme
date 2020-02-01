<template>
    <div class="container">
        <div class="btn-group blog-btn-group"
             role="group" >
            <router-link :to="{name:'blogListLeft'}" class="blog-link">Left Sidebar</router-link>
            <router-link :to="{name:'blogList'}" class="blog-link">No Sidebar</router-link>
            <router-link :to="{name:'blogListRight'}" class="blog-link">Right Sidebar</router-link>
        </div>
        <div class=" blog-box row">
            <div class="blog-sidebar col-md-3">
                <div class="input-group search-box">
                    <input class="form-control"
                           placeholder="Search"
                           type="text">
                    <div class="input-group-btn">
                        <button class="btn submit-btn" type="submit">
                            <i class="mdi mdi-magnify"></i>
                        </button>
                    </div>
                </div>
                <div class="side-category">
                    <div class="category-title">Categories</div>
                    <ul class="nav navbar-nav category-list">
                        <li>
                            <a href="#" data-toggle="collapse"
                               data-target="#submenu-1"
                               class="category-item"
                            >
                                <span>Category 1</span>
                                <i class="mdi mdi-chevron-right"></i>
                            </a>
                            <ul id="submenu-1" class="collapse">
                                <li><a href="#"><i class="fa fa-angle-double-right"></i> submenu 1.1</a></li>
                                <li><a href="#"><i class="fa fa-angle-double-right"></i> submenu 1.2</a></li>
                                <li><a href="#"><i class="fa fa-angle-double-right"></i> submenu 1.3</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" data-toggle="collapse"
                               data-target="#submenu-2"
                               class="category-item"
                            >
                                <span>Category 2</span>
                                <i class="mdi mdi-chevron-right"></i>
                            </a>
                            <ul id="submenu-2" class="collapse">
                                <li><a href="#"><i class="fa fa-angle-double-right"></i> submenu 2.1</a></li>
                                <li><a href="#"><i class="fa fa-angle-double-right"></i> submenu 2.2</a></li>
                                <li><a href="#"><i class="fa fa-angle-double-right"></i> submenu 2.3</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" data-toggle="collapse"
                               data-target="#submenu-3"
                               class="category-item"
                            >
                                <span>Category 3</span>
                                <i class="mdi mdi-chevron-right"></i>
                            </a>
                            <ul id="submenu-3" class="collapse">
                                <li><a href="#"><i class="fa fa-angle-double-right"></i> SUBMENU 3.1</a></li>
                                <li><a href="#"><i class="fa fa-angle-double-right"></i> SUBMENU 3.2</a></li>
                                <li><a href="#"><i class="fa fa-angle-double-right"></i> SUBMENU 3.3</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="recent-post">
                    <div class="post-title">Recent Post</div>
                    <ul class="post-box">
                        <li class="item">
                            <a href="#">I must explain to you how all this mistaken idea of denouncing pleasure and
                                praising pain was born.</a>
                        </li>
                        <li class="item">
                            <a href="#">I will give you a complete account of the system.</a>
                        </li>
                        <li class="item">
                            <a href="#">Expound the actual teachings of the great explorer of the truth, the
                                master-builder of human happiness.</a>
                        </li>
                        <li class="item">
                            <a href="#">No one rejects, dislikes, or avoids pleasure itself.</a>
                        </li>
                        <li class="item">
                            <a href="#">Nor again is there anyone who loves or pursues or desires to obtain pain of
                                itself.</a>
                        </li>
                        <li class="item">
                            <a href="#">To take a trivial example, which of us ever undertakes laborious physical
                                exercise, except to obtain some advantage from it</a>
                        </li>

                    </ul>
                </div>
            </div>
        <div class=" col-md-9">
            <div class="row">
                <div class="col-md-4 mb-3 px-2">
                    <div class="card">
                        <router-link to="/blog-details">
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

                <div class="col-md-4 mb-3 px-2">
                    <div class="card">
                        <router-link to="/blog-details">
                            <img class="card-img-top"
                                 src="../../assets/images/blog/blog1.png"
                                 alt="Card image cap"
                            >
                        </router-link>

                        <div class="card-body">
                            <div class="blog-writer">
                                <img src="../../assets/images/person/image2.jpg"
                                     alt="writer"
                                     title="Blog Writer"
                                     class="person-image"
                                />
                                <a href="#" class="writer">Anderson Eugenia</a>
                            </div>
                            <p class="blog-description">
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                                ea commodo consequat.
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
                <div class="col-md-4 mb-3 px-2">
                    <div class="card">
                        <router-link to="/blog-details">
                            <img class="card-img-top"
                                 src="../../assets/images/blog/blog1.png"
                                 alt="Card image cap"
                            >
                        </router-link>

                        <div class="card-body">
                            <div class="blog-writer">
                                <img src="../../assets/images/person/image3.jpg"
                                     alt="writer"
                                     title="Blog Writer"
                                     class="person-image"
                                />
                                <a href="#" class="writer">Kazantzis John</a>
                            </div>
                            <p class="blog-description">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur.
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
                <div class="col-md-4 mb-3 px-2">
                    <div class="card">
                        <router-link to="/blog-details">
                            <img class="card-img-top"
                                 src="../../assets/images/blog/blog1.png"
                                 alt="Card image cap"
                            >
                        </router-link>

                        <div class="card-body">
                            <div class="blog-writer">
                                <img src="../../assets/images/person/image4.jpg"
                                     alt="writer"
                                     title="Blog Writer"
                                     class="person-image"
                                />
                                <a href="#" class="writer">Blair Verona</a>
                            </div>
                            <p class="blog-description">
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum.
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
                <div class="col-md-4 mb-3 px-2">
                    <div class="card">
                        <router-link to="/blog-details">
                            <img class="card-img-top"
                                 src="../../assets/images/blog/blog1.png"
                                 alt="Card image cap"
                            >
                        </router-link>

                        <div class="card-body">
                            <div class="blog-writer">
                                <img src="../../assets/images/person/image5.jpg"
                                     alt="writer"
                                     title="Blog Writer"
                                     class="person-image"
                                />
                                <a href="#" class="writer">Meldrum Jackie</a>
                            </div>
                            <p class="blog-description">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam.
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
                <div class="col-md-4 mb-3 px-2">
                    <div class="card">
                        <router-link to="/blog-details">
                            <img class="card-img-top"
                                 src="../../assets/images/blog/blog1.png"
                                 alt="Card image cap"
                            >
                        </router-link>

                        <div class="card-body">
                            <div class="blog-writer">
                                <img src="../../assets/images/person/image6.jpg"
                                     alt="writer"
                                     title="Blog Writer"
                                     class="person-image"
                                />
                                <a href="#" class="writer">Burch Desiree</a>
                            </div>
                            <p class="blog-description">
                                Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                                explicabo.
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
                <div class="col-md-4 mb-3 px-2">
                    <div class="card">
                        <router-link to="/blog-details">
                            <img class="card-img-top"
                                 src="../../assets/images/blog/blog1.png"
                                 alt="Card image cap"
                            >
                        </router-link>

                        <div class="card-body">
                            <div class="blog-writer">
                                <img src="../../assets/images/person/image6.jpg"
                                     alt="writer"
                                     title="Blog Writer"
                                     class="person-image"
                                />
                                <a href="#" class="writer">Harry Daly</a>
                            </div>
                            <p class="blog-description">
                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                                consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
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
                <div class="col-md-4 mb-3 px-2">
                    <div class="card">
                        <router-link to="/blog-details">
                            <img class="card-img-top"
                                 src="../../assets/images/blog/blog1.png"
                                 alt="Card image cap"
                            >
                        </router-link>

                        <div class="card-body">
                            <div class="blog-writer">
                                <img src="../../assets/images/person/image2.jpg"
                                     alt="writer"
                                     title="Blog Writer"
                                     class="person-image"
                                />
                                <a href="#" class="writer">Andrews Hayman</a>
                            </div>
                            <p class="blog-description">
                                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                                velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam
                                aliquam quaerat voluptatem.
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
            <nav aria-label="Blog Page navigation" class="d-flex justify-content-center">
            <ul class="pagination">
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                        <span class="sr-only">Previous</span>
                    </a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                        <span class="sr-only">Next</span>
                    </a>
                </li>
            </ul>
        </nav>
        </div>
        </div>


    </div>
</template>

<script>
    export default {
        data() {
            return {
                favourites: [2]
            }
        },
        methods: {
            doFavourite(item) {
                this.favourites.includes(item) ? this.favourites.splice(this.favourites.indexOf(item), 1) : this.favourites.push(item)
            }
        }
    }
</script>
