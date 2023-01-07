import { Suspense, useEffect } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { theme } from "../redux/customise/customiseActions";

// Router
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
// Routes
import { Routes } from "./routes";

// Layouts
import VerticalLayout from "../layout/VerticalLayout";
import FullLayout from "../layout/FullLayout";

// Components
import Dashboard from "../view/pages/dashboard";
import Error400 from "../view/pages/error/400";
import Error401 from "../view/pages/error/401";
import Error403 from "../view/pages/error/403";
import Error404 from "../view/pages/error/404";
import Error500 from "../view/pages/error/500";

import { autoLogout } from "../utils/logout";

export default function Router() {
  // Redux
  const customise = useSelector((state) => state.customise);
  const dispatch = useDispatch();

  // Location
  const location = useHistory();

  // Dark Mode
  useEffect(() => {
    document.querySelector("body").classList.add(customise.theme);
    dispatch(theme(customise.theme));
  }, []);

  // RTL
  useEffect(() => {
    if (customise.direction == "ltr") {
      document.querySelector("html").setAttribute("dir", "ltr");
    } else if (customise.direction == "rtl") {
      document.querySelector("html").setAttribute("dir", "rtl");
    }
  }, []);

  // All of the available layouts
  const Layouts = { VerticalLayout, FullLayout };

  // Return Filtered Array of Routes & Paths
  const LayoutRoutesAndPaths = (layout) => {
    const LayoutRoutes = [];
    const LayoutPaths = [];
    if (Routes) {
      // Checks if Route layout or Default layout matches current layout
      Routes.filter(
        (route) =>
          route.layout === layout &&
          (LayoutRoutes.push(route), LayoutPaths.push(route.path))
      );
    }

    return { LayoutRoutes, LayoutPaths };
  };

  // Return Route to Render
  const ResolveRoutes = () => {
    return Object.keys(Layouts).map((layout, index) => {
      const { LayoutRoutes, LayoutPaths } = LayoutRoutesAndPaths(layout);

      let LayoutTag = Layouts[layout];

      return (
        <Route path={LayoutPaths} key={index}>
          <LayoutTag>
            <Switch>
              {LayoutRoutes.map((route) => {
                return (
                  <Route
                    key={route.path}
                    path={route.path}
                    exact={route.exact === true}
                    render={(props) => {
                      return (
                        <Suspense fallback={null}>
                          {route.auth === true ? (
                            <Auth>
                              <route.component {...props} />
                            </Auth>
                          ) : (
                            <route.component {...props} />
                          )}
                        </Suspense>
                      );
                    }}
                  />
                );
              })}
            </Switch>
          </LayoutTag>
        </Route>
      );
    });
  };

  return (
    <BrowserRouter>
      <Switch>
        {ResolveRoutes()}

        {/* Home Page */}

        <Route
          exact
          path={"/"}
          render={() => {
            return (
              <Layouts.VerticalLayout>
                <Dashboard />
              </Layouts.VerticalLayout>
            );
          }}
        />
        {/* NotFound */}
        <Route path="/401">
          <Error401 />
        </Route>
        <Route path="/403">
          <Error403 />
        </Route>
        <Route path="/400">
          <Error400 />
        </Route>
        <Route path="/500">
          <Error500 />
        </Route>
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

function Auth({ children }) {
  const history = useHistory();

  const storage = localStorage.getItem("loginSession");

  if (storage !== null) {
    const data = JSON.parse(storage);
    const token = data.accessToken;

    if (token === null) {
      history.push("/login");
      autoLogout();
    }
  } else {
    history.push("/login");
    autoLogout();
  }

  return children;
}
