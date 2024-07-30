import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ThemeProvider } from "./contexts/theme";
import { useEffect } from "react";
import ThemeBtn from "./components/ThemeBtn/Themebtn";
import Card from "./components/Card/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light");
const lightTheme=()=>{
  setThemeMode("light")
}
const darkTheme=()=>{
  setThemeMode("dark")
}

//ACTUAL CHANGE IN THEME

useEffect(()=>{
 //pehle jo document mein html mein classlist mojood hai either light otdark usko remove krdo
  document.querySelector('html').classList.remove('light','dark')
  //phir jo themeMode ho either light or dark, usse add krdo 
  document.querySelector('html').classList.add(themeMode)

},[themeMode])

  //NOW WE CAN ACCESS THESE THREE VALUES FROM THE CONTEXT ANYWHERE
//NOW, WE ARE ACCESSING THE TWO METHODS DARKTHEME AND LIGHTTHEME BUT WE'VE NOT IMPLEMENTED THEIR FUNCTIONALITY IN THE PROVIDER(THEY'RE NOT DOING ANYTHING),SO WHAT WE DO IS, MAKE A FUNCTIOM WITH THE EXACT SAME NAME AND DEFINE THE FUNCTION HERE IN THIS COMPONENT AND THIS FUNCTIONALITY WILL GO IN THESE METHODS OF PROVIDER
return (
    <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
<ThemeBtn/>
        </div>

        <div className="w-full max-w-sm mx-auto">
<Card/>
        </div>
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
