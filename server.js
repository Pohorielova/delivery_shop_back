// const app = require("./app");
// require("dotenv").config();
// const { connectMongo } = require("./db/connections");

// const start = async () => {
//   await connectMongo();
//   app.listen((process.env.PORT = 5000), () => {
//     console.log(`Server running. Use our API on port: ${process.env.PORT}`);
//   });
// };
// start();

const mongoose = require("mongoose");
const app = require("./app");

const { DB_HOST, PORT = 5000 } = process.env;

async function startServer() {
  try {
    await mongoose.connect(DB_HOST);
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  } catch (error) {
    console.error(`Error connecting to the database: ${error.message}`);
    process.exit(1);
  }
}

startServer();
