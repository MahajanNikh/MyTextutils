//import About from "./components/About";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TextFrom from "./components/TextFrom";
import Alert from "./components/Alert";


function App() {
  const [mode, setMode] = useState('light')

  const [alert, setAlert] = useState(null)
  

  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


  let toggleMode=()=>{

    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title="TextUtils - Dark Mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert(" Light mode has been enabled", "success");
      document.title="TextUtils - Light Mode";
    }
  }

  


  let toggleMyMode=()=>{

    if(mode ==='light'){
      setMode('green');
      document.body.style.backgroundColor="#73f707";
      showAlert("Green mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      showAlert("Light mode has been enabled","success");
    }
  }

  return (
    <>
      {/* <Navbar title=
      "MyTextUtils" AboutText="About TextUtils"/> */}
      {/* <Navbar/> */}

      <Navbar title="MyTextUtils" mode={mode} toggleMode={toggleMode} toggleMyMode={toggleMyMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <TextFrom showAlert={showAlert} heading="Enter the Text to Analyze text below" mode={mode} />
        {/* < About /> */}
      </div>
    </>
  );
}

export default App;
