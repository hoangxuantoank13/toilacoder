import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import routes from "./routes/routes";
import withTracker from "./withTracker";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import 'react-id-swiper/lib/styles/css/swiper.css';
import 'react-modal-video/scss/modal-video.scss';

export default () => (
  <Router basename={process.env.REACT_APP_BASENAME || ""}>
    <div>
      {routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={withTracker(props => {
              return (
                <route.layout {...props}>
                  <route.component {...props} />
                </route.layout>
              );
            })}
          />
        );
      })}
    </div>
  </Router>
);
