import React, { useState } from "react";
import NavTabs from "./NavTabs";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Porfolio";
import Test from "../assets/docs/Resume_KevinPhelps"

export default function Content() {
    const [currentPage, setCurrentPage] = useState("About");

    const renderPage = () => {
        if (currentPage === "Contact") {
            return <Contact />;
        }
        if (currentPage === "Portfolio") {
            return <Portfolio />;
        }
        return <About />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    );
}