// this works
export const sortArtists = (artists) => {
  const sorted = artists.sort((a,b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    }
    if (b.name.toLowerCase() < a.name.toLowerCase()) {
      return 1;
    }
    return 0;
  });
  
  return sorted;
};

// this doesn't for some reason
export const sortAlbums = (albums) => {
  const sorted = albums.sort((a,b) => {
    if (a.artists[0].name.toLowerCase() < b.artists[0].name.toLowerCase()) {
      return -1;
    }
    if (b.artists[0].name.toLowerCase() < a.artists[0].name.toLowerCase()) {
      return 1;
    }
    return 0;
  });
  
  return sorted;
};

export const convertSong = (song) => {
  song.audioUrl = `/api/songs/${song.id}/audio`;
  return song;
};

export const convertSongs = (songs) =>
  songs.map(song => convertSong(song));

export const convertAlbum = (album) => {
  album.imageUrl = `/api/albums/${album.id}/image`;
  album.songs = album.songs.map(convertSong);
  return album;
};

export const convertAlbums = (albums) =>
  albums.map(album => convertAlbum(album));

const mod = (num, m) => ((num % m) + m) % m;

export const skip = (interval, { currentSongList, currentSong }) => {
  let idx = currentSongList.map(song => song.id).indexOf(currentSong.id);
  idx = mod(idx + interval, currentSongList.length);
  const next = currentSongList[idx];
  return [next, currentSongList];
};
