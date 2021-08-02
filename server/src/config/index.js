require("dotenv").config();
const env = process.env;

env.NODE_ENV = env.NODE_ENV || "development";

module.exports = {
  port: normalizePort(env.PORT || "5000"),
  s3: {
    bucketName: process.env.AWS_BUCKET_NAME,
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
};

/**
  * Normalize a port into a number, string, or false.
  */

function normalizePort(val) {
  let port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}
