$(document).ready(function () {
    
    var clients = [];

    $.ajax({
      url: "http://127.0.0.1:5500/payloads/clients.json",
      type: 'GET',
      dataType: 'json', // added data type
      success: function(res) {
          clients = res;
          $("#client-list").empty();
          var html = '';
          for(let i =0 ; i < clients.length; i++){
              html = `<a href="${clients[i].web_url}" class="slide"><img src="${clients[i].image_url}"></a>`;
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
});