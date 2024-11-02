import { BrowserRouter as Router, Routes ,Route  } from "react-router-dom";

import LoginForm from "./components/LoginForm";

import Dashboard from "./components/Dashboard";

import MyContext from "./Context/MyContext";

import "./App.css"
import { useState } from "react";


function App(){

  const [username, setUsername] = useState('');

  return(
    <MyContext.Provider value={{username, setUsername}}>
      <Router>
        <Routes>
          <Route path="/login" element = { < LoginForm />}/>
          <Route path="/dashboard" element = { < Dashboard />}/>
        </Routes>
      </Router>
    </MyContext.Provider>
  )
}

export default App;