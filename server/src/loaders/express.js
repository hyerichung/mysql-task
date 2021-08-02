const cookieParser = require("cookie-parser");
const createError = require("http-errors");
const express = require("express");
const cors = require("cors");

module.exports = function ({ app, routerLoader, dbLoader }) {
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(cors());

  routerLoader({ app });
  dbLoader();

  app.use(function (req, res, next) {
    next(createError(404));
  });

  app.use(function (err, req, res) {
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    res.status(err.status || 500).json({ result: "error", "errMessage": err.message });
  });
};
