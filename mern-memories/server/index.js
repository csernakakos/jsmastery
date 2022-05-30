import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import postsRoutes from "./routes/postsRoutes.js";

dotenv.config({});
const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;

const app = express();

app.use("/posts", postsRoutes);

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

mongoose
    .connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server listening on ${PORT}...`)))
    .catch((error) => console.log(error.message));

mongoose.set(`useFindAndModify`, false);
