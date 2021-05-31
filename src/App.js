import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import AfterHeader from "./AfterHeader";
import BeforeFooter from "./BeforeFooter";
import Footer from "./Footer";
import Checkout from "./Checkout";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function App() {
  const [{}, dispatch] = useStateValue();
  document.title = "Amazon Clone";

  useEffect(() => {
    // wil only run once when the app components loads

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>", authUser);
      if (authUser) {
        // the user just logged in / or the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // The user is lgged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    //BEM Convention
    <Router>
      <div className="App">
        <Switch>
          {/* <Route  exact path="/">
            <Header />
            <Home />
          </Route> */}

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/">
            <Header />
            <AfterHeader />
            <Home />
            <BeforeFooter />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
