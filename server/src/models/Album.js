module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define("Album", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    artist: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cover_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    released_by: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    release_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  });

  Album.associate = models => {
    Album.hasMany(models.Track, {
      onDelete: "cascade",
    });
  };

  return Album;
};
