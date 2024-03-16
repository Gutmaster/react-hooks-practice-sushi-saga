import React, {useState, useEffect} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

const API = "http://localhost:3001/sushis";

function SushiContainer({addPlate, buySushi, dollars}) {
  const [sushiData, setSushiData] = useState([])
  const [slicePoint, setSlicePoint] = useState(0)

  useEffect(() => fetch("http://localhost:3001/sushis")
  .then(response => response.json())
  .then(data => {
    setSushiData(data.slice(slicePoint, slicePoint+4))
  }), [slicePoint])

  function moreSushi(){
    setSlicePoint(slicePoint + 4)
  }

  return (
    <div className="belt">
      {sushiData.map(sushi => 
      <Sushi 
        key={sushi.id} 
        id={sushi.id} 
        name={sushi.name}
        img_url={sushi.img_url}
        price={sushi.price}
        addPlate={addPlate}
        buySushi={buySushi}
        dollars={dollars}
      />)}
      <MoreButton moreSushi={moreSushi}/>
    </div>
  );
}

export default SushiContainer;
