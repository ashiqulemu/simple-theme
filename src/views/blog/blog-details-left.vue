<template>
    <section class="blg-details">
        <div class="container">
            <div class="btn-group blog-btn-group"
                 role="group" >
                <router-link :to="{name:'blogDetailsLeft'}" class="blog-link">Left Sidebar</router-link>
                <router-link :to="{name:'blogDetails'}" class="blog-link">No Sidebar</router-link>
                <router-link :to="{name:'blogDetailsRight'}" class="blog-link">Right Sidebar</router-link>
            </div>
            <div class="blog-details row">
                <div class="blog-sidebar col-md-4">
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
                                    <li><a href="#"><i class="fa fa-angle-double-right"></i> SUBMENU 1.1</a></li>
                                    <li><a href="#"><i class="fa fa-angle-double-right"></i> SUBMENU 1.2</a></li>
                                    <li><a href="#"><i class="fa fa-angle-double-right"></i> SUBMENU 1.3</a></li>
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
                                    <li><a href="#"><i class="fa fa-angle-double-right"></i> SUBMENU 2.1</a></li>
                                    <li><a href="#"><i class="fa fa-angle-double-right"></i> SUBMENU 2.2</a></li>
                                    <li><a href="#"><i class="fa fa-angle-double-right"></i> SUBMENU 2.3</a></li>
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
                <div class="col-md-8 blog-content">
                    <div class="img-box">
                        <img src="../../assets/images/blog/blog1.png"
                             alt="Blog Details"
                             class="img-fluid"
                        />
                    </div>
                    <div class="writer-box">
                        <div class="first">

                            <img src="../../assets/images/person/image1.jpg"
                                 alt="writer"
                                 title="Blog Writer"
                                 class="person-image"
                            />
                            <a href="#" class="writer">Smith Handa</a>
                            <div class="date pl-3 "><i class="mdi mdi-calendar pr-1"></i>17 Jun , 2020</div>
                        </div>
                        <div class="last">
                            <button type="button"
                                    class="mdi"
                                    title="Add to favourite"
                                    :class="{'mdi-heart':favourite,'mdi-heart-outline':!favourite}"
                                    @click="favourite=!favourite"
                            >
                            </button>
                            <button class="mdi mdi-share"
                                    title="Share this post"
                            />
                        </div>
                    </div>
                    <div class="title">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </div>
                    <div class="description py-3">
                        Contrary to popular belief, Lorem Ipsum is not simply random text.
                        It has roots in a piece of classical Latin literature from 45 BC,
                        making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in
                        Virginia,
                        looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,
                        and going through the cites of the word in classical literature, discovered the undoubtable source.
                        Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
                        (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory
                        of ethics,
                        very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                        comes from
                        a line in section 1.10.32.<br>
                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
                        Sections 1.10.32
                        and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact
                        original form,
                        accompanied by English versions from the 1914 translation by H. Rackham.

                    </div>
                    <div class="d-flex">
                        <small><b>Tags:</b> Lorem, Ipsum</small>

                    </div>
                    <div class="review d-flex align-middile">
                        <div class="pr-3 pt-1">Rate this post:</div>
                        <div class="stars">
                            <input class="star star-1" id="star-1" type="radio" name="star"/>
                            <label class="star star-1" for="star-1"></label>
                            <input class="star star-2" id="star-2" type="radio" name="star"/>
                            <label class="star star-2" for="star-2"></label>
                            <input class="star star-3" id="star-3" type="radio" name="star"/>
                            <label class="star star-3" for="star-3"></label>
                            <input class="star star-4" id="star-4" type="radio" name="star"/>
                            <label class="star star-4" for="star-4"></label>
                            <input class="star star-5" id="star-5" type="radio" name="star"/>
                            <label class="star star5" for="star-5"></label>
                        </div>
                    </div>
                    <div class="comment-box">
                        <div class="sub-title text-center">
                            Leave Your Comment
                        </div>

                        <div class="form-group">
                            <div class="input-group flex-nowrap my-3">
                                <input type="text" class="form-control"
                                       placeholder="Name"
                                       aria-label="Name">
                            </div>
                            <textarea class="form-control"
                                      rows="5"
                                      placeholder="Comment"
                            >

                        </textarea>
                        </div>
                        <div class="text-center">
                            <button type="button"
                                    class="btn auth-btn btn-md">
                                Submit
                            </button>
                        </div>

                    </div>
                    <div class="comments">
                        <div class="sub-title text-center">
                            All comments (37)
                        </div>
                        <div class="comment-item ">
                            <div class="comment-writer"><a href="#" class="writer">Simoes Salome</a></div>
                            <p class="comment-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>

                        </div>
                        <div class="comment-item">
                            <div class="comment-writer"><a href="#" class="writer">French Tamzyn</a></div>
                            <p class="comment-text">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                deserunt mollit anim id est laborum."
                            </p>

                        </div>
                        <div class="comment-item">
                            <div class="comment-writer"><a href="#" class="writer">Ithya Nguta</a></div>
                            <p class="comment-text">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                architecto beatae vitae dicta sunt explicabo.
                            </p>

                        </div>
                        <div class="comment-item">
                            <div class="comment-writer"><a href="#" class="writer">Stanbrige Peter</a></div>
                            <p class="comment-text">
                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                                consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
                                est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
                                numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                            </p>

                        </div>
                        <div class="comment-item">
                            <div class="comment-writer"><a href="#" class="writer">Stone John</a></div>
                            <p class="comment-text">
                                Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
                                nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea
                                voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
                                voluptas nulla pariatur?
                            </p>

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
        name: "blog-list",
        data() {
            return {
                favourite: false
            }
        },
    }
</script>
