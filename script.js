$( document ).ready(function() {
    $(".answer").on("click", function(){
       $(this).removeClass("bg-info");

       if ($(this).hasClass("correct")) {
          console.log("true")
          $(this).addClass("bg-success");
       } else {
          $(this).addClass("bg-danger");
          $(this).siblings(".correct").removeClass("bg-info").addClass("bg-success");
       }
    });
});
