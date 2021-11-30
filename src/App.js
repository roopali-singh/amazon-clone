// STARTED ON 24th Sepember 2020
import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Payment from "./Payment.js";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";
import AfterHeader from "./AfterHeader";
import BeforeFooter from "./BeforeFooter";
import Footer from "./Footer";

const promise = loadStripe(
  "pk_test_51Hk40EHSlY6Ot9iD1czZrIzMDlruiT4DOP9oM31PsQZk0fYj13sKxLfHljT9z3mPkIk9Gp7ioAIkKN0MEdCzxBRF009J1j6vo4"
);

function App() {
  const [{}, dispatch] = useStateValue();
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
      <div className="app">
        <Switch>
          {/* <Route  exact path="/">
            <Header />
            <Home />
          </Route> */}

          <Route path="/orders">
            <Header />
            <Orders />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
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
