$(document).ready(function () {
  $(".question").click(function () {
    var answer = $(this).next(".answer");
    var isExpanded = $(this).hasClass("show");

    if (isExpanded) {
      // Collapse the clicked question and answer
      $(this).removeClass("show");
      answer.slideUp();
    } else {
      // Collapse other open answers
      $(".question.show").removeClass("show");
      $(".answer").slideUp();

      // Expand the clicked question and answer
      $(this).addClass("show");
      answer.slideDown();
    }
  });
});
