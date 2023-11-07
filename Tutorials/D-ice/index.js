const img = document.getElementsByTagName("img");
const img1 = img[0];
const img2 = img[1];
const header = document.getElementsByTagName("h1");

randomNumber1 = Math.floor(Math.random()* 6)+1;
randomNumber2 = Math.floor(Math.random()* 6)+1;

function playDice(randomNumber, img){
    switch (randomNumber) {
        case 1:
          img.setAttribute("src", "images/dice1.png");
          break;
        case 2:
          img.setAttribute("src", "images/dice2.png");
          break;
        case 3:
          img.setAttribute("src", "images/dice3.png");
          break;
        case 4:
          img.setAttribute("src", "images/dice4.png");
          break;
        case 5:
          img.setAttribute("src", "images/dice5.png");
          break;
        case 6:
          img.setAttribute("src", "images/dice6.png");
          break;
      }
      return 0;
}
playDice(randomNumber1, img1);
playDice(randomNumber2, img2);

if (randomNumber1 > randomNumber2){
header[0].innerHTML = "Player 1 WINS";
}
else if (randomNumber1 < randomNumber2){
    header[0].innerHTML = "Player 2 WINS";
}
else{
    header[0].innerHTML = "TIE";
}
  
  