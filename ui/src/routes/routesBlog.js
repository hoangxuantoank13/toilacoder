import React from "react";
import { Redirect } from "react-router-dom";
// Layout Types
import { BlogLayout } from "../layouts";
import BlogDetailsLeftSidebar from '../views/blog/BlogDetailsLeftSidebar';
import BlogLeftSidebar from '../views/blog/BlogLeftSidebar';
import About from '../views/blog/About';
import Contact from '../views/blog/Contact';

// Route Views


export default [
  {
    path: "/",
    exact: true,
    layout: BlogLayout,
    component: () => <Redirect to="/home" />
  },
  {
    path: "/home",
    layout: BlogLayout,
    component: BlogLeftSidebar
  },
  {
    path: "/blog-details",
    layout: BlogLayout,
    component: BlogDetailsLeftSidebar
  },
  {
    path: "/about-us",
    layout: BlogLayout,
    component: About
  },
  {
    path: "/contact-us",
    layout: BlogLayout,
    component: Contact
  }
];
