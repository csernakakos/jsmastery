import * as api from "../api";

// api.fetchPosts()
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({ type: "FETCH_ALL", payload: data});
    } catch (error) {
        console.log(error);
    }
}

// api.createPost()
export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({ type: "CREATE", payload: data });
    } catch (error) {
        console.log(error);
    }
}

// api.updatePost()
export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);
        dispatch({ type: "UPDATE", payload: data });
    } catch (error) {
        console.log(error);
    }
}

// api.deletePost()
export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);
        dispatch({ type: "DELETE", payload: id});
    } catch (error) {
        console.log(error);
    }
}