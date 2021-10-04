import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
    return (
        <div className="container row align-items-center my-5">
            <div className="col-lg-3">
               <h1>Kevin Phelps</h1>
            </div>
            <div className="col-lg-3">
                <h5>(734)-972-0619</h5>
                <h5>kjphelps90@gmail.com</h5>
                <h5>Github <a href="https://github.com/kjphelps90">kjphelps90</a></h5>
            </div>
            <div className="col-lg-6">
            </div>
        </div>
    )
}