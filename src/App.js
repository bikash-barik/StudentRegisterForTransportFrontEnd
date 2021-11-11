import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// custom component
import { Header } from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import StudentRegistration from "./components/Body/StudentRegistration";
import ListStudentComponent from "./components/Body/ListStudentComponent";
import CreateStudentComponent from "./components/Body/CreateStudentComponent";
import Registration from "./components/Body/register";
import ViewStudentComponent from "./components/Body/ViewStudentComponent";
import BusDetailsList from "./components/Body/BusDetails";


//custom for payment
import TicketBooking from "../src/components/Body/components/TicketBooking";
import PaymentMethod from "../src/components/Body/components/PaymentMethod";
import PaytmPG from "../src/components/Body/components/PaytmPG";
import SBIBankPG from "../src/components/Body/components/SBIBankPG";
import ThankYouMessage from "../src/components/Body/components/ThankYouMessage";

import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";

import { history } from "./helpers/history";

// import AuthVerify from "./common/AuthVerify";
import EventBus from "./common/EventBus";

const App = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
      setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
    } else {
      setShowModeratorBoard(false);
      setShowAdminBoard(false);
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, [currentUser, logOut]);

  return (
    <Router history={history}>
      <div>
       <Header/>
        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route
              path="/student_registration"
              exact
              component={StudentRegistration}
            ></Route>
            <Route path="/Students" component={ListStudentComponent}></Route>
            <Route
              path="/add_student/:id"
              component={CreateStudentComponent}
            ></Route>
            <Route
              path="/view_student/:id"
              component={ViewStudentComponent}
            ></Route>
            <Route path="/registration" component={Registration}></Route>
            <Route path="/booking" exact component={TicketBooking} />
            <Route path="/payment" exact component={PaymentMethod} />
            <Route path="/submitPaymentDetail" exact component={PaytmPG} />
            <Route path="/thankyou" exact component={ThankYouMessage} />
            <Route path="/sbipg" exact component={SBIBankPG} />
            <Route path="/busdetails" exact component={BusDetailsList} />
          </Switch>
        </div>

        {/* <AuthVerify logOut={logOut}/> */}
      </div>
    </Router>
  );
};

export default App;
