const db = require("../models");

exports.getAllAlbums = async (req, res, next) => {
  try {
    const albums = await db.Album.findAll();
    const tracks = await db.Track.findAll();

    const albumData = albums.map(album => ({
      id: album.id,
      title: album.title,
      artist: album.artist,
      cover_url: album.cover_url,
      released_by: album.released_by,
      release_date: album.release_date,
    }));

    const trackData = {};

    tracks.forEach(track => {
      if (trackData[track.AlbumId] === undefined) {
        trackData[track.AlbumId] = [];
      }

      trackData[track.AlbumId] = [
        ...trackData[track.AlbumId],
        { id: track.id, title: track.title, track_url: track.track_url }
      ];
    });

    return res.json({
      result: "ok",
      data: {
        albums: albumData,
        tracks: trackData,
      },
    });
  } catch (err) {
    next(err);
  }
};
