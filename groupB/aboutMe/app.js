document.body.style.fontFamily = "Arial, sans-serif";
document.getElementById("nickname").textContent = "Princess Bubblegum";
document.getElementById("favorites").textContent =
  "science, music, my candy subjects";
document.getElementById("hometown").textContent = "Candy Kingdom";

var items = document.getElementsByTagName("li");
for (var i = 0; i < items.length; i++) {
  items[i].className = "list-item";
}

var myPic = document.createElement("img");
myPic.src =
  "https://upload.wikimedia.org/wikipedia/en/thumb/0/00/Princess_Bubblegum.png/100px-Princess_Bubblegum.png";
document.body.appendChild(myPic);
