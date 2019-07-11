// Layout Types
import { BlogLayout } from "../layouts";
import BlogDetailsLeftSidebar from '../views/blog/BlogDetailsLeftSidebar';
import BlogLeftSidebar from '../views/blog/BlogLeftSidebar';

// Route Views


export default [
  {
    path: "/",
    layout: BlogLayout,
    component: BlogLeftSidebar
  },
  {
    path: "/blog-details",
    layout: BlogLayout,
    component: BlogDetailsLeftSidebar
  }
];
