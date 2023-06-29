
import { ressources } from "../metier/Ressources.js";
import { Meme } from "../metier/meme.js";
import { router } from "../router.js";
let currentMeme;
let currentImage
const VIEW_EDITOR_CSS_SELECTOR = "#editor";
export const initEditor = () => {
    initFormEvent()
  if (ressources.isLoaded) {
    initSelectImages();
    setCurrentMeme(new Meme())
  } else {
    ressources.loadRessources((res) => {
      initSelectImages();
      setCurrentMeme(new Meme())
    });
  }
};
const initFormEvent = () => {
    var form = document.forms["Meme-form"];
    form.addEventListener('submit',(evt)=>{
        evt.preventDefault();
        currentMeme.save((memeSaved=>{
            ressources.memes.push(memeSaved);
            router.changeRoute('/thumbnail')
        }));
    })
    form["titre"].addEventListener("input", function (evt) {
      currentMeme.titre = evt.target.value;
      //Meme.render(currentMeme,VIEW_EDITOR_CSS_SELECTOR,currentImage);;;
    });
  
    form["imageId"].addEventListener("change", function (evt) {
      currentMeme.imageId = Number(evt.target.value);
      currentImage = ressources.images.find(
        img=>img.id===currentMeme.imageId)
      Meme.render(currentMeme,VIEW_EDITOR_CSS_SELECTOR,currentImage);
    });
  
    form["text"].addEventListener("input", function (evt) {
      currentMeme.text = evt.target.value;
      Meme.render(currentMeme,VIEW_EDITOR_CSS_SELECTOR,currentImage);
    });
  
    form["x"].addEventListener("change", function (evt) {
      currentMeme.x = Number(evt.target.value);
      Meme.render(currentMeme,VIEW_EDITOR_CSS_SELECTOR,currentImage);
    });
  
    form["y"].addEventListener("change", function (evt) {
      currentMeme.y = Number(evt.target.value);
      Meme.render(currentMeme,VIEW_EDITOR_CSS_SELECTOR,currentImage);
    });
  
    form["color"].addEventListener("change", function (evt) {
      currentMeme.color = evt.target.value;
      Meme.render(currentMeme,VIEW_EDITOR_CSS_SELECTOR,currentImage);
    });
};
const initFormValues = () => {
    const form=document.forms["Meme-form"]
    form["titre"].value=currentMeme.titre
    form["text"].value=currentMeme.text
    form["x"].value=currentMeme.x
    form["y"].value=currentMeme.y
    form["imageId"].value=currentMeme.imageId
    form["color"].value=currentMeme.color
};
const setCurrentMeme = (meme) => {
    currentMeme=meme;
    initFormValues();
    const img=ressources.images.find((im=>im.id===meme.imageId))
    Meme.render(meme,VIEW_EDITOR_CSS_SELECTOR,img)
};
const initSelectImages = () => {
  var select = document.forms["Meme-form"]["imageId"];
  var children = select.children[0].cloneNode(true);
  select.innerHTML = "";

  var optBase = document.createElement("option");
  optBase.value = "erty";
  optBase.innerHTML = "choisissez une image";
  select.appendChild(optBase);
  ressources.images.forEach(function (img) {
    var opt = optBase.cloneNode(true);
    opt.value = img.id;
    opt.innerHTML = img.titre;
    select.appendChild(opt);
  });
};
