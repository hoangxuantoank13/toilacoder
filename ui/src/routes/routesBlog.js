import React from "react";
import { Redirect } from "react-router-dom";
// Layout Types
import { BlogLayout } from "../layouts";
// import BlogDetailsLeftSidebar from '../views/blog/BlogDetailsLeftSidebar';
import BlogLeftSidebar from '../views/blog/BlogLeftSidebar';

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
  }
];
