
import React ,{ useState }from "react";
import './../styles/App.css';

const App = () => {
  const [inputValue,setInputValue]=useState("");
  const onChangeText=(event)=>{
    setInputValue(event.target.value);
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <label htmlFor="name">Enter your name:</label>
            <br></br>
            <br></br>
            <input id="name" onChange={onChangeText} />
            <br></br>
            {inputValue && <p>{`Hello ${inputValue}!`}</p>}
          
    </div>
  )
}

export default App
