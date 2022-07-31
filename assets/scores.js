//save scores
//get scores
/*function printHighscores() {
  var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
 
  highscores.sort(function (a, b) {
   return b.score - a.score;
});
highscores.array.forEach(function (score) {
   //create list for scores
   var liTags = document.createElement("li");
    liTags.textContent = score.initials + " - " + score.score;

    var olEl = document.getElementById("highscores");
    olEl.appendChild(liTags);
  });
}
function clearHighscores() {
window,localStorage.removeItem("highscores");
window.location.reload();
}

document.getElementById("clear").onclick = clearHighscores;

printHighscores()*/

function save() {
  var highScoreBox = document.querySelector("input");
  var hsArray = [];

  if (highScoreBox.value != `` || highScoreBox.value != null)
    var info = {
      names: highScoreBox.value,
      scores: score,
    }
if(window.localStorage.getItem('highscores') == null){
hsArray.push(info)
window.localStorage.setItem('highscores', JSON.stringify(hsArray));
}
else {
hsArray = JSON.parse(window.localStorage.getItem('highscores'));
  for (let index = 0; index <= hsArray.length; index++){
    if(index == hsArray.length) {
      hsArray.push(info)
      break;
    } 
    else if(hsArray[index].scores < score) {

      hsArray.splice(index, 0, info);
      break;
    }
  }
window.localStorage.setItem(`highscores`, JSON.stringify(hsArray))
}
document.querySelector('input').value = ``;
score = 0;
}
printHighscores();
return;

function printHighscores() {
startBtn.style.display = `none`;


}