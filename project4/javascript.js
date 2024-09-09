

let colorgenerator = function(){
  let hex ="0123456789ABCDEF"
  let color = "#"
  for(let i = 0; i < 6; i++){
    color = color + hex[Math.floor(Math.random()*16)]
  }
  return color
}
let interval
function colorchange(){
  interval = setInterval(funccck,2000)
  
  function funccck(){
    document.body.style.backgroundColor = colorgenerator()

  }
}
function stopp(){
  clearInterval(interval)
  document.body.style.backgroundColor = "black"
}
document.querySelector("#start").addEventListener("click",colorchange)
document.querySelector("#stop").addEventListener("click", stopp)