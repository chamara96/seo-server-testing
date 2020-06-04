$(document).ready(function () {

    var merchants = [];

    $.ajax({
        url: "http://127.0.0.1:5500/payloads/clients.json",
        type: 'GET',
        dataType: 'json', // added data type
        success: function (res) {
            merchants = res;
            console.log(merchants)
            $("#client-list").empty();
            var html = '';
            for (let i = 0; i < merchants.length; i++) {
                html = `<a href="${merchants[i].web_url}" class="slide"><img src="${merchants[i].image_url}"></a>`;
                $("#client-list").append(html);
            }

            $('.customer-logos').slick({
                rows: 3,
                slidesPerRow: 4,
                /*slidesToShow: 5,
                slidesToScroll: 5,*/
                autoplay: true,
                autoplaySpeed: 1500,
                arrows: false,
                dots: false,
                pauseOnHover: false,
                responsive: [{
                    breakpoint: 768,
                    settings: {
                        rows: 3,
                        slidesPerRow: 3,
                    }
                }, {
                    breakpoint: 520,
                    settings: {
                        rows: 3,
                        slidesPerRow: 1,
                    }
                }]
            });
        }
    });
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    var blogs = [];
    $.ajax({
        url: "http://127.0.0.1:5500/payloads/blogs.json",
        type: 'GET',
        dataType: 'json', // added data type
        success: function (res) {
            blogs = res.data;
            $("#blog-list").empty();
            var html = '';
            for (let j = 0; j < blogs.length; j++) {
                html = `<div class="col-lg-4 col-md-12">
            <div class="tw-latest-post" style="text-align:left">
                <div class="latest-post-media text-center">
                    <img src="${blogs[j].featured_image}" alt="blog_image_one" class="img-fluid" style="height: 200px">
                </div>
                <!-- End Latest Post Media -->
                <div class="post-body">
                    <div class="post-item-date">
                        <div class="post-date">
                            <span class="date">${blogs[j].published_at.substring(8,10)}</span>
                            <span class="month">${monthNames[blogs[j].published_at.substring(5,7) - 1]}</span>
                        </div>
                    </div>
                    <!-- End Post Item Date -->
                    <div class="post-info">
                        <div class="post-meta">
                            <span class="post-author">
                                Posted by <a href="#">${blogs[j].created_by_name.split(' ')[0]+ blogs[j].created_by_name.split(' ')[1] }</a>
                            </span>
                        </div>
                        <!-- End Post Meta -->
                        <h3 class="post-title"><a href="#">${blogs[j].name}</a></h3>
                        <div class="entry-content">
                            <p>
                            ${blogs[j].intro}
                            </p>
                        </div>
                        <!-- End Entry Content -->
                        <a href="#" class="tw-readmore">Read More
                            <i class="fa fa-angle-right"></i>
                        </a>
                    </div>
                    <!-- End Post info -->
                </div>
                <!-- End Post Body -->
            </div>
            <!-- End Tw Latest Post -->
        </div>
        <!-- End Col -->`;
                $("#blog-list").append(html);
            }

            var view = `<div class="col-md-12 text-center tw-mt-60">
            <a href="#" class="btn btn-primary">view all</a>
        </div>`

        $("#blog-list").append(view);

        }
    });
});