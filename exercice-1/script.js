 
 
 //****** Créer un tableau :
 
 let notes = [12, 15, 8, 19, 10.];
 
 let somme =0;
 for(let i=0 ; i<notes.length; i++){
     somme += notes[i];
 }
 
 let moyenne =somme/notes.length;
 console.log("la moyenne est de : " + moyenne);