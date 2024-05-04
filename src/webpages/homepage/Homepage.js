import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const Home = () => {
  const navigate = useNavigate();
  function menu() {
    navigate("Dashboard");
  }

  return (
    <>
      <div className="d-flex  align-items-center flex-column masterDiv">
        <h1 className="headText">Code Quiz 3</h1>
        <div className="Difficulty"></div>
        {/* <p className="text">This is the third iteration of my code quiz app this version is more streamlined and will have much more advance features and game modes. I hope you enjoy</p> */}
        <form className="gameMode border mt-5">
          <input
            type="button"
            className="btn custom-btn"
            value="Start"
            onClick={menu}
          />
          <input
            type="button"
            className="btn custom-btn"
            value="Start"
            onClick={menu}
          />
          <input
            type="button"
            className="btn custom-btn"
            value="Start"
            onClick={menu}
          />
          <input
            type="button"
            className="btn custom-btn"
            value="Start"
            onClick={menu}
          />
        </form>
      </div>
    </>
  );
};
export default Home;
