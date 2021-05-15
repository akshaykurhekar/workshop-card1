import React, { useState } from "react";
import Card from "./UI/card";
import Input from "./UI/input";

import "./App.css";

const App = () => {
  const [data, setData] = useState("");
  const [color, setColor] = useState("#2e53a8");

   
const inputHandler = (e) => {
     setData(e.target.value);
  };

const colorHandler = (e) =>{
    
    setColor(e.target.value);
}  

const deleteHandler = (index) =>{
    // console.log("delete calling...",id)
    const text = data.split('');   // split data single char [a,k,s,h,a,y ]
           text.splice(index,1);          // splice the element from - to 
           setData(text.join(''));
}

  return (
    <div className="app" >
        <h1 style={ { color:color } } > React with Akshay M. K 2021 </h1>
      <Input onChange={inputHandler} click={ colorHandler} colorValue={color} />
      <div className="char-div" >
        {data.split('').map((char,id) => (
          <Card key={id} click={ (id) => deleteHandler(id) } >
              {char}
          </Card>
        ))}
      </div>
    </div>
  );

  //  return (

  //     React.createElement('div', null, React.createElement('h1',null,"React with akshay" ) )

  //  );
};

export default App;
