console.log("welcome to spotify");
let songIndex=0;
let audioElement= new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myprogressbar=document.getElementById('myprogressbar');
let mastersongname=document.getElementById('mastersongname');

let songitems=Array.from(document.getElementsByClassName('songitem'));
let songs=[
    {songname:"Closer - chainsmoker", filepath:"songs/1.mp3", coverpath:"covers/cover1.jpg"},
    {songname:"Sky Full Of Stars - coldplay", filepath:"songs/2.mp3", coverpath:"covers/cover2.png"},
    {songname:"Night Changes - one direction", filepath:"songs/3.mp3", coverpath:"covers/cover3.jpg"},
    {songname:"Shape Of You - Ed sheeran", filepath:"songs/4.mp3", coverpath:"covers/cover4.png"},
    {songname:"Perfect - Ed sheeran", filepath:"songs/5.mp3", coverpath:"covers/cover5.jpg"},
    {songname:"Sorry - justin bieber", filepath:"songs/6.mp3", coverpath:"covers/cover6.png"},
    {songname:"Something Just Like This- coldplay", filepath:"songs/7.mp3", coverpath:"covers/cover7.png"},
]
songitems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText= songs[i].songname;
})
//audioElement.play();
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused ||audioElement.currentTime<=0 ){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})
audioElement.addEventListener('timeupdate',()=>{
    
    progress= parseInt((audioElement.currentTime/audioElement.duration)*100);

    myprogressbar.value=progress;
})
myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime=myprogressbar.value*audioElement.duration/100;
})
const makeallplays=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');

    })

}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
    
        makeallplays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`songs/${songIndex}.mp3`;
        mastersongname.innerText=songs[songIndex-1].songname;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;

        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=6){
        songIndex=0
    }
    else{
        songIndex+=1;   
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    mastersongname.innerText=songs[songIndex].songname;

    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex= 0
    }
    else{
        songIndex-=1;   
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    mastersongname.innerText=songs[songIndex].songname;
    audioElement.currentTime=0;
    audioElement.play();        
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})