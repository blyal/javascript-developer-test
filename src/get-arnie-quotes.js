const { httpGet } = require("./mock-http-interface");

const getArnieQuotes = async (urls) => {
  const responses = await Promise.all(urls.map(httpGet));
  return responses.map(formatResult);
};

const formatResult = ({ status, body }) => {
  const msg = JSON.parse(body).message;
  return status === 200 ? { "Arnie Quote": msg } : { FAILURE: msg };
};

module.exports = {
  getArnieQuotes,
};
