import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alerts from "./components/Alerts";
import React,{useState} from 'react'; //rfce//
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {

  const [mode , setMode] = useState("light"); /*konsa mode change krne k liye*/
  const [enableMode , setEnableMode] = useState("Enable Dark Mode");/*switch ke pass wale text ko change krne k liye*/
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
        setAlert({
          msg:message,
          type:type
        })
        setTimeout(() => {
          setAlert(null);
        }, 2000);
  }
  
    /*jese hi switch pr click kiya to.....switch ke liye jo pure mode ko handle krega*/
  const toggleMode=()=>{
 
    if(mode === "light"){
      setMode("dark");
      setEnableMode("Enable light Mode");
      document.body.style.backgroundColor = "#01012a";
      showAlert("Dark Mode has been enabled","success") //function call//
      //document.title = "Textutils-Dark mode" //title ko change krne k liye//
    }
    else{
      setMode("light");
      setEnableMode("Enable dark Mode");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled","success") //function call//
      //document.title = "Textutils-Light mode" //title ko change krne k liye//
    }
  }
    


  return(
    <>
    <Router>
        <Navbar Maintitle="TEXTUTILS" modeDarkLight = {mode} handleMode = {toggleMode} handleEnableMode={enableMode} />
        <Alerts Alert = {alert}/>
            <Routes>
                <Route exact path="/" element={<TextForm textAreaHeading="TEXT AREA" modeDarkLight = {mode} />}> </Route>
                <Route exact path="/about" element= {<About />}></Route> {/*exact ko add kiya so that exact vo hi page open ho*/}
            </Routes>
     </Router>
    </>
  )
  
}

export default App;

/************mode dark-light krne k liye 3 chize**********
 1)jo mode color ko chane kre           =>modeDarkLight = {mode}
 2)switch ko click krne k liye function         =>         handleMode = {toggleMode}
 3)switch ke pass likhe text ko change krna like enabe dark/light mode       =>     handleEnableMode={enableMode}
 */

/*******************rfce**************
import React from 'react'

function App() {
  return (
    <div>
      
    </div>
  )
}

export default App
*/
