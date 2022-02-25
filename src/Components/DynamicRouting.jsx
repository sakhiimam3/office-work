import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import User from "../Pages/User";
const DynamicRouting = () => {
  const Users = [
    { id: 1, name: "sakhidad", address: "sharfi" },
    { id: 2, name: "Noor", address: "korangi" },
    { id: 3, name: "siaknder", address: "malir" },
  ];

  return (
    <>
      <Router>
        <div>
          {Users.map((item) => {
            return (
              <div>
                <Link to={`/User/${item.id}`}>
                  <h3>{item.name}</h3>
                </Link>
              </div>
            );
          })}
        </div>
        <Route path="/User/:id">
          <User />
        </Route>
      </Router>
    </>
  );
};

export default DynamicRouting;
