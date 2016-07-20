
var dcopy = require('deep-copy')


module.exports = (headers) => {
  headers = dcopy(headers)

  function name (header) {
    for (var name in headers) {
      if (name.toLowerCase() === header.toLowerCase()) {
        return name
      }
    }
  }
  function value (header) {
    for (var name in headers) {
      if (name.toLowerCase() === header.toLowerCase()) {
        return headers[name]
      }
    }
  }

  return {
    get: (header) => value(header),

    set: (header, value) => (headers[name(header) || header] = value),

    remove: (header) => delete headers[name(header)],

    all: () => dcopy(headers)
  }
}
