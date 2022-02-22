const music = document.querySelector("audio")
const img = document.querySelector("img");
const play = document.getElementById("play");
const artist = document.getElementById("artist");
const title = document.getElementById("title");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let progress = document.getElementById("progress");
let total_duration = document.getElementById("duration")
let current_time = document.getElementById("current_time");

const progress_div = document.getElementById("progress_div");

const songs = [{

    name: "Sagar1",
    title: "Ramuloo Ramulaa",
    artist: "Anurag Kulkarni"
},
{
    name: "Sagar2",
    title: "Samajavaragamana",
    artist: "Sid Sriram"
},
{
    name: "Sagar3",
    title: "Butta Bomma",
    artist: "Ramajogayya Sastry"
},
{
    name: "Sagar4",
    title: "Bheemla Nayak",
    artist: " Thaman S"
},
{
    name: "Sagar5",
    title: "Lala Bheemla",
    artist: "Arun kaundinya"
},
{
    name: "Sagar6",
    title: "Antha Ishtam",
    artist: "K.S.Chithra"
},
{
    name: "Sagar7",
    title: "Adavi Thalli Maata",
    artist: "Kummari Durgavva"
},
{
    name: "Sagar8",
    title: "Daakko Daakko Meka",
    artist: "Vijay Sethupathi"
},
{
    name: "Sagar9",
    title: "Srivalli",
    artist: "Sid Sriram"
},
{
    name: "Sagar10",
    title: "Saami Saami",
    artist: "Mounika Yadav"
},
{
    name: "Sagar11",
    title: "Eyy Bidda Idhi Naa Adda",
    artist: "Nakash Aziz"
},
{
    name: "Sagar12",
    title: "Oo Antava Oo Oo Antava",
    artist: "Indravathi Chauhan"
},
{
    name: "Sagar13",
    title: "Kaalame Poyidam",
    artist: "Nihal Sadiq, Ribin Richard"
},

]


let isplaying = false;
//for play function 
const playMusic = () => {
    isplaying = true;
    music.play();
    play.classList.replace("fa-play", "fa-pause")
    img.classList.add("anime");
}

//for pause function
const pauseMusic = () => {
    isplaying = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play")
    img.classList.remove("anime");
}

play.addEventListener("click", () => {

    isplaying ? pauseMusic() : playMusic()
})



// changing the music
const loadSong = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "music/" + songs.name + ".mp3";
    img.src = "./images/" + songs.name + ".jpg";
}

var songindex = 0;
const nextSong = () => {
    songindex = (songindex + 1) % songs.length
    loadSong(songs[songindex]);
    playMusic();
}

const prevSong = () => {
    songindex = (songindex - 1 + songs.length) % songs.length;
    loadSong(songs[songindex]);
    playMusic();
}

// // progress bar
music.addEventListener("timeupdate", (event) => {
    // console.log(event);
    const { currentTime, duration } = event.srcElement;
    // console.log(currentTime);
    // console.log(duration);
    let progress_time = (currentTime / duration) * 100;
    // console.log(progress_time);
    progress.style.width = `${progress_time}%`

    ////music duration update

    // console.log(duration);
    let Minu_duration = Math.floor(duration / 60);
    let sec_duration = Math.floor(duration % 60);
    // console.log(Minu_duration);
    // console.log(sec_duration);
    let tot_duration = `${Minu_duration}:${sec_duration}`
    if (duration) {
        total_duration.textContent = `${tot_duration}`
    }


    ////current duration update
    let Minu_current = Math.floor(currentTime / 60);
    let sec_current = Math.floor(currentTime % 60);

    if (sec_current < 10) {
        sec_current = `0${sec_current}`
    }
    let tot_current = `${Minu_current}:${sec_current}`
    current_time.textContent = `${tot_current}`

})

//progress onclick functionality 
progress_div.addEventListener("click", (event) => {
    // console.log(event);
    const { duration } = music;
    let move_progress =
        (event.offsetX / event.srcElement.clientWidth) * duration;
    // console.log(duration);
    // console.log(move_progress)
    music.currentTime = move_progress;
    playMusic();
})


////if music end call next song function
music.addEventListener("ended", nextSong);

next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);

