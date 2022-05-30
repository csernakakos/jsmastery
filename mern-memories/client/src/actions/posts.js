import * as api from "../api";

api.fetchPosts;

const getPosts = () => async (dispatch) => {
    const action = { type: "FETCH_ALL", payload: []};

    dispatch(action);
}