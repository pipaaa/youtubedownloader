function downloadVideo() {
 var videoURL = document.getElementById('videoURL').value;
 var videoID = getYoutubeVideoID(videoURL);
  
 if (videoID) {
    var downloadLink = document.getElementById('downloadLink');
    downloadLink.href = 'https://www.y2mate.com/mates/mp4/' + videoID;
    downloadLink.click();
 } else {
    alert('Please enter a valid Youtube video URL');
 }
}

function getYoutubeVideoID(url) {
 var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
 var match = url.match(regExp);
  
 if (match && match[2].length == 11) {
    return match[2];
 } else {
    return null;
 }
}
