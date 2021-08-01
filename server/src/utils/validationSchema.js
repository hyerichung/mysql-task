const Joi = require("@hapi/joi");

exports.albumIdParamsSchema = Joi.object({
  album_id: Joi.string().required(),
});
