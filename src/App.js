import React, { useEffect } from 'react';
import { Redirect, Route, useHistory } from 'react-router';
import { SideBar } from './components/SideBar';
import { routes } from './Routes';
// Add import statements below



const App = () => {
  const history = useHistory();

  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    }
  }, [history]);


  return (
    <div>
      <SideBar/>
      {routes.map((route, index) => {
          return(
              <Route key={index} path={route.path} exact component={route.component} />
          )
      })}
      <Redirect from="/" to="/portada" />
    </div>
  );
};

export default App;
