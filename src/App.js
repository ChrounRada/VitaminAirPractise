// ===== Import Modules =====
import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

// ===== Import CSS =====
import "./App.css";

// ===== Import Component =====
import HomePage from "./components/HomePage";
import Reforesting from "./components/Reforesting";
import NaturalFarming from "./components/NaturalFarming";
import Ecoturism from "./components/Ecoturism";
import SeedsBomb from "./components/SeedsBomb";
import AirWater from "./components/AirWater";

import About from "./components/Sub-Detail/About";
import Description from "./components/Sub-Detail/Description";
import Help from "./components/Sub-Detail/Help";
import Title from "./components/Sub-Detail/Title";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Router>
          <Switch>
            /*Router dom of HomePage */
            <Route exact path="/" component={HomePage} />
            <Route path="/reforesting" component={Reforesting} />
            <Route path="/natural-farming" component={NaturalFarming} />
            <Route path="/ecoturism" component={Ecoturism} />
            <Route path="/seeds-bomb" component={SeedsBomb} />
            <Route path="/air-water" component={AirWater} />
            /*Router dom of subNavbar */
            <Route path="/description" component={Description} />
            <Route path="/about" component={About} />
            <Route path="/help" component={Help} />
            <Route path="/title" component={Title} />
            /*Router dom of Nav*/
            <Route exact path="/" component={AirWater} />
            <Route path="/ecoturism" component={Ecoturism} />
            /*Route for AirWater layout */
            <Route path="/:id" children={<AirWater />} />
          </Switch>
        </Router>
      </React.Fragment>
    </div>
  );
}

export default App;
