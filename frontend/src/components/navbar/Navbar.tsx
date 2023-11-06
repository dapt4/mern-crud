import React, { ReactElement } from "react";
import {Link} from "react-router-dom"

export default function Navbar(): ReactElement | null {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        VideoApp
      </Link>
      <div className="ml-auto" id="navbarNav">
        <ul className="navbar-nav ">
          <li className="nav-item">
            <Link className="nav-link" to="/newvideo">
              Create New Video
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
