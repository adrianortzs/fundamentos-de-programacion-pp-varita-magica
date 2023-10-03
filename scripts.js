const links = document.querySelectorAll("a"); 
for(i=0; i < links.length; i++){
    links[i].addEventListener("click",function(event){
        event.preventDefault();
    });
}
document.getElementById("").onclick = function() {click()};
    function click() {
        document.querySelectorAll("img").innerHTML.src = "./assets/magic-1.gif";
    }
function mouseOver() {
    let imagen = document.querySelectorAll("img");
    imagen.src = "./assets/abracadabra.gif";
    document.querySelectorAll("p").style.color = "red";
    document.querySelectorAll("p").style.backgroundColor = "blue";
    document.querySelectorAll("article").style.backgroundColor = "green";
    document.querySelectorAll("section").style.backgroundColor = "green";
  }
  function mouseOut() {
    document.querySelectorAll("p").style.color = "black";
    document.querySelectorAll("p").style.backgroundColor = "white";
    document.querySelectorAll("article").style.backgroundColor = "white";
    document.querySelectorAll("article").style.backgroundColor = "white";
  }

const colors = ['red', 'blue', 'green']
const getRandom = (array) => {
    /* código misterioso */
}
console.log(getRandom(colors))
// imprime 'red', 'blue' o 'green'