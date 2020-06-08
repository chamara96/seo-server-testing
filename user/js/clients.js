$(document).ready(function () {

      var merchants = [];

      $.ajax({
        url: "http://blog.chamaralabs.com/imagecarousel",
        type: 'GET',
        dataType: 'json', // added data type
        success: function(res) {
            merchants = res;
            $("#merchant-list").empty();
            var html = '';
            for(let i =0 ; i < merchants.length; i++){
                html = `<a href="${merchants[i].web_url}" class="slide"><img src="http://blog.chamaralabs.com/${merchants[i].image_url}"></a>`;
                $("#merchant-list").append(html);
            }

            $('.customer-logos').slick({
                rows: 3,
                slidesPerRow: 5,
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
    var jobs = [];
    $.ajax({
        url: "http://blog.chamaralabs.com/jobs/jobposts/index_data",
        // http://127.0.0.1:5500/payloads/jobs.json
        type: 'GET',
        dataType: 'json', // added data type
        success: function (res) {
            jobs = res.data;
            $("#job-list").empty();
            var html = '';
            for (let j = 0; j <jobs.length; j++) {
                html = `<div class="col-lg-4 col-md-12">
            <div class="tw-latest-post" style="text-align:left">
                <!--div class="latest-post-media text-center">
                    <img src="http://blog.chamaralabs.com/${jobs[j].featured_image}" alt="blog_image_one" class="img-fluid">
                </div-->
                <!-- End Latest Post Media -->
                <div class="post-body" style="height: 400px; overflow-y : scroll">
                    <div class="post-item-date">
                        <div class="post-date">
                            <span class="date">${jobs[j].created_at.substring(8,10)}</span>
                            <span class="month">${monthNames[jobs[j].created_at.substring(5,7) - 1]}</span>
                        </div>
                    </div>
                    <!-- End Post Item Date -->
                    <div class="post-info">
                        <div class="post-meta">
                            <span class="post-author">
                                Posted by <a href="#">${jobs[j].created_by_name.split(' ')[0]+ jobs[j].created_by_name.split(' ')[1] }</a>
                            </span>
                        </div>
                        <!-- End Post Meta -->
                        <h3 class="post-title"><a href="#">${jobs[j].jobtitle}</a> <br> <small>New york</small></h3>
                        
                        <div class="entry-content">
                            <p>
                            ${jobs[j].intro}
                            </p>
                        </div>
                        <!-- End Entry Content -->
                        <a href="http://blog.chamaralabs.com/jobs/jobposts/${jobs[j].encode_id}" class="tw-readmore">Read More
                            <!--i class="fa fa-angle-right"></i-->
                        </a>
                    </div>
                    <!-- End Post info -->
                </div>
                <!-- End Post Body -->
            </div>
            <!-- End Tw Latest Post -->
        </div>
        <!-- End Col -->`;
                $("#job-list").append(html);
            }

            var view = `<div class="col-md-12 text-center tw-mt-60">
            <a href="http://blog.chamaralabs.com/jobs/jobposts/" class="btn btn-primary">view all</a>
        </div>`

        $("#job-list").append(view);

        }
    });

    
});