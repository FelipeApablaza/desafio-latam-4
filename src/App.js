import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import store from './store/store'
import Home from './views/Home'
import Places from './views/Places'
import Heroes from './views/Heroes'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path={'/'} component={Home} />
          <Route exact path={'/places'} component={Places} />
          <Route exact path={'/heroes'} component={Heroes} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
