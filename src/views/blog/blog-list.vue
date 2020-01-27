<template>
    <div class="blog-container">
        <div class="blog-box">
            <div class="row">
                <div class="col-md-6 single-blog">
                    <div class="img-box">
                        <img src="../../assets/images/blog/blog1.png" width="100%">
                    </div>
                    <div>title</div>
                    <div>description</div>
                    <div>writer</div>
                </div>
                <div class="col-md-6">
                    asdsad

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "blog-list"
    }
</script>

<style scoped lang="scss">
    .blog-container {
        .blog-box {
            padding: 100px 0;
            max-width: 1140px;
            margin: 0 auto;
        }
        .img-box{
            padding: 20px;
        }
    }


</style>