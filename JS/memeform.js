import { Meme } from "./Meme.js";
import { images } from "./values.js";
var currentMeme = new Meme("");
//console.log(meme);
export function initMemeEditor() {
  var form = document.forms["Meme-form"];
  form["titre"].addEventListener("input", function (evt) {
    currentMeme.titre = evt.target.value;renderMeme()
  });

  form["imageId"].addEventListener("change", function (evt) {
    currentMeme.imageId = Number(evt.target.value);renderMeme()
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
  loadSelectImages(images);
}

function renderMeme(meme){
    if(undefined===meme){
        meme=currentMeme;
    }
/**^En gros si on met pas currentMeme dans le renderMeme() ça défini tout seul currentMeme ^*/
    var svg=document.querySelector('#editor-viewer svg');
    var img=images.find(function(img){
        return img.id===meme.imageId})
    var imgElement=svg.querySelector('image');
    var textElement=svg.querySelector('text');

    svg.setAttribute('viewBox',`0 0 ${undefined!==img?img.w:500} ${undefined!==img?img.h:500}`);

    imgElement.setAttribute('xlink:href', undefined!==img? img.url:"");

    textElement.innerHTML=meme.text;
    textElement.style.fill=meme.color;
    textElement.style.fontSize=meme.fontSize;
    textElement.setAttribute('x',meme.x);
    textElement.setAttribute('y',meme.y);

}
function loadSelectImages(images) {
    var select=document.forms['Meme-form']['imageId'];
    //vidange du select
    var children=select.children[0].cloneNode(true)
    select.innerHTML= "";
    
    var optBase=document.createElement('option');
    optBase.value="erty";
    optBase.innerHTML='text visuel';
    select.appendChild(optBase);
    images.forEach(function(img){
        var opt=optBase.cloneNode(true);
        opt.value=img.id;
        opt.innerHTML=img.titre;
        select.appendChild(opt);
    });
}