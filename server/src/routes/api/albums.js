const express = require("express");
const validate = require("../middlewares/validate");
const { albumIdParamsSchema } = require("../../utils/validationSchema");

const router = express.Router();

router.get(
  "/",
  async (req, res, next) => {
    try {
      console.log("all albums");
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  "/:album_id",
  validate(albumIdParamsSchema, "params"),
  async (req, res, next) => {
    try {
      const { album_id } = req.params;

      console.log(album_id);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
