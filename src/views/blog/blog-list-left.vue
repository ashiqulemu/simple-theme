<template>
    <section class="blg-details">
        <div class="container">
             <ol class="breadcrumb my-breadcrumb">
                <li><router-link :to="{name:'blogList'}">Blog</router-link></li>
                <li>Blog List ( Left Sidebar )</li>
            </ol>
            <div class=" blog-box row">
                <div class="col-md-3">
                    <div class="blog-sidebar">
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
                                    <a href="" data-toggle="collapse"
                                       data-target="#submenu-1"
                                       class="category-item"
                                    >
                                        <span>Technology</span>
                                        <i class="mdi mdi-chevron-right"></i>
                                    </a>
                                    <ul id="submenu-1" class="collapse">
                                        <li>
                                            <a href="">
                                                <i class="fa fa-angle-double-right"></i>
                                                Information and communications technology
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <i class="fa fa-angle-double-right"></i>
                                                Agricultural technology
                                            </a>
                                        </li>
                                        <li><a href="">
                                            <i class="fa fa-angle-double-right"></i> Electrical engineering technology</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="" data-toggle="collapse"
                                       data-target="#submenu-2"
                                       class="category-item"
                                    >
                                        <span>Social Media</span>
                                        <i class="mdi mdi-chevron-right"></i>
                                    </a>
                                    <ul id="submenu-2" class="collapse">
                                        <li><a href="">
                                            <i class="fa fa-angle-double-right"></i> Facebook </a>
                                        </li>
                                        <li><a href="">
                                            <i class="fa fa-angle-double-right"></i> Instagram</a>
                                        </li>
                                        <li><a href="">
                                            <i class="fa fa-angle-double-right"></i> Twitter</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="" data-toggle="collapse"
                                       data-target="#submenu-3"
                                       class="category-item"
                                    >
                                        <span>Apps</span>
                                        <i class="mdi mdi-chevron-right"></i>
                                    </a>
                                    <ul id="submenu-3" class="collapse">
                                        <li><a href="">
                                            <i class="fa fa-angle-double-right"></i> Android </a>
                                        </li>
                                        <li><a href="">
                                            <i class="fa fa-angle-double-right"></i> PC</a>
                                        </li>
                                        <li><a href="#">
                                            <i class="fa fa-angle-double-right"></i> IOS</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#" data-toggle="collapse"
                                       data-target="#submenu-4"
                                       class="category-item"
                                    >
                                        <span>Business</span>
                                        <i class="mdi mdi-chevron-right"></i>
                                    </a>
                                    <ul id="submenu-4" class="collapse">
                                        <li><a href="#">
                                            <i class="fa fa-angle-double-right"></i> E-Commerce</a>
                                        </li>
                                        <li><a href="#">
                                            <i class="fa fa-angle-double-right"></i> Trade</a>
                                        </li>
                                        <li><a href="#">
                                            <i class="fa fa-angle-double-right"></i> Corporate governance‎ </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#" data-toggle="collapse"
                                       data-target="#submenu-5"
                                       class="category-item"
                                    >
                                        <span>Entertainment</span>
                                        <i class="mdi mdi-chevron-right"></i>
                                    </a>
                                    <ul id="submenu-5" class="collapse">
                                        <li><a href="#">
                                            <i class="fa fa-angle-double-right"></i> Movies </a>
                                        </li>
                                        <li><a href="#">
                                            <i class="fa fa-angle-double-right"></i> Videos</a>
                                        </li>
                                        <li><a href="#">
                                            <i class="fa fa-angle-double-right"></i> Blog </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="recent-post">
                            <div class="post-title">Recent Post</div>
                            <ul class="post-box">
                                <li class="item">
                                    <router-link to="/blog-details">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cupiditate eaque non
                                        repellat suscipit vel!
                                    </router-link>>
                                </li>
                                <li class="item">
                                    <router-link to="/blog-details">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cupiditate eaque non
                                        repellat suscipit vel!
                                    </router-link>>
                                </li>
                                <li class="item">
                                    <router-link to="/blog-details">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cupiditate eaque non
                                        repellat suscipit vel!
                                    </router-link>>
                                </li>
                                <li class="item">
                                    <router-link to="/blog-details">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cupiditate eaque non
                                        repellat suscipit vel!
                                    </router-link>>
                                </li>
                                <li class="item">
                                    <router-link to="/blog-details">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cupiditate eaque non
                                        repellat suscipit vel!
                                    </router-link>>
                                </li>
                                <li class="item">
                                    <router-link to="/blog-details">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cupiditate eaque non
                                        repellat suscipit vel!
                                    </router-link>>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div class=" col-md-9">
                    <div class="row">
                <div class="col-md-4 mb-3 px-2">
                    <div class="card wow fadeIn"
                         data-wow-delay=".2s"
                         data-wow-duration="2s"
                    >
                        <router-link to="/blog-details">
                            <img class="card-img-top"
                                 src="../../assets/images/blog/blog1.png"
                                 alt="Card image cap"
                            >
                        </router-link>

                        <div class="card-body">
                            <div class="blog-writer">
                                <img src="../../assets/images/themes/team-members/1.jpg"
                                     alt="writer"
                                     title="Blog Writer"
                                     class="person-image"
                                />

                                <a href="" class="writer">Smith Handa</a>
                            </div>
                            <p class="blog-description">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque consectetur
                                debitis eos et facere illum impedit ipsam magnam minima neque nostrum obcaecati
                                omnis perferendis quidem, sapiente unde veritatis voluptatem?
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
                    <div class="card wow fadeIn"
                         data-wow-delay=".4s"
                         data-wow-duration="2s">
                        <router-link to="/blog-details">
                            <img class="card-img-top"
                                 src="../../assets/images/blog/blog1.png"
                                 alt="Card image cap"
                            >
                        </router-link>

                        <div class="card-body">
                            <div class="blog-writer">
                                <img src="../../assets/images/themes/team-members/2.jpg"
                                     alt="writer"
                                     title="Blog Writer"
                                     class="person-image"
                                />
                                <a href="" class="writer">Anderson Eugenia</a>
                            </div>
                            <p class="blog-description">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque consectetur
                                debitis eos et facere illum impedit ipsam magnam minima neque nostrum obcaecati
                                omnis perferendis quidem, sapiente unde veritatis voluptatem?
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
                    <div class="card wow fadeIn"
                         data-wow-delay=".6s"
                         data-wow-duration="2s">
                        <router-link to="/blog-details">
                            <img class="card-img-top"
                                 src="../../assets/images/blog/blog1.png"
                                 alt="Card image cap"
                            >
                        </router-link>

                        <div class="card-body">
                            <div class="blog-writer">
                                <img src="../../assets/images/themes/team-members/3.jpg"
                                     alt="writer"
                                     title="Blog Writer"
                                     class="person-image"
                                />
                                <a href="" class="writer">Kazantzis John</a>
                            </div>
                            <p class="blog-description">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque consectetur
                                debitis eos et facere illum impedit ipsam magnam minima neque nostrum obcaecati
                                omnis perferendis quidem, sapiente unde veritatis voluptatem?
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
                    <div class="card wow fadeIn"
                         data-wow-delay=".8s"
                         data-wow-duration="2s">
                        <router-link to="/blog-details">
                            <img class="card-img-top"
                                 src="../../assets/images/blog/blog1.png"
                                 alt="Card image cap"
                            >
                        </router-link>

                        <div class="card-body">
                            <div class="blog-writer">
                                <img src="../../assets/images/themes/team-members/4.jpg"
                                     alt="writer"
                                     title="Blog Writer"
                                     class="person-image"
                                />
                                <a href="" class="writer">Blair Verona</a>
                            </div>
                            <p class="blog-description">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque consectetur
                                debitis eos et facere illum impedit ipsam magnam minima neque nostrum obcaecati
                                omnis perferendis quidem, sapiente unde veritatis voluptatem?
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
                    <div class="card wow fadeIn"
                         data-wow-delay="1s"
                         data-wow-duration="2s">
                        <router-link to="/blog-details">
                            <img class="card-img-top"
                                 src="../../assets/images/blog/blog1.png"
                                 alt="Card image cap"
                            >
                        </router-link>

                        <div class="card-body">
                            <div class="blog-writer">
                                <img src="../../assets/images/themes/team-members/5.jpg"
                                     alt="writer"
                                     title="Blog Writer"
                                     class="person-image"
                                />
                                <a href="" class="writer">Meldrum Jackie</a>
                            </div>
                            <p class="blog-description">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque consectetur
                                debitis eos et facere illum impedit ipsam magnam minima neque nostrum obcaecati
                                omnis perferendis quidem, sapiente unde veritatis voluptatem?
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
                    <div class="card wow fadeIn"
                         data-wow-delay="1.2s"
                         data-wow-duration="2s">
                        <router-link to="/blog-details">
                            <img class="card-img-top"
                                 src="../../assets/images/blog/blog1.png"
                                 alt="Card image cap"
                            >
                        </router-link>

                        <div class="card-body">
                            <div class="blog-writer">
                                <img src="../../assets/images/themes/team-members/1.jpg"
                                     alt="writer"
                                     title="Blog Writer"
                                     class="person-image"
                                />
                                <a href="" class="writer">Burch Desiree</a>
                            </div>
                            <p class="blog-description">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque consectetur
                                debitis eos et facere illum impedit ipsam magnam minima neque nostrum obcaecati
                                omnis perferendis quidem, sapiente unde veritatis voluptatem?
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
                    <div class="card wow fadeIn"
                         data-wow-delay="1.4s"
                         data-wow-duration="2s">
                        <router-link to="/blog-details">
                            <img class="card-img-top"
                                 src="../../assets/images/blog/blog1.png"
                                 alt="Card image cap"
                            >
                        </router-link>

                        <div class="card-body">
                            <div class="blog-writer">
                                <img src="../../assets/images/themes/team-members/3.jpg"
                                     alt="writer"
                                     title="Blog Writer"
                                     class="person-image"
                                />
                                <a href="" class="writer">Harry Daly</a>
                            </div>
                            <p class="blog-description">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita harum ipsum
                                labore laborum nesciunt perferendis quibusdam, tempora tempore voluptates
                                voluptatibus. Amet asperiores beatae dicta doloremque eos fugit, neque nisi soluta!
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
                    <div class="card wow fadeIn"
                         data-wow-delay="1.6s"
                         data-wow-duration="2s">
                        <router-link to="/blog-details">
                            <img class="card-img-top"
                                 src="../../assets/images/blog/blog1.png"
                                 alt="Card image cap"
                            >
                        </router-link>

                        <div class="card-body">
                            <div class="blog-writer">
                                <img src="../../assets/images/themes/team-members/2.jpg"
                                     alt="writer"
                                     title="Blog Writer"
                                     class="person-image"
                                />
                                <a href="" class="writer">Andrews Hayman</a>
                            </div>
                            <p class="blog-description">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita harum ipsum
                                labore laborum nesciunt perferendis quibusdam, tempora tempore voluptates
                                voluptatibus. Amet asperiores beatae dicta doloremque eos fugit, neque nisi soluta!
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
                <div class="col-md-4 mb-3 px-2">
                    <div class="card wow fadeIn"
                         data-wow-delay="1.8s"
                         data-wow-duration="2s">
                        <router-link to="/blog-details">
                            <img class="card-img-top"
                                 src="../../assets/images/blog/blog1.png"
                                 alt="Card image cap"
                            >
                        </router-link>

                        <div class="card-body">
                            <div class="blog-writer">
                                <img src="../../assets/images/themes/team-members/1.jpg"
                                     alt="writer"
                                     title="Blog Writer"
                                     class="person-image"
                                />
                                <a href="" class="writer">Smith Handa</a>
                            </div>
                            <p class="blog-description">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque consectetur
                                debitis eos et facere illum impedit ipsam magnam minima neque nostrum obcaecati
                                omnis perferendis quidem, sapiente unde veritatis voluptatem?
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
    </section>
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
