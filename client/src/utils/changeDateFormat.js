import { format } from "date-fns";

const changeDateFormat = (date) => {
  const [year, month, day] = date.split("-");
  return format(new Date(year, month, day), "yyyy MMM dd");
};

export default changeDateFormat;
