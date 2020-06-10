var request = new XMLHttpRequest();
request.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var menuData = JSON.parse(this.responseText);
    updateMenu(menuData);
  }
};
request.open("GET", "/content/food-menu.json");
request.send();

function updateMenu(content) {
  let menuDiv = document.getElementById("food-menu")
  for (let i=0; i<content.length; i++) {
    let element = document.createElement("div");
    element.setAttribute("class", "menu-item");
    menuDiv.appendChild(element);

    for (k in content[i]) {
      let menuItem = document.createElement("div");
      menuItem.setAttribute("class", k);
      menuItem.innerHTML = content[i][k];
      element.appendChild(menuItem);
    }
  }
  console.log(content);
}
