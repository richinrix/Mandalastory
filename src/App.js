import "./App.css";
import { Fragment, useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
// comps
import Auth from "./components/Auth";
// import Profile from "./components/Profile";
import Gallery from "./components/Gallery";
import Login from "./components/Login";

// import AOS from "aos";
function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const checkAuth = () => {
    if (authenticated) return <Redirect to="/" />;
    else return <Redirect to="/login" />;
  };
  const toggleAuth = () => {
    setAuthenticated(!authenticated);
  };
  return (
    <BrowserRouter>
      {checkAuth()}
      <div className="App ">
        <Auth toggleAuth={toggleAuth} auth={authenticated} />
        <Switch>
          <Route
            exact
            path="/"
            component={Homepage}
            toggleAuth={toggleAuth}
            auth={authenticated}
          />
          <Route
            exact
            path="/login"
            component={() => (
              <Login LoginPage toggleAuth={toggleAuth} auth={authenticated} />
            )}
            toggleAuth={toggleAuth}
            auth={authenticated}
          />
        </Switch>
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
