import React from "react";

const AdminContext = React.createContext({
  id: "",
  loggedIn: false,
});

export default AdminContext;
