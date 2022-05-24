const express = require("express");
const request = require("request-promise");
require("dotenv").config({});

const app = express();
const PORT = process.env.PORT || 5000;

const generateScraperURL = (api_key) => `http://api.scraperapi.com?api_key=${api_key}&autoparse=true`;


app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome!");
});

app.get("/products/:productID", async (req, res) => {
    const { productID } = req.params;
    const { api_key } = req.query;
    const amazonURL = "https://www.amazon.com/dp";

    try {
        const response = await request(`${generateScraperURL(api_key)}&url=${amazonURL}/${productID}`);
        res.json(JSON.parse(response));
    } catch (error) {
        console.log(error);
    }
});

app.get("/products/:productID/reviews", async (req, res) => {
    const { productID } = req.params;
    const { api_key } = req.query;
    const amazonURL = "https://www.amazon.com/product-reviews";

    try {
        const response = await request(`${generateScraperURL(api_key)}&url=${amazonURL}/${productID}`);
        res.json(JSON.parse(response));
    } catch (error) {
        console.log(error);
    }
});

app.get("/products/:productID/offers", async (req, res) => {
    const { productID } = req.params;
    const { api_key } = req.query;
    const amazonURL = "https://www.amazon.com/gp/offer-listing";

    try {
        const response = await request(`${generateScraperURL(api_key)}&url=${amazonURL}/${productID}`);
        res.json(JSON.parse(response));
    } catch (error) {
        console.log(error);
    }
});

app.get("/search/:searchQuery", async (req, res) => {
    const { searchQuery } = req.params;
    const { api_key } = req.query;
    const amazonURL = "https://www.amazon.com/s";
    try {
        const response = await request(`${generateScraperURL(api_key)}&url=${amazonURL}?k=${searchQuery}`);
        res.json(JSON.parse(response));
    } catch (error) {
        console.log(error);
    }
});

app.listen(PORT, () => console.log(`listening to amazon-scraper on ${PORT}...`));
