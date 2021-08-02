module.exports = (sequelize, DataTypes) => {
  const Track = sequelize.define("Track", {
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
    track_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Track.associate = models => {
    Track.belongsTo(models.Album, {
      onDelete: "cascade",
    });
  };

  return Track;
};
