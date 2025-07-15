window.onload = function ()
{
    let title = document.querySelector("#title")
    console.log("Hello Tumo");
    let playButton = document.querySelector("#play-stop-button")
    let nextButton = document.querySelector("#next-button")
    let previousButton = document.querySelector("#previous-button")
    function changeTitle(value) 
    
    {
        title.innerText = value;
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



}