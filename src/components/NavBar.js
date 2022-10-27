import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

function NavBar() {
  return (
    <header className="bg-red-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex items-center">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inflex-flex items-center text-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
          >
            Matt
          </NavLink>
          <NavLink
            to="/post"
            activeClassName="text-red-100 bg-red-700"
            className="inline-flex items-center p-3 my-6 rounded text-red-200 hover:text-green-800"
          >
            Blog Post
          </NavLink>
          <NavLink
            to="/project"
            activeClassName="text-red-100 bg-red-700"
            className="inline-flex items-center p-3 my-6 rounded text-red-200 hover:text-green-800"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about-me"
            activeClassName="text-red-100 bg-red-700"
            className="inline-flex items-center p-3 my-6 rounded text-red-200 hover:text-green-800"
          >
            About Me!
          </NavLink>
        </nav>
        <div className="inline-flex p-3 my-6 space-x-4">
          <SocialIcon
            url="https://twitter.com/matt_uribb"
            target="_blank"
            fgColor="#fff"
            style={{ width: 35, height: 35 }}
            className="hover:-translate-y-1 transition-transform"
          />
          <SocialIcon
            url="https://github.com/mateouribe"
            target="_blank"
            fgColor="#fff"
            style={{ width: 35, height: 35 }}
            className="hover:-translate-y-1 transition-transform"
          />
          <SocialIcon
            url="https://www.linkedin.com/in/mateo-arismendy-uribe-b77377221/"
            target="_blank"
            fgColor="#fff"
            style={{ width: 35, height: 35 }}
            className="hover:-translate-y-1 transition-transform"
          />
        </div>
      </div>
    </header>
  );
}

export default NavBar;
