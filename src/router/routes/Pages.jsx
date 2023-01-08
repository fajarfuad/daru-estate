import { lazy } from "react";

const PagesRoutes = [
  {
    path: "/login",
    component: lazy(() => import("../../view/pages/auth/login")),
    layout: "FullLayout",
    auth: false,
  },
  {
    path: "/house",
    component: lazy(() => import("../../view/pages/house")),
    layout: "VerticalLayout",
    auth: true,
  },
  {
    path: "/customer",
    component: lazy(() => import("../../view/pages/customer")),
    layout: "VerticalLayout",
    auth: true,
  },
  {
    path: "/modification",
    component: lazy(() => import("../../view/pages/modification")),
    layout: "VerticalLayout",
    auth: true,
  },
  {
    path: "/marketing",
    component: lazy(() => import("../../view/pages/marketing")),
    layout: "VerticalLayout",
    auth: true,
  },
  {
    path: "/payment",
    component: lazy(() => import("../../view/pages/payment")),
    layout: "VerticalLayout",
    auth: true,
  },
  {
    path: "/scheme",
    component: lazy(() => import("../../view/pages/scheme")),
    layout: "VerticalLayout",
    auth: true,
  },
];

export default PagesRoutes;
