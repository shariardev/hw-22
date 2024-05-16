let dec = document.querySelector(".dec");
let result = document.querySelector(".result");
let inc = document.querySelector(".inc");

inc.addEventListener("click", function(){
  
  if(result.value <=4){
    result.value = Number(result.value)+1;
    console.log(result);
  }else{
    
    dec.style.cursor = "not-allowed";
    
  }

});

dec.addEventListener("click", ()=>{
  if(result.value>1){

    result.value = Number(result.value)-1
    console.log(result);

  }else{
    dec.style.cursor = "not-allowed";
  }
})

let range = document.querySelector(`.range`);
let contain = document.querySelector(`.contain`);

range.addEventListener("input", function(){

  let rslt = Number(range.value);
  contain.innerHTML = rslt;
 
});