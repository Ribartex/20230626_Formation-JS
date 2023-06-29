import { ressources } from "../metier/Ressources.js"
import { Meme } from "../metier/meme.js"
const baseview='#thumbnail'
const PREVIEW_CONTAINER='#thumbnail-container'
export const initThumbnail=()=>{
    if (ressources.isLoaded){
        initPreview()
    } else {
        ressources.loadRessources(()=>{
            initPreview()
        })
    }
}
const initPreview=()=>{
    const ListConctainer=document.querySelector(PREVIEW_CONTAINER)
    const basePreviewer=document.querySelector('#thumbnail-meme-')
    ressources.memes.forEach(m=>{
        const newPreviewer=basePreviewer.cloneNode(true);
        newPreviewer.id+=m.id
        newPreviewer.querySelector(".thumbnail-meme-title").innerHTML=m.titre
        newPreviewer.querySelector('a').href+=m.id
        ListConctainer.appendChild(newPreviewer)
        const img=ressources.images.find(im=>im.id===m.imageId)
        Meme.render(m,'#'+newPreviewer.id,img)
    })
}
