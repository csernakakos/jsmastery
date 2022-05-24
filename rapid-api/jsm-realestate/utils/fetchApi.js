import axios from "axios";

export const baseURL = "https://bayut.p.rapidapi.com"

export const fetchApi = async (URL) => {
    const { data } = await axios.get((URL), {
        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
        }
    })

    return data;
}