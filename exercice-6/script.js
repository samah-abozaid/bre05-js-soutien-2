 function estAdulte(age){
     
     if(age >= 18){
         return true;
     }else{
         return false;
     }
 }
 
 function formaterMessage(age){
     if(estAdulte(age)){
         console.log("Accès autorisé");
     }else{
         console.log("Accès interdit");
     }
 }
 
 
 
 
 
 formaterMessage(50);