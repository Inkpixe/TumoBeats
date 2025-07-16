window.onload = function ()
{
    let title = document.querySelector("#title")
    console.log("Hello Tumo");
    let playButton = document.querySelector("#play-stop-button")
    let nextButton = document.querySelector("#next-button")
    let previousButton = document.querySelector("#previous-button")
    let scrubInput = document.querySelector("#scrub-input")
     let bar = scrubInput.querySelector(".scrub-bar")
     let volumeInput = document.querySelector("#volume-input")
    function changeTitle(value) 
    
    {
        title.innerText = value;
    }

    function updateInputBar(value, bar) {

        bar.style.transform = "scaleX(" + value /100 +")";
    }

    
    changeTitle("Bruno");
    console.log(title);

    previousButton.onclick = function() 
    {
        console.log("Go to previous")
    }

    nextButton.onclick = function() 
    {
        console.log("Go to next")
    }


    playButton.onclick = function() 
    {
        console.log("Go to play/stop")
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




}