const errorCodes = require('../error/errorCodes');

const errorHandler = (err, req, res, next) => {
  //Get the error from the errorConstructorAPI
  // if the error is not an instance of custom error,
  // then return the default error with status code 500

  const code = (err && err.code) || null;
  const error = errorCodes[code] || errorCodes['INTERNAL_ERROR'];

  return res.status(error.statusCode).json({ msg: error.message });
};

module.exports = errorHandler;
