const express = require("express");
const morgan = require("morgan");

const router = require("./routes");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1", router);

const PORT = process.env.PORT || 3005;

app.listen(PORT, () => {
  console.log(`Server is up and listen on port ${PORT}`);
});
