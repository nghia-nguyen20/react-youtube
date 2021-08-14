import React,{useState}  from  "react"
import './App.scss';
import Header from "./Components/Header/Header"
import Feed from "./Components/Feed/Feed"
import Content from "./Components/Content/Content"

function App() {
  const[dark,setDarkMode] = useState(false);
  const toggle = (them) => {
    return them ? setDarkMode(!dark): them
  }
  return(
   <div className={dark ? "App dark" :"App"}>
     <Header toggle={toggle}/>
     <div className="App_body">
        <Feed/>
        <Content/>
     </div>
   </div>
    
  );
}

export default App;
