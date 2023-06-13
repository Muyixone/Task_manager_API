const notFound = (req, res, next) => {
  res.status(404).send(`<h1>404</h1><br/> <p> PageNot Found</p>`);
};

module.exports = notFound;
