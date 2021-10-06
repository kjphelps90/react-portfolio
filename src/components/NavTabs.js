import React from "react";
import Resume from "../assets/docs/Resume_KevinPhelps.pdf"

export default function NavTabs({ currentPage, handlePageChange}) {
    return (
        <div className="container justify-content-center">
        <ul className="justify-content-center nav nav-tabs">
            <li className="nav-item mx-4 px-2 fs-5 fw-bold">
            <a
                href="#about"
                onClick={() => handlePageChange("About")}
                className={"orange"}
            >About Me</a>
            </li>
            <li className="nav-item mx-4 px-2 fs-5 fw-bold">
            <a
                href="#portfolio"
                onClick={() => handlePageChange("Portfolio")}
                className={"orange"}
            >Portfolio</a>
            </li>
            <li className="nav-item mx-4 px-2 fs-5 fw-bold">
            <a
                href="#contact"
                onClick={() => handlePageChange("Contact")}
                className={"orange"}
            >Contact</a>
            </li>
            <li className="nav-item mx-4 px-2 fs-5 fw-bold">
            <a
                className="orange"
                href= {Resume} download
            >Resume</a>
            </li>
        </ul>
    </div>
    )
}