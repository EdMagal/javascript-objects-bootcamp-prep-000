function createPlaylist(artistName, songTitle) {
  var obj = {[artistName]: songTitle};
  return obj;
}

var playlist = createPlaylist("Childish Gambino", "Redbone");

function updatePlaylist(playlist, artist, song) {
  return Object.assign(playlist, {
    [artist]: song
  });
}

function removeFromPlaylist(obj, artist){
  delete obj[artist];
  return obj;
}
