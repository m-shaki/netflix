import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import "./App.css"
import {orginalsurl,actionurl} from './urls'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPoster/RowPost";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={orginalsurl} title='Netflix Originals'/>
      <RowPost url={actionurl} title='Action' isSmall/>
    </div>
  );
}

export default App;
