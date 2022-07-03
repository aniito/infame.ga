$( document ).ready(function() {
    $(window)
     .resize(function () {
      if ($(window).width() > 1090) {
       $(".sidebar").removeClass("collapse");
      } else {
       $(".sidebar").addClass("collapse");
      }
     })
     .resize();
    });
    
       
       $(window)
        .resize(function () {
         if ($(window).width() > 1090) {
          $(".sidebar").removeClass("collapse");
         } else {
          $(".sidebar").addClass("collapse");
         }
        })
        .resize();
       
       const allVideos = document.querySelectorAll(".video");
       
      
       
       $(function () {
       
       
        $(".video").click(function () {
         var poster = $(this).find("video").attr("poster");
         var source = $(this).find("source").attr("src");
         var title = $(this).find(".video-name").text();
         var person = $(this).find(".video-by").text();
         var img = $(this).find(".author-img").attr("src");
         $(".video-stream video").attr("poster", poster);
         $(".video-stream video").stop();
         $(".video-stream source").attr("src", source);
         $(".video-stream video").load();
         $(".video-p-title").text(title);
         $(".video-p-name").text(person);
         $(".video-detail .author-img").attr("src", img);
        });
       });