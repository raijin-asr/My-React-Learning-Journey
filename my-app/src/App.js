import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form_WordCounter';
import React, { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({ //passed an object
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000); //to remove the alert after 3000ms
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode has been enabled","success");
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
    }
  }

  return (
    <>
       {/* <Navbar />  //for default text */}
      <Navbar title="Raijin2" about="About Us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        {/* Form */}
        <Form heading="Raijin Word Counter Form" mode={mode} showAlert={showAlert}/>
      </div>
    </>
  );
}

export default App;
