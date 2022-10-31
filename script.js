<<<<<<< HEAD
let button
=======
let max737 
>>>>>>> c6a89ce197ed786e942974422d0156ffa3ca8c8a

function welcome() {
  alert("Warning! The following might give you a new phobia.")
  let data = String(prompt("Have you heard about the 737 max?"));
  console.log(data)
  return data;

}

console.log(welcome())

function getName (){
    let userName = prompt("What is your name");
    if (userName == "" || userName == null || userName == undefined){
        alert("try Again");
        getName();

    } else {
        document.write("Hey " + userName + ", Welcome to my Page")
    }
}

getName();



button = document.getElementById("max737").addEventListener("click", function() {
  alert("Boeing 737 MAX was announced in 2011 in competition with Norwegian jets. 3000 planes sold to American and foreign airlines. But it wasn't manufactured until 2015. First patch of planes were delieverd to airlines in late 2017.")
})

