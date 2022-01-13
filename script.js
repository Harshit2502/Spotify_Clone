console.log('Welcome to Spotify');
// Initialize the variable 
let songIndex = 0;
let audioElement =new Audio('closer.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar =document.getElementById('myProgressBar');
let gif =document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'))
let songs=[
    {songName: "Closer", filePath: "Spotify/closer.mp3", coverPath: "Background.png"},
    {songName: "Ego", filePath: "Spotify/Ego.mp3", coverPath: "Background.png"}
]

songItems.forEach((element, i)=>{
    element.getElementByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("sonName")[0].src=songs[i].songName;
})
// audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1; 
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    // Update Seek bar 
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime= myProgressBar.value * audioElement.duration/100;
})

const makeALLPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')),forEach((element)=>{
        element.target.classList.remove('fa-pause-circle');
        element.target.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target)
        makeALLPlays();
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src()
    })
})