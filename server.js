const app = require("./app");
require("dotenv").config();
const { connectMongo } = require("./db/connections");

const start = async () => {
  await connectMongo();
  app.listen((process.env.PORT = 5000), () => {
    console.log(`Server running. Use our API on port: ${process.env.PORT}`);
  });
};
start();
