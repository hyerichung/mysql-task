const createError = require("http-errors");

module.exports = function validate(validationSchema, property) {
  return (req, res, next) => {
    const { error } = validationSchema.validateAsync(req[property]);

    if (error) {
      const { details } = error;
      const message = details.map((i) => i.message).join(",");

      if (property === "params") {
        return next(createError(404, { message }));
      }

      return next(createError(422, { message }));
    } else {
      next();
    }
  };
};
