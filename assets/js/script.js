var searchbutton = document.querySelector('.is-info')
var input = document.querySelector('.input')
const youtubekey = 'AIzaSyDGxdfjPLDMkjD0Cvi9dU8d66Pv1SlJ08k'

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

