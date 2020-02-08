$(document).ready(function() {
  $(".navTabs").on("click", "a", function() {
    $(".tabItems>p").removeClass("show")
    $("a").removeClass("active")
    $(this).addClass("active")
    $(this)
      .find("+ .tabItems>p")
      .addClass("show")
  })
})
