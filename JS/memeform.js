var currentMeme = new Meme("");
//console.log(meme);
function initMemeEditor() {
  var form = document.forms["Meme-form"];
  form["titre"].addEventListener("input", function (evt) {
    currentMeme.titre = evt.target.value;renderMeme()
  });

  form["imageId"].addEventListener("change", function (evt) {
    currentMeme.imageId = evt.target.value;renderMeme()
  });

  form["text"].addEventListener("input", function (evt) {
    currentMeme.text = evt.target.value;renderMeme()
  });

  form["x"].addEventListener("change", function (evt) {
    currentMeme.x = Number(evt.target.value);renderMeme()
  });

  form["y"].addEventListener("change", function (evt) {
    currentMeme.y = Number(evt.target.value);renderMeme()
  });

  form["color"].addEventListener("change", function (evt) {
    currentMeme.color = evt.target.value;renderMeme()
  });
}

function renderMeme(meme){
    if(undefined===meme){
        meme=currentMeme;
    }
/**^En gros si on met pas currentMeme dans le renderMeme() ça défini tout seul currentMeme ^*/
    var svg=document.querySelector('#editor-viewer svg');
    var textElement=svg.querySelector('text');
    textElement.innerHTML=meme.text;
    textElement.style.fill=meme.color;
    textElement.style.fontSize=meme.fontSize;
    textElement.setAttribute('x',meme.x);
    textElement.setAttribute('y',meme.y);
}