import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "../layouts";

// Route Views
import BlogOverview from '../views/admin/BlogOverview';
import UserProfileLite from '../views/admin/UserProfileLite';
import AddNewPost from '../views/admin/AddNewPost';
import Errors from '../views/admin/Errors';
import ComponentsOverview from '../views/admin/ComponentsOverview';
import Tables from '../views/admin/Tables';
import BlogPosts from '../views/admin/BlogPosts';

export default [
  {
    path: "/",
    layout: DefaultLayout,
    component: BlogOverview
  }
];
