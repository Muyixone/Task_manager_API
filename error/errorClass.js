class customAPIError extends Error {
  constructor(code) {
    super();
    this.code = code;
  }
}

module.exports = customAPIError;
