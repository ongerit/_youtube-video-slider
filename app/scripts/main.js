
$(document).ready(function () {
    'use strict';
    $('.arrow-right').bind('click', function (event) {
        event.preventDefault();
        $('.vid-list-container').stop().animate({
            scrollLeft: '+=336'
        }, 750);

    });
    $('.arrow-left').bind('click', function (event) {
        event.preventDefault();
        $('.vid-list-container').stop().animate({
            scrollLeft: '-=336'
        }, 750);
    });
});


//*YOUTUBE API*/

//function showResponse(response) {
//    var responseString = JSON.stringify(response,replacer);
//    document.getElementById('response').innerHTML += responseString;
//}

function showResponse(response) {
    var responseString = JSON.stringify(response,'', 4);
    //document.getElementById('response').innerHTML += responseString;

    document.getElementById("response").innerHTML +=responseString;

}


//function replacer(key,value){
//    if (typeof value==="string"){
//        return undefined;
//
//    return value;
//
//var jsonString = JSON.stringify(responseString,replacer)
//document.getElementById("test").innerHTML +=
//}

// Called automatically when JavaScript client library is loaded.
function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

// Called automatically when YouTube API interface is loaded (see line 9).
function onYouTubeApiLoad() {
    // This API key is intended for use only in this lesson.
    // See http://goo.gl/PdPA1 to get a key for your own applications.
    gapi.client.setApiKey('AIzaSyDOqhOmdW-QEmVfTvdHjG0i2_G4_D0c9JA');

    search();
}

function search() {
    // Use the JavaScript client library to create a search.list() API call.
    var request = gapi.client.youtube.search.list({
        part: 'snippet',

    });

    // Send the request to the API server,
    // and invoke onSearchRepsonse() with the response.
    request.execute(onSearchResponse);
}

// Called automatically with the response of the YouTube API request.
function onSearchResponse(response) {
    showResponse(response);

}

