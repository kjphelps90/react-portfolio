import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
    return (
        <div className="container">
            <div className="md-col-3">
               <h1>Kevin Phelps</h1>
            </div>
            <div className="md-col-3">
                <h3>(734)-972-0619</h3>
                <h3>kjphelps90@gmail.com</h3>
                <h3>Github <a href="https://github.com/kjphelps90">kjphelps90</a></h3>
            </div>
            <div className="md-col-6">
            </div>
        </div>
    )
}