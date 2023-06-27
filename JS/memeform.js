var currentMeme = new Meme("");
 //console.log(meme);
 function initMemeEditor() {
    var form=document.forms['meme-form'];
    form['titre'].addEventListener('input',function(evt){
        currentMeme.titre=evt.target.value
    });
    var form=document.forms['meme-form'];
    form['imageId'].addEventListener('change',function(evt){
        currentMeme.imageId=evt.target.value
    })
    var form=document.forms['meme-form'];
    form['text'].addEventListener('input',function(evt){
        currentMeme.text=evt.target.value
    })
    var form=document.forms['meme-form'];
    form['x'].addEventListener('change',function(evt){
        currentMeme.x= Number(evt.target.value)
    })
    var form=document.forms['meme-form'];
    form['y'].addEventListener('change',function(evt){
        currentMeme.y= Number(evt.target.value)
    })
    var form=document.forms['meme-form'];
    form['color'].addEventListener('change',function(evt){
        currentMeme.color=evt.target.value
    })
 }
