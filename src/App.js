import LoginPage from "./pages/Login";
import SignUpPage from "./pages/SignUp";
import LandingPage from "./pages/LandingPage";
import Header from "./components/header/Header";
import "./App.css";
import frontpageimage from "./assets/images/frontpageimage.png";
import welcomeMessage from "./assets/images/welcomemessage.png";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
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
            <Route path="/" exact component={LoginPage}></Route>
            <Route path="/signup" exact component={SignUpPage}></Route>
            <Route path="/home" exact component={LandingPage}></Route>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
