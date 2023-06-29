import { ressources } from "../metier/Ressources.js";
let currentMeme;
const VIEW_EDITOR_CSS_SELECTOR="#editor"
export const initEditor=()=>{

}
const initFormEvent=()=>{

}
const initFormValues=()=>{

}
const setCurrentMeme=()=>{

}
const initSelectImages=()=>{
        var select=document.forms['Meme-form']['imageId'];
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

