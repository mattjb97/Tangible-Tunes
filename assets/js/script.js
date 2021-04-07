
var searchbutton = document.querySelector('.is-info')
var input = document.querySelector('#search')
<<<<<<< HEAD
=======


var firstSong = document.querySelector('.firstSong')
var secondSong = document.querySelector('.secondSong')
var thirdSong = document.querySelector('.thirdSong')
var fourthSong = document.querySelector('.fourthSong')
var fifthSong = document.querySelector('.fifthSong')
>>>>>>> 673ebe418254d9362bd4cb4b8a60ac2383216ba6
var videoLocation = document.querySelector('.boxVideo')
var lyricsLocation = document.querySelector('.boxLyrics')






<<<<<<< HEAD


// Functions
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
    var apiUrl = 'https://api.musixmatch.com/ws/1.1/track.search?q_track=' + songTitle + '&page_size=5&s_track_rating=desc&apikey=6a4d09aa7c7bc21dd8f981caaf324cda';
    fetch(apiUrl).then (function(response){
            if (response.ok){
                response.json().then(function(currentData){
                    //console.log(currentData);
                    var songList=currentData.message.body.track_list;
                    //console.log(songList);
                    displayList(songList);
                });
            } else {
                alert('Error: ' + response.statusText);
            }
        })
        .catch(function (error) {
            alert('Unable to connect to MusiXmatch');
        });
};

function displayList (songArray){
    var appendEl = document.querySelector(".list-group");
    appendEl.innerHTML = ""; 
    for (var i=0; i< songArray.length; i++) {

        var liEl = document.createElement("li");

        liEl.addEventListener("click", apiFX(songArray[i].track.track_id, songArray[i].track.artist_name, songArray[i].track.track_name));

        liEl.textContent = "Artist: " + songArray[i].track.artist_name + " - Song: " + songArray[i].track.track_name;

        liEl.classList.add("list-group-item");

        appendEl.appendChild(liEl)[i];

    }
}
=======
// MusixMatch 'UT Student's' appid	6a4d09aa7c7bc21dd8f981caaf324cda

>>>>>>> 673ebe418254d9362bd4cb4b8a60ac2383216ba6

function apiFX(songID, songArtist, songName){
    var apiUrl2 = 'https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=' + songID + '&apikey=6a4d09aa7c7bc21dd8f981caaf324cda';

<<<<<<< HEAD
    console.log(apiUrl2);

    fetch(apiUrl2).then (function(response){
            if (response.ok){
                response.json().then(function(currentLyrics){
                    console.log(currentLyrics);
                    console.log(songArtist);
                    console.log(songName);
                    // var songList=currentData.message.body.track_list;
                    // console.log(songList);
                    // displayList(songList);
                });
            } else {
                alert('Error: ' + response.statusText);
            }
        })
        .catch(function (error) {
            alert('Unable to connect to MusiXmatch');
        });

}
=======

// searchbutton.addEventListener('click', function (event) {
//     console.log(input.value)
//     event.preventDefault();
// });


// $(document).ready(function () {
//     $('#form').on('click', function (event) {
//         event.preventDefault()
//         var search = $('#search').val()
//         getSongs(search)
//     })

//     function getSongs(songTitle) {
//         var apiUrl = 'https://api.musixmatch.com/ws/1.1/track.search?q_track=' + songTitle + '&page_size=5&s_track_rating=desc&apikey=6a4d09aa7c7bc21dd8f981caaf324cda';
//         fetch(apiUrl).then(function (response) {
//             if (response.ok) {
//                 response.json().then(function (currentData) {
//                     console.log(currentData);
//                     var songList = currentData.message.body.track_list;
//                     console.log(songList);
//                     displayList(songList);
//                 });
//             } else {
//                 alert('Error: ' + response.statusText);
//             }
//         })
//             .catch(function (error) {
//                 alert('Unable to connect to MusiXmatch');
//             });
//     };

//     function displayList(songArray) {
//         var appendEl = document.querySelector(".list-group");
//         appendEl.value = "";
//         for (var i = 0; i < songArray.length; i++) {
//             var appendEl = document.querySelector(".list-group");
//             var liEl = document.createElement("li");
//             liEl.textContent = "Artist: " + songArray[i].track.artist_name + " - Song: " + songArray[i].track.track_name;
//             liEl.classList.add("list-group-item");
//             $('.list-group').append(liEl)[i]
           

//         }

        
//     }
// });
>>>>>>> 673ebe418254d9362bd4cb4b8a60ac2383216ba6



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
                <iframe class="has-ratio" width="360" height="360" src="https://www.youtube.com/embed/${item.id.videoId}" frameborder="0" 
                allowfullscreen></iframe>
                `
                    $('#videos').append(video)
                });
            })
    }
})

