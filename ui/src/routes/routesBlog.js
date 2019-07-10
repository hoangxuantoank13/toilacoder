// Layout Types
import { DefaultLayout } from "../layouts";

// Route Views
import BlogOverview from '../views/admin/BlogOverview';

export default [
  {
    path: "/",
    layout: DefaultLayout,
    component: BlogOverview
  }
];
