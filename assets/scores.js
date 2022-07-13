/* TODO: 
  - add a function to print the high score
  - add a function to clear the high score
  - on page load, print the high score
*/
function printHighScore(){
    var saved = 0;
    try { saved = parseFloat(localStorage.highScore); } catch (e) { saved = 0; }
    if (!(typeof score === 'undefined')) {
       saved = score;
       localStorage.highScore = '' + score;
    }
    if (isNaN(saved)) {
       saved = 0;
       localStorage.highScore = '0';
    }
    return saved;
 }
 function clearRect() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
}