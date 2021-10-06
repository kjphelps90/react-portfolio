import React from "react";

export default function NavTabs({ currentPage, handlePageChange}) {
    return (
        <div className="container justify-content-center">
        <ul className="justify-content-center nav nav-tabs">
            <li className="nav-item mx-4 px-2 fs-5 fw-bold">
            <a
                href="#about"
                onClick={() => handlePageChange("About")}
                className={currentPage === "About" ? "nav-link active" : "nav-link"}
            >About Me</a>
            </li>
            <li className="nav-item mx-4 px-2 fs-5 fw-bold">
            <a
                href="#portfolio"
                onClick={() => handlePageChange("Portfolio")}
                className={currentPage === "Portfolio" ? "nav-link active" : "nav-link"}
            >Portfolio</a>
            </li>
            <li className="nav-item mx-4 px-2 fs-5 fw-bold">
            <a
                href="#contact"
                onClick={() => handlePageChange("Contact")}
                className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
            >Contact</a>
            </li>
            <li className="nav-item mx-4 px-2 fs-5 fw-bold">
            <a
                className="nav-link"
                href=".\..\..\public\files\resume\Resume_KevinPhelps.pdf" download
            >Resume</a>
            </li>
        </ul>
    </div>
    )
}