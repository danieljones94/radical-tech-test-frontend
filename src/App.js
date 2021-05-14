import LoginPage from "./pages/Login";
import SignUpPage from "./pages/SignUp";
import LandingPage from "./pages/LandingPage";
import Header from "./components/header/Header";
import "./App.css";
import frontpageimage from "./assets/images/frontpageimage.png";
import welcomeMessage from "./assets/images/welcomemessage.png";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header />
      <div class="row">
        <div className="col-md-8">
          <img src={welcomeMessage} className="welcomeMessage" />
          <img src={frontpageimage} className="landingPageImage" />
        </div>
        <div className="col-md-4">
          <BrowserRouter>
            <Route path="/" exact component={LoginPage}></Route>
            <Route path="/signup" component={SignUpPage}></Route>
            <Route path="/home" component={LandingPage}></Route>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
