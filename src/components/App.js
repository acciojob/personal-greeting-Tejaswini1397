
import React ,{ userState }from "react";
import './../styles/App.css';

const App = () => {
  const [inputValue,setInputValue]=userState("");
  const onChangeText=(event)=>{
    setInputValue(event.target.value);
  }
  return (
    <div>
        {/* Do not remove the main div */}
      <label htmlFor="name">Enter your name</label>
      <input id="name" onChange={onChangeText}/>
      {inputValue&&<p>{`Hello ${inputValue}!`}</p>}
    </div>
  )
}

export default App
