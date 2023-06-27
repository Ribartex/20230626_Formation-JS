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
/**
 * changement d'etat du theme
 * @param {boolean} isDark etat du choix de theme dark/clear
 */
function changeTheme(isDark) {
    var nav=document.getElementsByTagName('nav')[0]
    if (isDark) {
        document.body.className = "dark";
        nav.classList.replace('navbar-light','navbar-dark');
        nav.classList.replace('bg-light','bg-dark');
    } else {
        document.body.className = "";
        nav.classList.replace('navbar-dark','navbar-light');
        nav.classList.replace('bg-dark','bg-light');
    }
}
document.addEventListener('DOMContentLoaded',function(evt){
    console.log(evt);
    init();
})
