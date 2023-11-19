import { Navbar } from './components/child_components/Navbar';
import './App.css';
import { Textbox } from './components/Textbox';
// import { About } from './components/About';
import React,{ useState } from "react";
import { Alerts } from './components/child_components/Alerts';
// import { BrowserRouter as Router , Routes, Route} from "react-router-dom";


function App() {
  const [mode,setmode] = useState('light');
  const [tmode,settmode] = useState('light');
  // const [gmode,setgmode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,status) => {
    setAlert({
      msg: message,
      type: status
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }

  const togglemode = () => {
    if(mode === 'dark'){
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Has Been Enabled","success");
      settmode('white');
      document.title='TextUtils(light) - Home';
    }else{
      setmode('dark')
      document.body.style.backgroundColor = 'rgb(9 22 46)';
      showAlert("Dark Mode Has Been Enabled","success");
      settmode('rgb(9 22 46)');
      document.title='TextUtils(dark) - Home';
    }
  }

  const togglegmode = () => {
      setmode('success');
      document.body.style.backgroundColor = '#7ed2ab';
      showAlert("Green Mode Has Been Enabled","success");
      settmode('#20c997');
      document.title='TextUtils(green) - Home';
  }
  
  const togglebmode = () => {
      setmode('primary');
      document.body.style.backgroundColor = '#052c65';
      showAlert("Blue Mode Has Been Enabled","success");
      settmode('rgb(70 108 164)');
      document.title='TextUtils(blue) - Home';
  }

  const togglermode = () => {
      setmode('danger');
      document.body.style.backgroundColor = '#be787e';
      showAlert("Red Mode Has Been Enabled","success");
      settmode('rgb(186 88 97)');
      document.title='TextUtils(red) - Home';
  }


  return (
    <>
      {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} togglemode={togglemode} togglegmode={togglegmode} togglermode={togglermode} togglebmode={togglebmode}></Navbar>
      {/* <Navbar></Navbar> */}
      <Alerts alt = {alert}></Alerts>
      {/* <Routes> */}
          {/* <Route exact path="/" element={<Textbox mode={mode} tmode={tmode} alert={showAlert}></Textbox>}> */}
          <Textbox mode={mode} tmode={tmode} alert={showAlert}></Textbox>
          {/* </Route> */}
          {/* <Route exact path="/about" element={<About></About>}> */}
          {/* </Route> */}
        {/* </Routes> */}
      {/* </Router> */}
    </>
  );
}

export default App;
