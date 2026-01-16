  let grille = document.querySelector("#grille");
  
  grille.style.display="grid";
  grille.style.gridTemplateColumns = "repeat(2, 1fr)";
  
  
  let items =document.querySelectorAll(".item");
  for(let i=0 ; i<items.length ; i++){
        items[i].style.backgroundColor = "lightyellow";
  }
 

  
  