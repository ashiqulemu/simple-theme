<template>
    <section class="blg-details">
        <div class="container">
            <div class="blog-box row">
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
                        <div class="card">
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
                        <div class="card">
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
                        <div class="card">
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
                        <div class="card">
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
                        <div class="card">
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
                        <div class="card">
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
                        <div class="card">
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
                        <div class="card">
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
                            <a class="page-link" href="" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                <span class="sr-only">Previous</span>
                            </a>
                        </li>
                        <li class="page-item"><a class="page-link" href="">1</a></li>
                        <li class="page-item"><a class="page-link" href="">2</a></li>
                        <li class="page-item"><a class="page-link" href="">3</a></li>
                        <li class="page-item">
                            <a class="page-link" href="" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                                <span class="sr-only">Next</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
    </section>
</template>

<script>
    export default {
        name: "blog-list",
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
