const db = require("../models");
const albumInfo = require("../config/albums.json");

module.exports = async () => {
  try {
    const connection = await db.sequelize.sync({ force: true });

    if (connection) {
      console.log("mySQL is connected");
    }

    await albumInfo.albums.forEach(async album => {
      const newAlbum = await db.Album.create({
        title: album.title,
        artist: album.artist,
        cover_url: album.cover_url,
        released_by: album.released_by,
        release_date: album.release_date,
      });

      album.tracks.forEach(track => {
        newAlbum.createTrack({
          title: track.title,
          track_url: track.track_url,
        });
      });
    });
  } catch (err) {
    console.error(err);
  }
};
