var numondice1= Math.floor(((Math.random())*6)+1);
var numondice2= Math.floor(((Math.random())*6)+1);
switch(numondice1){
  case 1:
    document.querySelector(".img1").setAttribute("src","dice1.png");
    break;
  case 2:
    document.querySelector(".img1").setAttribute("src","dice2.png");
    break;
  case 3:
    document.querySelector(".img1").setAttribute("src","dice3.png");
    break;
  case 4:
    document.querySelector(".img1").setAttribute("src","dice4.png");
    break;
  case 5:
    document.querySelector(".img1").setAttribute("src","dice5.png");

}

switch(numondice2){
  case 1:
    document.querySelector(".img2").setAttribute("src","dice1.png");
    break;
  case 2:
    document.querySelector(".img2").setAttribute("src","dice2.png");
    break;
  case 3:
    document.querySelector(".img2").setAttribute("src","dice3.png");
    break;
  case 4:
    document.querySelector(".img2").setAttribute("src","dice4.png");
    break;
  case 5:
    document.querySelector(".img2").setAttribute("src","dice5.png");
}
if(numondice1>numondice2){
  document.querySelector("h1").innerHTML="Player1 wins";
}
else if (numondice2>numondice1) {
  document.querySelector("h1").innerHTML="player2 wins";

}
else{
  document.querySelector("h1").innerHTML="its a draw"
}
