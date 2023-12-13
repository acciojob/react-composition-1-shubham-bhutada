
import React from "react";
import './../styles/App.css';
import tabsData from "../data/tabsData";
import Tabs from "./Tabs";


const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <Tabs tabdata={tabsData}/>
    </div>
  )
}

export default App
