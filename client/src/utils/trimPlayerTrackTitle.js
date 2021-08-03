const trimPlayerTrackTitle = (title) => {
  return title.length > 26 ? title.substr(0, 23) + "..." : title;
};

export default trimPlayerTrackTitle;
