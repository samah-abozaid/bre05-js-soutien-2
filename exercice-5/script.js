 function calculerPrixTTC(prixHT){
     let prix = prixHT*1.2;
     return prix;
 }
 
// tester:

 let prixFinal= calculerPrixTTC(50);
 console.log(prixFinal);