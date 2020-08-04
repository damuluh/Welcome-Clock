import React from 'react';
import './App.css';
import './Components/welcome/Welcome';
import Welcome from './Components/welcome/Welcome';
import './Components/welcome/Welcome.css';
import Clock from './Components/clock/Clock';
import Contact from './Components/contact/Contact'
import './Components/clock/Clock.css';
import './Components/contact/Contact.css';
import './Components/welcome/Welcome.css';


function App() {
  return (
    <div className="Clock">
      <Welcome name="My Dear!" />

      <Clock />
      <Contact />
    </div>
  );
}

export default App;
