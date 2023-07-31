const music = new Audio('On My Way.mp3');


// create
const songs = [
    {
        id: '1',
        songName: `On My Way <br>
        <div class="subtitle">Alan Walker</div`,
        poster: "image/alan.png" 
    },
    {
        id: '2',
        songName: `On My Way <br>
        <div class="subtitle">Alan Walker</div`,
        poster: "image/w.png" 
    }
]

Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})

let masterPlay = document.getElementById('masterPlay');

masterPlay.addEventListener('click',()=>{
    if(music.paused || music.currentTime <= 0){
        music.play();
    }else{
        music.pause();
    }
})