const button = document.querySelectorAll(".button");
const back = document.querySelector("body");
button.forEach(function(button){
  button.addEventListener("click",function(e){
    if(e.target.id === "grey"){
      back.style.backgroundColor= "grey"
    } 
    else if(e.target.id === "white"){
      back.style.backgroundColor= "white"
    }
    else if(e.target.id === "blue"){
      back.style.backgroundColor= "blue"
    }
    else if(e.target.id === "yellow"){
      back.style.backgroundColor= "yellow"
    }
    
  })
})