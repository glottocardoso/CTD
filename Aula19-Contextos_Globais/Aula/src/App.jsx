import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

import {ThemeContext, themes} from "./contexts/ThemeContext.js"
import ThemeConsumer from "./contexts/ThemeConsumer";

function App() {

  const [theme, setTheme] = useState(themes.light)

  const handleChangeTheme = () => {
    theme == themes.dark ? setTheme(themes.light) : setTheme(themes.dark)
  }

  useEffect(() => {
    console.log("<App /> executou efeito colateral");
    return function unmount() {
      console.log(console.log("<App /> desmontou"));
    }
  }, []);

  return (
    <div className="App">

      <ThemeContext.Provider value={{theme, handleChangeTheme}}>

        <ThemeConsumer>

          <Header />
          <Outlet />

        </ThemeConsumer>  

      </ThemeContext.Provider>
      
    </div>
    
  )
}

export default App;
