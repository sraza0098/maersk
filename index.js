
(function(){
    //...
    document.addEventListener("DOMContentLoaded", function(event) { 
        //do work
        sortedArray = []
        customHTML=''
        let html = '';
        let startHtml = "<div class='col grid-";
        let midHtml = "'><div class='text'>";
        let endHtml = "</div></div>";
        for(let i = 1; i < 10; i++){
            html = startHtml + i + midHtml + i + endHtml; 
            sortedArray.push(html)
            customHTML += html
        }
        setInnerHtmls('card-box',customHTML);
    });

      
    
})();

function shuffle() {
    shuffledArray = randomizeArray(sortedArray)
    let html = ''
    for(let i = 0; i < 9; i++){
        html += shuffledArray[i]; 
    }
    // let doc = document.getElementById('card-box');
    // doc.innerHTML=html;
    setInnerHtmls('card-box',html);
}

function sort() {
    setInnerHtmls('card-box',customHTML);
}

function randomizeArray(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  function setInnerHtmls(id,html){
    let doc = document.getElementById(id);
    doc.innerHTML=html;
  }