import PostMessage from "../models/postMessageModel.js";

const GET_posts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages);
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: error.message });
    }
}

const POST_post = async (req, res) => {
    const post = req.body;
    const newPost = new PostMessage(post);

    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
    res.send("POST_post")
}

export { 
    GET_posts,
    POST_post,
}