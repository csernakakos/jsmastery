import express from "express";
import { GET_posts, POST_post } from "../controllers/postsControllers.js";
const router = express.Router();


router
    .route("/")
    .get(GET_posts)
    .post(POST_post)


export default router;