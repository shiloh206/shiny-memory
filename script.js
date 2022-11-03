let button

function welcome() {
  alert("Warning! The following might give you a new phobia.")
  let data = String(prompt("Have you heard about the 737 max?"));
  getName();
  getPrompt();
  planes()

  button = document.getElementById("max737").addEventListener("click", function () {
    alert("Boeing 737 MAX was announced in 2011 in competition with Norwegian jets. 3000 planes sold to American and foreign airlines. But it wasn't manufactured until 2015. First patch of planes were delieverd to airlines in late 2017.")
  })
}


function getName() {
  let userName = prompt("What is your name");
  if (userName == "" || userName == null || userName == undefined) {
    alert("try Again");
    getName();

  } else {
    document.write("Hey " + userName + ", Welcome to my Page")
  }
}

function getPrompt() {

  let answer = "2018"
  response = prompt("What year did the 737 MAX crash in Indonesia? ")

  while (response !== answer) {
      alert("Incorrect Try again") 
    getPrompt()
  }

}

welcome();

function planes(){
  let planes = prompt("How many planes do you want?)");
  while(planes < 1 || planes > 100){
      planes = prompt("Bad entry. (1-100 planes)")
  }
  for (let i = 0; i < planes; i++) {
      document.write("<img src='plane.jpg'></img>")
      document.write(i+1)
  }
}