$(document).ready(function(e) {
  $(".navTabs").on("click", "a", function(e) {
    e.preventDefault()
    $(".tabItems").removeClass("show")
    $("a").removeClass("active")
    $(this).addClass("active")
    $(this)
      .find("+ .tabItems")
      .addClass("show")
  })
  $.get("https://obscure-tundra-54269.herokuapp.com/casual-dining", function(
    food
  ) {
    var apps = food.appetizers.map(function(item) {
      return `
      <p class="appName">${item.name}</p>
     
      <p class="appDescription">${item.description}</p>
      <img class="menuIcons" src="assetsCasualRest/iconAllergy.png">
      <img class="menuIcons" src="assetsCasualRest/iconFav.png">
      <img class="menuIcons" src="assetsCasualRest/iconSpicy.png">
      <img class="menuIcons" src="assetsCasualRest/iconVegan.png">
      <p class="appPrice">-$${item.price}-</p>`
    })

    var entrees = food.entrees.map(function(item) {
      return `
      <p class="entreeName">${item.name}</p>
      
      <p class="entreeDescription">${item.description}</p>
      <img class="menuIcons" src="assetsCasualRest/iconAllergy.png">
      <img class="menuIcons" src="assetsCasualRest/iconFav.png">
      <img class="menuIcons" src="assetsCasualRest/iconSpicy.png">
      <img class="menuIcons" src="assetsCasualRest/iconVegan.png">
      <p class="entreePrice">-$${item.price}-</p>`
    })

    var desserts = food.desserts

      .map(function(item) {
        return `
        <p class="dessertsName">${item.name}</p>
        
        <p class="dessertsDescription">${item.description}</p>
        <img class="menuIcons" src="assetsCasualRest/iconAllergy.png">
        <img class="menuIcons" src="assetsCasualRest/iconFav.png">
        <img class="menuIcons" src="assetsCasualRest/iconSpicy.png">
        <img class="menuIcons" src="assetsCasualRest/iconVegan.png">
        <p class="dessertsPrice">-$${item.price}-</p>`
      })
      .join("")

    $("#appMenu").html(apps)
    $("#entreesMenu").html(entrees)
    $("#dessertsMenu").html(desserts)
    $("img.menuIcons").hover(function() {
      $(this).toggleClass("menuIconsHover")
    })
  })
})
