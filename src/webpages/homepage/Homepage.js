import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"

const Home = () => {

    return(
        <div className="d-flex justify-content-center align-items-center flex-column masterDiv">
            <h1 className="headText">Welcome to Code Quiz App 3 😁</h1>
            <p className="text">this is the third iteration of my code quiz app this version is more streamlined and will have much more advance features and game modes. I hope you enjoy</p>
            <button>start</button>
        </div>
    )
}
export default Home;