import React from "react";
import { Outlet } from "react-router-dom";
import "./home.css";
export const HomePage: React.FunctionComponent<unknown> = () => {
    return (
        <div>
           <header className="header">
                <div className="wrapper site-header__wrapper">
                    <a href="#" className="">
                        <img src="../../assets/icons/logo.svg" alt="brand" className="logo"></img>
                    </a>
                    <nav className="nav"></nav>
                </div>
            </header> 
            <div className="content">
                <Outlet></Outlet>
            </div>
            <footer></footer>
        </div>
       
    )

}