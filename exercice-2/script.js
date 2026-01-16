let panier = [["Pomme", "Poire"],["Banane", "Ananas", "Kiwi"],["Fraise", "Framboise"]];

for(let i=0; i < panier.length ; i++){
    let fruits = panier[i];
    for(let j=0 ; j < fruits.length ;j++){
       console.log(`fruit trouvé: ${fruits[j]}`); 
    }
}
