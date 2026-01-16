



let div = document.getElementById("zone-interactive");

div.addEventListener("mousedown", () => {
  div.style.backgroundColor = "orange";
});

div.addEventListener("mouseup", () => {
  div.style.backgroundColor = "lightgray";
});