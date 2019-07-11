// Layout Types
import { AdminLayout } from "../layouts";

// Route Views
import BlogOverview from '../views/admin/BlogOverview';
import UserProfileLite from '../views/admin/UserProfileLite';
import AddNewPost from '../views/admin/AddNewPost';
import Errors from '../views/admin/Errors';
import ComponentsOverview from '../views/admin/ComponentsOverview';
import Tables from '../views/admin/Tables';
import BlogPosts from '../views/admin/BlogPosts';

const BASE_PATH = process.env.REACT_APP_ADMIN_PATH
export default [
  {
    path: BASE_PATH + "/blog-overview",
    layout: AdminLayout,
    component: BlogOverview
  },
  {
    path: BASE_PATH + "/user-profile-lite",
    layout: AdminLayout,
    component: UserProfileLite
  },
  {
    path: BASE_PATH + "/add-new-post",
    layout: AdminLayout,
    component: AddNewPost
  },
  {
    path: BASE_PATH + "/errors",
    layout: AdminLayout,
    component: Errors
  },
  {
    path: BASE_PATH + "/components-overview",
    layout: AdminLayout,
    component: ComponentsOverview
  },
  {
    path: BASE_PATH + "/tables",
    layout: AdminLayout,
    component: Tables
  },
  {
    path: BASE_PATH + "/blog-posts",
    layout: AdminLayout,
    component: BlogPosts
  },
  {
    path: BASE_PATH + "/blog-posts",
    layout: AdminLayout,
    component: BlogPosts
  }
];  