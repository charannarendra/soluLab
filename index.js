const express = require("express");
const app = express();
const bodyparser = require("body-parser");
app.use(bodyparser.json());
require("./models/config");
const commonRoutes = require("./routes/commonRoutes");

app.use("/", commonRoutes);

const server = app.listen(process.env.PORT, () => {
  console.log(`Server in running on port No ${process.env.PORT}`);
});

module.exports=server
