import React from "react";
import MainLayoutStyles from "./MainLayout.modules.css"
import { NavLink, Outlet } from "react-router-dom";
const MainLayout = () => {
    return (
    <>
        <header>
            <nav>
            <ul className={MainLayoutStyles.ulList}>
                <NavLink to="/" className={MainLayoutStyles.liItem}>Home</NavLink>
                <NavLink to="/about" className={MainLayoutStyles.liItem}>Catalog</NavLink>
                <NavLink to="/blog" className={MainLayoutStyles.liItem}>Blog</NavLink>
            </ul>
            </nav>
        </header>
        <main>
            <Outlet/> 
        </main>
        <footer>
            <h2>Footer Block</h2>
        </footer>
    </>
    )
    
}

export default MainLayout;