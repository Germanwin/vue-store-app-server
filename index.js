const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8078;

const productRouter = require("./routs/product.router");

app.use(express.json());
app.use(cors());

app.use("/api", productRouter);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
