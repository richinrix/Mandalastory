import "./App.css";
import { Fragment, useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
// comps
import Auth from "./components/Auth";
// import Profile from "./components/Profile";
import Gallery from "./components/Gallery";
import Login from "./components/Login";
import Admin from "./components/Admin";

// import AOS from "aos";
function App() {
  const [redirect, setRedirect] = useState(localStorage.getItem("auth"));
  const checkAuth = () => {};

  useEffect(() => {
    localStorage.setItem("auth", false);
    checkAuth();
  }, []);
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem("auth")
  );

  const toggleAuth = () => {
    setAuthenticated(!authenticated);
  };
  return (
    <BrowserRouter>
      {/* {checkAuth()} */}
      <div className="App ">
        <Auth toggleAuth={toggleAuth} auth={authenticated} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route
            exact
            path="/login"
            component={() => (
              <Login LoginPage toggleAuth={toggleAuth} auth={authenticated} />
            )}
          />
          <Route
            exact
            path="/admin"
            component={() => (
              <Admin LoginPage toggleAuth={toggleAuth} auth={authenticated} />
            )}
          />
        </Switch>
        {redirect && <Redirect to="/login" />}
      </div>
    </BrowserRouter>
  );
}

// const LoginPage = () => <Login toggleAuth={toggleAuth} auth={authenticated} />;

const Homepage = () => (
  <Fragment>
    {/* <Profile/> */}
    <div className="flex justify-center">
      <Gallery />
    </div>
    <footer className="text-right mr-2 font-mono">
      All Images Are Subject To Copyright &copy; 2021{" "}
    </footer>
  </Fragment>
);

export default App;
