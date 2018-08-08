var sounds = document.querySelectorAll(".audio");
//Add Event Listener to the pads

$(".pad").click(function(event){
   event.stopPropagation();
   
     playSound($(this).text());
   
});



function playSound(soundIndex){
    parseInt(soundIndex);
    sounds[soundIndex].load();
    sounds[soundIndex].play();
}

