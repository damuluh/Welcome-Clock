import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import './Components/welcome/Welcome';
import Welcome from './Components/welcome/Welcome';
import './Components/welcome/Welcome.css';
import Clock from './Components/clock/Clock';
import Contact from './Components/contact/Contact';
import Navigation from './Components/navigation/Navigation';
import Page404 from './Components/page/Page404';
import Jeopardy from './Components/jeopardy/Jeopardy';
import './Components/clock/Clock.css';
import './Components/contact/Contact.css';
import './Components/welcome/Welcome.css';
import './Components/navigation/Navigation.css'

function App() {
  return (
    <div className='Clock'>
      <Navigation />
      <Switch>
        <Route
          exact
          path='/'
          render={(props) => <Welcome {...props} name='' />}
        />
        <Route
          path='/welcome/:name'
          render={(props) => (
            <Welcome {...props} name={props.match.params.name} />
          )}
        />
        <Route path='/Clock' component={Clock} />
        <Route path='/contact' component={Contact} />
        <Route path='/Navigation' component={Navigation} />
        <Route path='/Jeopardy' component={Jeopardy} />
        <Route component={Page404} />

        <Route path='Welcome/:name' children={<Welcome />} />
      </Switch>
    </div>
  );
}

export default App;
