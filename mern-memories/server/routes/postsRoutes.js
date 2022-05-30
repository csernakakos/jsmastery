import express from "express";
import { GET_posts } from "../controllers/postsControllers.js";
const router = express.Router();


router
    .route("/")
    .get(GET_posts)


export default router;