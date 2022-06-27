import express from "express";
import { GET_posts, POST_post, UPDATE_post, DELETE_post } from "../controllers/postsControllers.js";
const router = express.Router();


router
    .route("/")
    .get(GET_posts)
    .post(POST_post)

router
    .route("/:id")
    .patch(UPDATE_post)
    .delete(DELETE_post)


export default router;