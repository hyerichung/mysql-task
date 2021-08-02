const express = require("express");
const router = express.Router();

const albumController = require("../../controllers/albumsController");

router.get("/", albumController.getAllAlbums);

module.exports = router;
