
  //  select all thr li en the page ===> list of li 
let lis = document.querySelectorAll("li");  
for(let i =0; i < lis.length ;i++){
    if(i % 2 === 0){
        lis[i].style.color ="blue";
    }
}