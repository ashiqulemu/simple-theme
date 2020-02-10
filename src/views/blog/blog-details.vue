<template>
    <section class="blg-details">
        <div class="container">
            <ol class="breadcrumb my-breadcrumb">
                <li><a href="#">Home</a></li>
                <li><a href="#">Library</a></li>
                <li><a href="#">Current</a></li>
            </ol>
            <div class="blog-details row">
                <div class="col-md-12 blog-content">
                    <div class="img-box wow fadeIn"
                         data-wow-delay=".2s"
                         data-wow-duration="2s"
                    >
                        <img src="../../assets/images/blog/blog1.png"
                             alt="Blog Details"
                             class="img-fluid"
                        />
                    </div>
                    <div class="writer-box">
                        <div class="first">

                            <img src="../../assets/images/themes/team-members/3.jpg"
                                 alt="writer"
                                 title="Blog Writer"
                                 class="person-image"
                            />
                            <a href="" class="writer">Smith Handa</a>
                            <div class="date"><i class="mdi mdi-calendar pr-1"></i>17 Jun , 2020</div>
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
                    <div class="title wow fadeIn"
                         data-wow-delay=".4s"
                         data-wow-duration="2s"
                    >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </div>
                    <div class="description py-3 wow fadeIn"
                         data-wow-delay=".6s"
                         data-wow-duration="2s"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque aut dignissimos distinctio,
                        error expedita, itaque necessitatibus nostrum recusandae repudiandae sit totam, vel veritatis.
                        Culpa cum deleniti est laboriosam, maxime minus natus odio perspiciatis provident qui quidem quo
                        repellendus voluptas? Ab, cumque, dolorum ducimus ea id labore laudantium optio perferendis quis
                        reiciendis rerum ut? Accusamus aut, culpa dolor dolorum esse maiores quae quaerat quidem quis
                        recusandae repudiandae, tenetur. Blanditiis enim incidunt minus numquam possimus quisquam
                        ratione velit! Amet, commodi, nisi. Alias consequuntur debitis deleniti ea hic illum labore
                        magnam neque pariatur quas repudiandae, sed vitae voluptatibus. Dolor exercitationem reiciendis
                        vitae voluptate voluptatibus? A accusamus architecto aut corporis eaque fugit, iste iure libero
                        neque nostrum obcaecati optio provident quas quos ratione ullam vel, vitae! Dolores hic
                        necessitatibus quasi! Commodi iusto mollitia natus nesciunt possimus totam voluptatem! Ad dolore
                        ea eos ipsa iusto libero maiores, modi molestiae numquam obcaecati porro quis repellat
                        similique, sit temporibus totam vitae. Aliquam aperiam assumenda, enim eos expedita id maiores
                        necessitatibus nihil quam quidem sequi vitae. Amet delectus, dolor ex fuga illum inventore, ipsa
                        iusto mollitia non possimus quos soluta tempora ullam veniam vitae? Aliquid deserunt eos impedit
                        laudantium provident quas reprehenderit veritatis. Ad earum fuga voluptates!

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
                        <div class="comment-item wow fadeIn"
                             data-wow-delay=".2s"
                             data-wow-duration="2s"
                        >
                            <div class="comment-writer"><a href="" class="writer">Simoes Salome</a></div>
                            <p class="comment-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>

                        </div>
                        <div class="comment-item wow fadeIn"
                             data-wow-delay=".4s"
                             data-wow-duration="2s"
                        >
                            <div class="comment-writer"><a href="" class="writer">French Tamzyn</a></div>
                            <p class="comment-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A est exercitationem saepe
                                similique! Accusantium atque dignissimos eum facilis, fugiat id illo maiores minus
                                mollitia odit, perferendis, placeat quidem sequi veniam.
                            </p>

                        </div>
                        <div class="comment-item wow fadeIn"
                             data-wow-delay=".6s"
                             data-wow-duration="2s"
                        >
                            <div class="comment-writer"><a href="" class="writer">Ithya Nguta</a></div>
                            <p class="comment-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta dolorem eius
                                molestiae molestias nam placeat quam quod rerum tempora. Aliquid fugit labore molestiae
                                quae quidem quisquam unde ut vel voluptas voluptatibus! Alias autem beatae culpa
                                cupiditate earum laboriosam, maxime modi mollitia nisi, nobis odit pariatur placeat
                                quisquam sunt vel?
                            </p>

                        </div>
                        <div class="comment-item wow fadeIn"
                             data-wow-delay=".8s"
                             data-wow-duration="2s"
                        >
                            <div class="comment-writer"><a href="" class="writer">Stanbrige Peter</a></div>
                            <p class="comment-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem eligendi est ipsa itaque
                                laudantium maiores pariatur quod recusandae reprehenderit voluptas.
                            </p>

                        </div>
                        <div class="comment-item wow fadeIn"
                             data-wow-delay="1s"
                             data-wow-duration="2s"
                        >
                            <div class="comment-writer"><a href="" class="writer">Stone John</a></div>
                            <p class="comment-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi, beatae culpa
                                dicta dignissimos fugit hic in iste nam odio odit placeat, qui quis ratione repudiandae
                                similique tenetur, veniam. Cupiditate enim, iusto non provident repellendus tenetur ut
                                voluptatem?
                            </p>

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
