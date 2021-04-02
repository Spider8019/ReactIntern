import React from "react"
import Card from "./component/Card"
import Carray from "./array/cardarray"

function App() {
  return (
  <>
  <div className="blogContainer">
    { Carray.map((item)=><Card key={item.id} title={item.title} date={item.date} image={item.image} info={item.info}/>)}
  </div>
  </>
  );
}

export default App;
