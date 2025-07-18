window.onload = async function ()
{
    

    //Pedido da internet
let request = await fetch("data.json");
let audioData = await request.json();
//https://github.com/Borewit/music-metadata
if("serviceWorker" in navigator)
{
    navigator.serviceWorker.register("service-worker.js")
}
// if("jsmediatags" in navigator)
//  {
//      navigator.serviceWorker.register("jsmediatags.js")
//  }

    //Variáveis
    let title = document.querySelector("#title");
    let playButton = document.querySelector("#play-stop-button");
    let nextButton = document.querySelector("#next-button");
    let previousButton = document.querySelector("#previous-button");
    let scrubInput = document.querySelector("#scrub-input");
     let bar = scrubInput.querySelector(".scrub-bar");
     let volumeInput = document.querySelector("#volume-input");
    let fileInput = document.querySelector("#inv");
    let audio = document.querySelector("audio");
    let currentMusic = 0;
    let pauseTime = 0;
    
//Fim de variáveis



//Mudanças
    function changeTitle(value) 
    
    {
        title.innerText = value;
        
    }


    
//Atualiza Barras de som e scrub
    function updateInputBar(value, bar) {

        bar.style.transform = "scaleX(" + value /100 +")";
    }
    scrubInput.querySelector("input").oninput = function(event) 
    {
        let bar = scrubInput.querySelector(".scrub-bar")
        let value = event.target.value;
        updateInputBar(event.target.value, bar)
        scrubAudio(value);
    }
       volumeInput.querySelector("input").oninput = function(event) 
    {
        let bar = volumeInput.querySelector(".scrub-bar")
        let value = event.target.value;
        audio.volume = value / 100;
        updateInputBar(event.target.value, bar)
    }


    //Atualiza Botões
    nextButton.onclick = function() 
    {
        currentMusic++
        if (currentMusic >= audioData.length)
        {
            currentMusic = 0;
        }
        playAudio();
    }
        previousButton.onclick = function() 
    {
        currentMusic--
        if (currentMusic < 0)
        {
            currentMusic = audioData.length-1;
        }
        playAudio();
    }


    playButton.onclick = function() 
    {
        if(audio.paused) 
            {
                playAudio();
             audio.currentTime = pauseTime;
             pauseTime = 0;
            }
        else
            {

                pauseTime = audio.currentTime;
                pauseAudio();
            }

    }

    fileInput.oninput = function() 
    {
        let file = Array.from(fileInput.files)[0];
        let reader = new FileReader();
        reader.onload = function() 
        {  
            console.log("File Recived")
            audioData.push({
                title: file.name,
                url: reader.result
            });
        }
        if (file) {
            reader.readAsDataURL(file);
        }
    }
    function playAudio() 
    {
        audio.src = audioData[currentMusic].url;
        changeTitle(audioData[currentMusic].title)
        audio.play();
    }
    function pauseAudio ()
    {
        let playIcon = document.querySelector("#icon-play");
      let pauseIcon = document.querySelector("#icon-pause");
        audio.pause()
        playIcon.style.display="block";
      pauseIcon.style.display="none";
    }
    audio.onplay = function() 
    {
      let playIcon = document.querySelector("#icon-play");
      let pauseIcon = document.querySelector("#icon-pause");
      playIcon.style.display="none";
      pauseIcon.style.display="block";
    }

    audio.onended = function() 
    {
        nextButton.click();
    }

    function scrubAudio(value) 
    {
        if(!audio.src) return;
        audio.currentTime = audio.duration * (value/100);
    }

    audio.ontimeupdate = function() 
    {
        let bar = scrubInput.querySelector(".scrub-bar");
        let value = (audio.currentTime / audio.duration) * 100;
        updateInputBar(value, bar);
    }

}