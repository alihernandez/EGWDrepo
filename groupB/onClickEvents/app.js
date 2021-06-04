function myFun() {
  let note = document.createElement("img");
  note.setAttribute("src", "./assets/gibson.jpeg");
  document.body.appendChild(note);
  document.querySelector("note");
  note.width = 128;
  note.height = 128;
}

function myFunction() {
  let para = document.createElement("p");
  let text = document.createTextNode("text is here");
  para.appendChild(text);
  document.getElementById("myDiv").appendChild(para);
}

function checkFunc() {
  let node = document.createElement("li");
  let text1 = document.createTextNode("Fender");
  node.appendChild(text1);
  document.getElementById("myList").appendChild(node);
}
