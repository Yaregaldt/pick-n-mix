const dayjs = require("dayjs");

const format_date = () => {
  return dayjs().format("dddd, MMMM D");
};

module.exports = { format_date };
