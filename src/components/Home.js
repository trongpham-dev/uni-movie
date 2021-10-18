import React, { useState } from "react";
//config
import {POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from "../config";
//Components

//Hooks

//Image
import NoImage from "../images/no_image.jpg";

const Home = () => {
    //this is state that will hold  all the movies
    const [state, setState] = useState();
    //this is state for loading
    const [loading, setLoading] = useState(false);
    //this state will be used if we recive an error
    const [error, setError] = useState(false);

    return <div>Home Page</div>
}

export default Home;