const express = require("express");
const router = express.Router();

const albumsRouter = require("./albums");

router.use("/api/albums", albumsRouter);

module.exports = router;
