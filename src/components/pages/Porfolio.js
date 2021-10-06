import React from "react";
import Astro from "../../assets/images/astonomy_world.png";
import Weather from "../../assets/images/weather_dashboard.png";
import Planner from "../../assets/images/daily_planner.png";
import Quiz from "../../assets/images/quizbowl.png";


export default function Portfolio() {
    return (
        <div className="container my-5">
            <h1 className="my-3">Portfolio</h1>
            <div className="container">
                <div className="row justify-content-around">
            <span className="col-12 col-md-5 m-2" data-desc="Astro World">
                <a href="https://kjphelps90.github.io/NASA-daily-astronomy/" target="_blank" rel="noreferrer"><img className="my-3 border border-dark" src={Astro} alt="astronomy world site" width="305" height="210"/></a>
            </span>
            <span className="col-12 col-md-5 m-2 border-dark" data-desc="Weather Dashboard">
                <a href="https://kjphelps90.github.io/weather-dashboard/" target="_blank" rel="noreferrer"><img className="my-3 border border-dark" src={Weather} alt="preview of weather-dashboard" width="305" height="210"/></a>
            </span>
            <span className="col-12 col-md-5 m-2" data-desc="Daily Planner"> 
                <a href="https://kjphelps90.github.io/daily-planner/" target="_blank" rel="noreferrer"><img className="my-3 border border-dark" src={Planner} alt="preview of daily planner" width="305" height="210"/></a>
            </span>
            <span className="col-12 col-md-5 m-2" data-desc="Quiz Bowl"> 
                <a href="https://kjphelps90.github.io/QuizBowl/" target="_blank" rel="noreferrer"><img className="my-3 border border-dark" src={Quiz} alt="preview of QuizBowl site" width="305" height="210"/></a>
            </span>
            </div>
            </div>
        </div>
    );
}