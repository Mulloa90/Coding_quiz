//get scores
function printHighscores() {
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

printHighscores()
