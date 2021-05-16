import LoginPage from "./pages/Login";
import SignUpPage from "./pages/SignUp";
import LandingPage from "./pages/LandingPage";
import Header from "./components/header/Header";
import "./App.css";
import frontpageimage from "./assets/images/frontpageimage.png";
import welcomeMessage from "./assets/images/welcomemessage.png";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="row">
        <div className="col-md-8">
          <img
            alt="Welcome message"
            src={welcomeMessage}
            className="welcomeMessage"
          />
          <img
            alt="Landing page theme"
            src={frontpageimage}
            className="landingPageImage"
          />
        </div>
        <div className="col-md-4">
          <Switch>
            <Route path="/" exact>
              <LoginPage />
            </Route>
            <Route path="/signup" exact>
              <SignUpPage />
            </Route>
            <Route path="/home" exact>
              <LandingPage />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
