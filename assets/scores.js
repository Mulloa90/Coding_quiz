// variables
var highscores = document.querySelector('#highScore')
var clear = document.querySelector('#clear')
var goBack = document.querySelector('#goBack')
// clears score
clear.addEventListener('click', function () {
   localStorage.clear();
   location.reload();
});
var allScores= localStorage.getItem('allScores')
allScores = JSON.parse(allScores);

if (allScores !== null) {
       
   for (i = 0; i < allScores.length; i++) {
      var newLi =document.createElement("li");
      newLi.textContent = allScores[i].initials + " " + allScores[i].score;
      highscores.appendChild(newLi)

   }
}
goBack.addEventListener("click", function (){
   window.location.replace("./index.html");
});
