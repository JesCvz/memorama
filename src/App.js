import React from 'react';
import { Redirect, Route } from 'react-router';
import { SideBar } from './components/SideBar';
import { routes } from './Routes';
import Game from './views/Game/Game';
// Add import statements below



const App = () => {

  return (
    <div>
      <SideBar/>
      {routes.map((route, index) => {
          return(
              <Route key={index} path={route.path} exact component={route.component} />
          )
      })}
      <Redirect from="/" to="/jugar" />
    </div>
  );
};

export default App;
