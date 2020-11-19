import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faYoutube,
  faFacebookF,
  faTwitter,
  faInstagram,
  faSoundcloud,
} from "@fortawesome/free-brands-svg-icons";

const { default: HomePage } = require("./pages/HomePage");
const { default: AboutPage } = require("./pages/AboutPage");
const { default: ListenPage } = require("./pages/ListenPage");
const { default: LogInPage } = require("./pages/LogInPage");
const { default: OurTeamPage } = require("./pages/OurTeamPage");
const { default: SignUpPage } = require("./pages/SignUpPage");
const { default: LetsPlayPage } = require("./pages/LetsPlayPage");

library.add(fab, faYoutube, faFacebookF, faTwitter, faInstagram, faSoundcloud);

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/Login">
            <LogInPage />
          </Route>
          <Route exact path="/About">
            <AboutPage />
          </Route>
          <Route exact path="/Listen">
            <ListenPage />
          </Route>
          <Route exact path="/LetsPlay">
            <LetsPlayPage />
          </Route>
          <Route exact path="/OurTeam">
            <OurTeamPage />
          </Route>
          <Route exact path="/SignUp">
            <SignUpPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
