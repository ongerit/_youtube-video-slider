$(document).ready(function () {
    function sliderArrows() {
        $(".arrow-right").bind("click", function (event) {
            event.preventDefault();
            $(".vid-list-container").stop().animate({
                scrollLeft: "+=336"
            }, 750);
        });
        $(".arrow-left").bind("click", function (event) {
            event.preventDefault();
            $(".vid-list-container").stop().animate({
                scrollLeft: "-=336"
            }, 750);
        });
        
    };

    function introApi() {
        var playListURL = 'https://gdata.youtube.com/feeds/api/playlists/PL5F394CB9AB8A3519?v=2&alt=json&callback=?';
        var videoURL = 'https://www.youtube.com/watch?v=';
        $.getJSON(playListURL, function (data) {
            var list_data = "";
            $.each(data.feed.entry, function (i, item) {
                var feedTitle = item.title.$t;
                var feedURL = item.link[1].href;
                var fragments = feedURL.split("/");
                var videoID = fragments[fragments.length - 2];
                var url = videoURL + videoID;
                var thumb = "https://img.youtube.com/vi/" + videoID + "/1.jpg";
                var videoSwitch = 'onClick=document.getElementById("vid_frame").src="https://youtube.com/embed/' + videoID + '?autoplay=1&rel=0&showinfo=0&autohide=1"';
                list_data += '<li class="vid-item" ' + videoSwitch + '><div class="thumb"><img alt="' + feedTitle + '" src="' + thumb + '"> </div><div class="desc">' + feedTitle + '</li>';
            });
            
            $(".vid-list").empty();
            $(list_data).appendTo(".vid-list").fadeIn( "slow" );
            
        });
    };
    
    //function for scrolling to anchor
    
    function yApi() {
    var playListURL = 'https://gdata.youtube.com/feeds/api/playlists/'+playlistId+'?v=2&alt=json&callback=?&max-results=10';
    var videoURL = 'https://www.youtube.com/watch?v=';
    $.getJSON(playListURL, function (data) {
        var list_data = "";
        $.each(data.feed.entry, function (i, item) {
            var feedTitle = item.title.$t;
            var feedURL = item.link[1].href;
            var fragments = feedURL.split("/");
            var videoID = fragments[fragments.length - 2];
            var url = videoURL + videoID;
            var thumb = "https://img.youtube.com/vi/" + videoID + "/1.jpg";
            var videoSwitch = 'onClick=document.getElementById("vid_frame").src="https://youtube.com/embed/' + videoID + '?autoplay=1&rel=0&showinfo=0&autohide=1"';
            list_data += '<li class="vid-item uk-animation-scale-up" ' + videoSwitch + '><div class="thumb"><img alt="' + feedTitle + '" src="' + thumb + '"> </div><div class="desc">' + feedTitle + '</li>';
        });
        
        $(".vid-list").empty();
        $(list_data).appendTo(".vid-list").fadeIn( "slow" );
        
    });
};




//Restart Vid Container

        function restart() {
            //scroll to the top
            $('html, body').animate({
                scrollTop: $("#vid_frame").offset().top
            }, 1500);
            //restarts the player
            $(".vid-list-container").stop().animate({
                scrollLeft: "-=10036"
            }, 750);
        }

        var playlistId;
        $('#p1').click(function(){
            restart() 
            showList = true;
            playlistId= 'PL5F394CB9AB8A3519';
            yApi(playlistId);
            
            
        });
    
        $('#p2').click(function(){
            restart() 
            showList = true;
            playlistId= 'PLE9LPsE6cZ1YZW3Ev2JfKFzQUdPuMhdEl';
            yApi(playlistId);
            
        });
        
        $('#p3').click(function(){
            restart() 
            showList = true;
            playlistId= 'PLEpfh9jiEpYQJWMW2EF2PgCBhz2SQu6Ld';
            yApi(playlistId);
            
        });

    introApi();
    sliderArrows();
    
   $('.arrows').fadeIn(3000);
});


/*  Scrollspy
############################### */
