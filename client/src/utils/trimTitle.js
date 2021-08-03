const trimTitle = (title, maxLength) => {
  return title.length > maxLength ? title.substr(0, maxLength - 3) + "..." : title;
};

export default trimTitle;
