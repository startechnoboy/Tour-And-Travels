/* eslint-disable no-unused-vars */
// export default Dashboard
import React from "react";
import { useSelector } from "react-redux";

function Dashboard() {
    
  const  user  = useSelector((state) => state.auth.user);
  return (
    <div>
      <h1>{ user?.email }</h1>
    </div>
  );
}

export default Dashboard;
