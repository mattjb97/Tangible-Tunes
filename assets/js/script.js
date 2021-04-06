
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



function getSongs (songTitle) {
    var apiUrl = 'https://api.musixmatch.com/ws/1.1/track.search?q_track=' + songTitle + '&page_size=5&apikey=6a4d09aa7c7bc21dd8f981caaf324cda';
    fetch(apiUrl).then (function(response){
            if (response.ok){
                response.json().then(function(currentData){
                    console.log(currentData);
                    // displaySongs(currentData, songTitle);
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

searchBtn.addEventListener('click', submitForm);

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


