import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import { UserRouter } from "./routes/Users.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", UserRouter);

mongoose.connect(
  "mongodb+srv://sanjayvjacob:MERNOgNxb1122@recipes.1spfmgm.mongodb.net/recipes?retryWrites=true&w=majority&appName=recipes"
);

app.listen(5174, () => console.log("SERVER STARTED"));
