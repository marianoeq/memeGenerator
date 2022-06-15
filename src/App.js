import React, {useState} from 'react'
import Header from "./Components/Header";
import Meme from "./Components/Meme";

function App() {
  const [dark, setDark] = useState(false)

  function handleClick(){
    setDark(prevDarkState => !prevDarkState)
  }

  return (
    <div>
      <Header clickMe={handleClick} darkMode={dark}/>
      <Meme darkMode={dark}/>
    </div>
  );
}

export default App;
