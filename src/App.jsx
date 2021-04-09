import { useEffect } from "react";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetails from "./pages/MovieDetail";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
  }, [location.pathname]);

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" render={AboutUs} exact />
          <Route path="/ContactUS" render={ContactUs} />
          <Route path="/OurWork/:id" component={MovieDetails} />
          <Route path="/OurWork" component={OurWork} exact />
        </Switch>
      </AnimatePresence>
    </div>
  );
};

export default App;
