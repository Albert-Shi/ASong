/**
 * Created by shishuheng on 16-5-28.
 */
var SongNames = new Array();
var Artists = new Array();
var AlbumNames = new Array();
var AlbumPic = new Array();
var AudioUrl = new Array();
function SearchMusic(string) {
    var surl = "http://s.music.163.com/search/get/?src=lofter&type=1&limit=1&offset=0&s=" + string;
//            var surl = "cs.json";
    $.ajax({
        url:surl,
        dataType:'jsonp',
        data:'',
        jsonp:'callback',
        success:function(data) {
            if(data.result.songs != "") {
                var artisttemp = "";
                for (var i = 0; i < data.result.songs.length; i++) {
                    SongNames[i] = data.result.songs[i].name;
                    for (var j = 0; j < data.result.songs[i].artists.length; j++) {
                        artisttemp += data.result.songs[i].artists[j].name + " ";
                    }
                    Artists[i] = artisttemp;
                    AlbumNames[i] = data.result.songs[i].album.name;
                    AlbumPic[i] = data.result.songs[i].album.picUrl;
                    AudioUrl[i] = data.result.songs[i].audio;
                }
                /*
                 document.write("<h4>" + SongNames[0] + "</h4>");
                 document.write("<h4>" + AlbumNames[0] + "</h4>");
                 document.write("<h4>" + Artists[0] + "</h4>");
                 document.write("<h4>" + AlbumPic[0] + "</h4>");
                 document.write("<h4>" + AudioUrl[0] + "</h4>");
                 */
//                document.getElementById("mainbody").className = 'blur';
                document.getElementById("blurimg").src = AlbumPic[0];
                document.getElementById("clearimg").src=AlbumPic[0];
                document.getElementById("TextBody").innerHTML = "<br/><br /><h1 align='center'>" + SongNames[0] + "</h1><h3 align='center'>" + AlbumNames[0] + "</h3><h3 align='center'>" + Artists[0] + "</h3>";
                document.getElementById("playaudio").src = AudioUrl[0];
            }
            else{
                alert("Couldn't find Anything!");
            }
        }
    });
}