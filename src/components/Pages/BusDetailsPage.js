import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const BusDetailPage = ({ component: roles }) => {
  const { user: currentUser } = useSelector((state) => state.auth);

  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  if (currentUser.roles == "ROLE_USER") {
    return <Redirect to="/BusListPage" />;
  } else {
    return <Redirect to="/BusDetailsList" />;
  }
};

export default BusDetailPage;
