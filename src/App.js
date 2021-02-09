import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Favorites from "./containers/Favorites";
import Header from "./components/Header";
import Characters from "./containers/Characters";
import Comics from "./containers/Comics";
import Footer from "./components/Footer";

function App() {
  const [favorite, setFavorite] = useState([]);

  return (
    <Router>
      <div>
        <Header />
        <div className="container">
          <div className="margin">
            <Switch>
              <Route path="/comics">
                <Comics />
              </Route>
              <Route path="/favorites">
                <Favorites favorite={favorite} setFavorite={setFavorite} />
              </Route>
              <Route path="/">
                <Characters favorite={favorite} setFavorite={setFavorite} />
              </Route>
            </Switch>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
