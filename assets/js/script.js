//var sounds = document.querySelectorAll(".audio");

var sound = new Howl({
  src: ['assets/other/Pads/pad'+0+'.mp3', 'assets/other/Pads/pad17.mp3']
});

var sd = [];
for(var i = 0; i < 20; i++){
   var sound = new Howl({
       src: ['assets/other/Pads/pad'+i+'.mp3', 'assets/other/Pads/pad17.mp3']
   }); 
    sd[i] = sound;
   sd[i].load();
}


//Add Event Listener to the pads
$(".pad").click(function(event){
   event.stopPropagation();
 
    
    
     playSound($(this).text());

});



function playSound(soundIndex){
    parseInt(soundIndex);
    
    sd[soundIndex].play();

}

