import { Outlet, Link } from "react-router-dom";
import React, { useCallback, useEffect, useState } from "react";


const Layout = () => {
    return (
        <div>
            <nav className="Navbar">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/User">User</Link>
                    </li>
                    <li>
                        <Link to="/AdminPage">AdminPage</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
            <br>
        </br>
        </div>

    )
};

export default Layout;