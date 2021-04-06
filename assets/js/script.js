var searchbutton = document.querySelector('.is-info')
var input = document.querySelector('#search')


//onclick search button consol logs in the input box with place holder 'Search Song'
searchbutton.addEventListener('click', function (event) {
    console.log(input.value)
    event.preventDefault()
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

