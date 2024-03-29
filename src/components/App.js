
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
        <form>
        <label htmlFor="name">Enter your name:</label>
            
            <input id="name" onChange={onChangeText} />
            </form>
          
            <p>{`Hello ${inputValue}!`}</p>
          
    </div>
  )
}

export default App
