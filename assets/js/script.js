
var searchbutton = document.querySelector('.is-info')
var input = document.querySelector('.input')


var searchBtn = document.querySelector('.is-info');
var songInputEl = document.querySelector('#search');

var firstSong = document.querySelector('.firstSong')
var secondSong = document.querySelector('.secondSong')
var thirdSong = document.querySelector('.thirdSong')
var fourthSong = document.querySelector('.fourthSong')
var fifthSong = document.querySelector('.fifthSong')

var videoLocation = document.querySelector('.boxVideo')
var lyricsLocation = document.querySelector('.boxLyrics')



<<<<<<< HEAD

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
=======
>>>>>>> 988ee9d670bae00f8170eba68cd71f31e5e021fa
//onclick search button consol logs in the input box with place holder 'Search Song'
searchbutton.addEventListener('click', function (event) {
    console.log(input.value)
    event.preventDefault();
});


$(document).ready(function () {
    var youtubekey = 'AIzaSyDGxdfjPLDMkjD0Cvi9dU8d66Pv1SlJ08k'
    var video = ''
    $('#form').on('click', function (event) {
        event.preventDefault()
        console.log('clicked')
        var search = $('#search').val()
        videoSearch(youtubekey, search, 5)
        console.log(search.value)
    })
    function videoSearch(key, search, maxResults) {
        $('#videos').empty()
        $.get('https://www.googleapis.com/youtube/v3/search?key=' + key +
            '&type=video&part=snippet&maxResults=' + maxResults + '&q=' + search, function (data) {
                console.log(data)
                data.items.forEach(item => {
                    video = `
                <iframe class="has-ratio" width="640" height="360" src="https://www.youtube.com/embed/${item.id.videoId}" frameborder="0" 
                allowfullscreen></iframe>
                `
                    $('#videos').append(video)
                });
            })
    }
})

