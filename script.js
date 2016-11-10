$(document).ready(function() {
  
  $("#submit").on("click", function() {
    var answer = $("#unemployed").val()
    var answerNumber = parseInt(answer);

    if (answerNumber > 2.4) {
      var answerText = "Too high! It's 2.4%";
    } else {
      var answerText = "Close! But it's 2.4";
    }

    $(".answer-header").text(answerText);
    $(".answer-container").fadeIn("slow");
  });

  
});
