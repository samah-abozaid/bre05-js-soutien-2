

let users = [
    {
    nom :"samah",
    etat:true
    },
    
     {
    nom:"samah",
    etat:false
    },
    
     {
    nom:"samah",
    etat:true
    }
    ];
    
    for(let i=0 ; i< users.length ; i++){
        if(users[i].etat){
            console.log(users[i].nom+"est connecté");
        }else{
            console.log(users[i].nom+" est déconnecté");
        }
    }