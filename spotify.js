console.log("welcome to Spotify")
//intilation of song
let songIndex = 0;
let audioElement = new Audio('Songs/2.mp3');
let x = document.getElementsByClassName('songItemPlay')
let masterPlay = document.getElementById('masterPlay');
let mySong = document.getElementById('mySong');
let songItem =Array.from(document.getElementsByClassName('songItem')) 
let helloMn = document.getElementsByClassName('helloMn')
console.log(helloMn)


let songs = [
{songName:"Hum mile hai-fighter",filePath:"Songs/1.mp3", coverPath:"covers/1.jpg"},
{songName:"Banda kafi hai-Dunky",filePath:"Songs/2.mp3", coverPath:"covers/2.jpg"},
{songName:"Fannna kar mujhe koi ",filePath:"Songs/3.mp3", coverPath:"covers/3.jpg"},
{songName:"Hawai na huyi -Animal",filePath:"Songs/4.mp3", coverPath:"covers/4.jpg"},
{songName:"Kashmir le ja -Animal",filePath:"Songs/5.mp3", coverPath:"covers/5.jpg"},
{songName:"Lutt-Futt gaya-Animal",filePath:"Songs/6.mp3", coverPath:"covers/6.jpg"},
{songName:"Mahabbot karne wali",filePath:"Songs/7.mp3", coverPath:"covers/7.jpg"},
{songName:"Nikle the kabbhi hum",filePath:"Songs/8.mp3", coverPath:"covers/8.jpg"},
{songName:"Ruaan kar le -Tiger 3",filePath:"Songs/9.mp3", coverPath:"covers/9.jpg"},
{songName:"Sher khul gye-Fighter",filePath:"Songs/10.mp3", coverPath:"covers/10.jpg"},
]
//adding the image of song and its name .
songItem.forEach((element,i) => {
  // console.log(element,i)
   //element.getElementsByTagName("img")[0].src=songs[i].coverPath
   element.getElementsByClassName("songName")[0].innerText=songs[i].songName
});

   masterPlay.addEventListener('click',()=>{
    if(audioElement.paused ||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        //gif.style.opacity =1;
             }
             else{
                audioElement.pause();
                masterPlay.classList.remove('fa-pause-circle')
                masterPlay.classList.add('fa-play-circle')
               // gif.style.opacity =0;
             }
   })

//progressBar
//by this we are playing a song 
//listen to event
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate')
    progess = parseInt((audioElement.currentTime/audioElement.duration)*100)
    console.log(progess)
    mySong.value = progess

})
// Seak barrr
mySong.addEventListener('change',()=>{
   audioElement.currentTime=mySong.value*audioElement.duration/100
})

const makeAllPlays=()=>{
   Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
      element.classList.remove('fa-pause-circle');
      element.classList.add('fa-play-circle');
   })
}
   Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
   element.addEventListener('click',(e)=>{
   //console.log(e.target)
     makeAllPlays();
     songIndex= parseInt(e.target.id)
     e.target.classList.remove('fa-play-circle')
     e.target.classList.add('fa-pause-circle')
     audioElement.src=`Songs/${songIndex+1}.mp3`
     audioElement.currentTime=0
     audioElement.play();
     masterPlay.classList.remove('fa-play-circle');
     masterPlay.classList.add('fa-pause-circle');
     

   })
})

document.getElementById('next').addEventListener('click',()=>{
   if(songIndex>=9){
      songIndex =0
   } else{
      songIndex +=1
   }
   audioElement.src=`Songs/${songIndex+1}.mp3`
   //audioElement.src='Songs/1.mp3'
   audioElement.currentTime=0
    audioElement.play()
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    
})
document.getElementById('previous').addEventListener('click',()=>{
   if(songIndex<=0){
      songIndex =0
   } else{
      songIndex -=1
   }
   audioElement.src=`Songs/${songIndex+1}.mp3`
   //audioElement.src='Songs/1.mp3'
   audioElement.currentTime=0
    audioElement.play()
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    
})
