import express from "express";
import { MONGODBURL, PORT } from "./config.js";
import mongoose from "mongoose";
import cors from "cors";
import usersRoute from "./routes/userRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("All good from here");
});

app.use("/users", usersRoute);

mongoose
  .connect(MONGODBURL)
  .then(() => {
    console.log("App connected to DB");
    app.listen(PORT, () => {
      console.log("App listening on port:", PORT);
    });
  })
  .catch((e) => {
    console.log(e);
  });
