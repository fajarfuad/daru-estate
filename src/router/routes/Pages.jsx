import { lazy } from "react";

const PagesRoutes = [
  {
    path: "/login",
    component: lazy(() => import("../../view/pages/auth/login")),
    layout: "FullLayout",
    auth: false,
  },
  {
    path: "/marketing",
    component: lazy(() => import("../../view/pages/marketing")),
    layout: "VerticalLayout",
    auth: true,
  },
];

export default PagesRoutes;
