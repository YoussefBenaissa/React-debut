import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../components/Logo";

const Navigation = () => {
    return (
        <div className="navigation">
            <Logo/>
            <NavLink exact to="/" activeClassName="nav-active">
                Accueil
            </NavLink>
            <NavLink exact to="/a-propos" activeClassName="nav-active">
                A propos
            </NavLink>

        </div>
    );
};
export default Navigation;