import Navbar from "./components/Navbar";
import React , { useState } from 'react'
import TextForm from './components/TextForm'

function App() {
  const [mode, setMode] = useState('light') //  whether dark mode is enabled or not
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode ('dark');
    }else{
      setMode ('light');
    }
  }
  return (
    <>
    
   <Navbar title= 'Navbar' nativePlace = 'Home' main = 'Link' mode = {mode} toggleMode= {toggleMode}/>
   <div className="container"><TextForm title = 'Conversion Form'/>
   </div>
    </>
  );
}

export default App;
