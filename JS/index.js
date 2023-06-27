/**
 * fonction d'initialisation
 * @returns {undefined} aucun retour
 */


function init(){
    var currentDate=new Date()
    console.log(currentDate.toISOString());
    var footer=document.getElementsByTagName('footer')[0]
    footer.innerHTML=currentDate.toISOString()
    footer.style.fontStyle='italic';
    footer.style.color='white';
    footer.style.backgroundColor='rgba(128,128,128,0.2)';
    footer.style.textDecoration='underline grey';
    footer.style.textUnderlineOffset='3pt';
}

document.addEventListener('DOMContentLoaded',function(evt){
    console.log(evt);
    init();
})