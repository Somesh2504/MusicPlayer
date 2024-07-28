let song=document.getElementById('song');
let progress=document.getElementById('progress');
let cntrlbtn=document.getElementById('pause-play');
let prev=document.getElementById('prev');
let next=document.getElementById('next');
let movie=document.getElementById('moviename');
let songname=document.getElementById('songname');
let image=document.getElementById('image');
// let music=document.getElementById('source');
let Songs=[
    {sname :'konchem',
      src:'eega',
     movie:'Eega',
     img:'eega'
    },
    {
        sname :'guruvaram',
        src:'guruvaram',
        movie:'raguvaran btech',
        img:'kirakparty'
    },
    {
        sname :'adento-gani',
        src:'adentogani', 
        movie:'jersey',
        img:'jersey'
    }

]

let i=0;
function Playnext(){
    // console.log();
    i=i+1;
    let index=(i)/Songs.length
    song.src=`${Songs[i].src}.mp3`;
    movie.innerText=`${Songs[i].movie}`;
    songname.innerText=`${Songs[i].sname}`
    image.src=`${Songs[i].img}.jpeg`
    console.log(Songs[i].src);
    song.play();
    if(cntrlbtn.classList.contains("fa-play")){
        song.play();
        cntrlbtn.classList.remove("fa-play");
        cntrlbtn.classList.add("fa-pause");
    }
    
}

function Playprev(){
    i=i-1;
    let index=(i)/Songs.length
    song.src=`${Songs[i].src}.mp3`;
    movie.innerText=`${Songs[i].movie}`;
    songname.innerText=`${Songs[i].sname}`
    image.src=`${Songs[i].img}.jpeg`
    console.log(Songs[i].src);
    song.play();
    if(cntrlbtn.classList.contains("fa-play")){
        song.play();
        cntrlbtn.classList.remove("fa-play");
        cntrlbtn.classList.add("fa-pause");
    }
}

console.log(song)
console.log(progress)
console.log(cntrlbtn)
song.onloadedmetadata=function(e){
   console.log(e)
   progress.max=song.duration;
   progress.value=song.currentTime;
   console.log(progress.value);  
}
function PlayPause(){
    if(cntrlbtn.classList.contains("fa-pause")){
        song.pause();
        cntrlbtn.classList.remove("fa-pause");
        cntrlbtn.classList.add("fa-play");
    }
    else{
        song.play();
        cntrlbtn.classList.remove("fa-play");
        cntrlbtn.classList.add("fa-pause");
    }
}
function Skip(){
    song.play();
    song.currentTime=progress.value;
    cntrlbtn.classList.remove("fa-play");
    cntrlbtn.classList.add("fa-pause");
}
if(song.play()){
    setInterval(()=>{
         let progressval=song.currentTime/song.duration;
         progress.value=progressval*100;
    },100);
}
