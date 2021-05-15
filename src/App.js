import React, { useState } from "react";
import Card from "./UI/card";
import Input from "./UI/input";

import "./App.css";

const App = () => {
  const [data, setData] = useState("");

  const inputHandler = (e) => {
    //console.log(e.target.value);
    setData(e.target.value);
  };

  return (
    <div className="app">
      <Input onChange={inputHandler} />
      <div className="char-div">
        {data.split('').map((char,id) => (
          <Card key={id}>{char}</Card>
        ))}
      </div>
    </div>
  );

  //  return (

  //     React.createElement('div', null, React.createElement('h1',null,"React with akshay" ) )

  //  );
};

export default App;
