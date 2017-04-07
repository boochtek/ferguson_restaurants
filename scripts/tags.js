$(document).ready(function () {
  $(".tag-selection ul").on("click", function (event) {
    var clicked_tag = $(event.target).attr("class");
    $(".restaurants section").hide();
    $(".restaurants section." + clicked_tag).show();
  });
});
