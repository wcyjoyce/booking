import React, { Component } from "react";

import List from "../containers/list.jsx";
import Map from "../containers/map.jsx";

class App extends Component {
  render() {
    return (
      <div className="row">
        <List />
        <Map />
      </div>
    );
  }
}

export default App;
