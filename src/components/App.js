import React, {useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";


function App() {
  const [plates, setPlates] = useState([])
  const [dollars, setDollars] = useState(100)

  function addPlate(){
    setPlates([...plates, ''])
  }

  function buySushi(price){
    setDollars(dollars - price)
  }

  return (
    <div className="app">
      <SushiContainer addPlate={addPlate} buySushi={buySushi} dollars={dollars}/>
      <Table plates={plates} dollars={dollars}/>
    </div>
  );
}

export default App;
