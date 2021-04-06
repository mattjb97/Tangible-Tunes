
var searchbutton = document.querySelector('.is-info')
var input = document.querySelector('.input')


var searchBtn = document.getElementById("button-addon");
var songInputEl = document.querySelector(".musicForm");

var firstSong = document.querySelector('.firstSong')
var secondSong = document.querySelector('.secondSong')
var thirdSong = document.querySelector('.thirdSong')
var fourthSong = document.querySelector('.fourthSong')
var fifthSong = document.querySelector('.fifthSong')

var videoLocation = document.querySelector('.boxVideo')
var lyricsLocation = document.querySelector('.boxLyrics')




const youtubekey = 'AIzaSyDGxdfjPLDMkjD0Cvi9dU8d66Pv1SlJ08k'


<<<<<<< HEAD
//From Brian Import:
// MusixMatch 'UT Student's' appid	6a4d09aa7c7bc21dd8f981caaf324cda

// DOM Vars
var searchBtn = document.getElementById("button-addon");
var songInputEl = document.querySelector(".musicForm");

// Global Vars


// Functions
=======
>>>>>>> fdf6f0fa81cd7873844abb2c85f17061df8502e7

var submitForm = function (event) {
    event.preventDefault();
    var songSearch = songInputEl.value.trim();
    if (songSearch) {
        getSongs(songSearch);
        songInputEl.value = '';
    } else {
        alert('Please enter the name of a song');
    }
};

<<<<<<< HEAD
=======


>>>>>>> fdf6f0fa81cd7873844abb2c85f17061df8502e7
function getSongs (songTitle) {
    var apiUrl = 'https://api.musixmatch.com/ws/1.1/track.search?q_track=' + songTitle + '&page_size=5&apikey=6a4d09aa7c7bc21dd8f981caaf324cda';
    fetch(apiUrl).then (function(response){
            if (response.ok){
                response.json().then(function(currentData){
                    console.log(currentData);
<<<<<<< HEAD
                    songID=currentData.list.
                    displaySongs(currentData, songTitle);
=======
                    // displaySongs(currentData, songTitle);
>>>>>>> fdf6f0fa81cd7873844abb2c85f17061df8502e7
                    // getLyrics(currentData, songTitle);
                });
            } else {
                alert('Error: ' + response.statusText);
            }
        })
        .catch(function (error) {
            alert('Unable to connect to MusiXmatch');
        });
};

<<<<<<< HEAD
// Event Listeners
searchBtn.addEventListener('click', submitForm);






=======
searchBtn.addEventListener('click', submitForm);

>>>>>>> fdf6f0fa81cd7873844abb2c85f17061df8502e7
//onclick search button consol logs in the input box with place holder 'Search Song'
searchbutton.addEventListener('click', function (event) {
    console.log(input.value)



});








'https://www.googleapis.com/youtube/v3/videos'

function getMusic(Song) {
    $.ajax({
        type: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        data: {
            key: youtubekey,
            q: Song + " Music",
            part: 'snippet',
            maxResults: 1,
            type: 'video',
            videoEmbeddable: true
        },
    })
}


