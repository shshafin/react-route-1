import "./App.css";
import LegendChart from "./components/LegendChart/LegendChart";

import Navbar from "./components/Navbar/navbar";
import Axios from "./components/axios/Axios";
import LineChart from "./components/linechart/linechart";
import PriceOptions from "./components/priceOptions/priceOptions";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <LegendChart></LegendChart>
      <Axios></Axios>
    </>
  );
}

export default App;
