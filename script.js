window.onload = async function ()
{
    

    //Pedido da internet
let request = await fetch("data.json");
let audioData = await request.json();



    //Variáveis
    let title = document.querySelector("#title");
    let playButton = document.querySelector("#play-stop-button");
    let nextButton = document.querySelector("#next-button");
    let previousButton = document.querySelector("#previous-button");
    let scrubInput = document.querySelector("#scrub-input");
     let bar = scrubInput.querySelector(".scrub-bar");
     let volumeInput = document.querySelector("#volume-input");
    let fileInput = document.querySelector("#file-input");
    let audio = document.querySelector("audio");
    let currentMusic = 0;
    
//Fim de variáveis



//Mudanças
    function changeTitle(value) 
    
    {
        title.innerText = value;
        
    }
    previousButton.onclick = function() 
    {
        console.log("Go to previous")

        if (currentMusic <= 0)
        {
            curentMusic = 0;
        }
        console.log(currentMusic);
    }

    
//Atualiza Barras de som e scrub
    function updateInputBar(value, bar) {

        bar.style.transform = "scaleX(" + value /100 +")";
    }
    scrubInput.querySelector("input").oninput = function(event) 
    {
        let bar = scrubInput.querySelector(".scrub-bar")
        updateInputBar(event.target.value, bar)
    }
       volumeInput.querySelector("input").oninput = function(event) 
    {
        let bar = volumeInput.querySelector(".scrub-bar")
        updateInputBar(event.target.value, bar)
    }


    //Atualiza Botões
    nextButton.onclick = function() 
    {
        console.log("Go to next")
        console.log(currentMusic);
    }


    playButton.onclick = function() 
    {
        if(audio.paused) 
            {
                playAudio();
            }
        else
            {
                pauseAudio();
            }

    }

    fileInput.oninput = function() 
    {
        console.log("aqui!");
    }
    function playAudio() 
    {
        audio.src = audioData[currentMusic].url;
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


}