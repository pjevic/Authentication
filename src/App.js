import React, { Fragment, useContext } from "react";

import AuthContext from "./store/auth-context";

import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import Login from "./components/Login/Login";

function App() {
  const context = useContext(AuthContext);

  return (
    <Fragment>
      <MainHeader />
      <main>
        {!context.isLoggedIn && <Login />}
        {context.isLoggedIn && <Home />}
      </main>
    </Fragment>
  );
}

export default App;
