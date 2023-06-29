import { ressources } from "../metier/Ressources.js";
let currentMeme;
const VIEW_EDITOR_CSS_SELECTOR = "#editor";
export const initEditor = () => {
  if (ressources.isLoaded) {
    initSelectImages();
  } else {
    ressources.loadRessources((res) => {
      initSelectImages();
    });
  }
};
const initFormEvent = () => {};
const initFormValues = () => {};
const setCurrentMeme = () => {};
const initSelectImages = () => {
  var select = document.forms["Meme-form"]["imageId"];
  var children = select.children[0].cloneNode(true);
  select.innerHTML = "";

  var optBase = document.createElement("option");
  optBase.value = "erty";
  optBase.innerHTML = "text visuel";
  select.appendChild(optBase);
  ressources.images.forEach(function (img) {
    var opt = optBase.cloneNode(true);
    opt.value = img.id;
    opt.innerHTML = img.titre;
    select.appendChild(opt);
  });
};
