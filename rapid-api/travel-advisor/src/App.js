import {useState, useEffect} from "react";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import {getPlacesData} from "./api/index";

import { CssBaseline, Grid } from "@material-ui/core";

export default function App() {

    const [places, setPlaces] = useState([]);
    const [coordinates, setCoordinates] = useState({});
    const [bounds, setBounds] = useState({});
    const [childClicked, setChildClicked] = useState(null);
    const [type, setType] = useState("restaurants");
    const [rating, setRating] = useState(0);

    const [isLoading, setIsLoading] = useState(false);

    // Get user coordinates from the browser's built-in gelococation API
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude }}) => {
            setCoordinates({ lat: latitude, lng: longitude })
        });
    }, []);
    
    // Get data from RapidAPI endpoint
    useEffect(() => {
        setIsLoading(true);
        getPlacesData(bounds.sw, bounds.ne)
            .then((data) => {
                console.log(data, "<<<");
                setPlaces(data);
                setIsLoading(false);
            })
    }, [coordinates, bounds])

    return (
        <>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{width: "100%"}}>
                <Grid item xs={12} md={4}>
                    <List 
                        places={places}
                        childClicked={childClicked}
                        isLoading={isLoading}
                        type={type}
                        setType={setType}
                        rating={rating}
                        setRating={setRating}
                    />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map
                        setCoordinates={setCoordinates}
                        setBounds={setBounds}
                        coordinates={coordinates}
                        places={places}
                        setChildClicked={setChildClicked}
                    />
                </Grid>
            </Grid>
        </> 
    )
};