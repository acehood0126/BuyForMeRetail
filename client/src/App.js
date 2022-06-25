import React, { useEffect } from 'react'; 
// import { AuthProvider } from "./contexts/JWTContext";

import "./App.css";

// Redux
import { Provider } from 'react-redux';
// import store from './store';
// import { loadUser } from './actions/auth';
// import setAuthToken from './utils/setAuthToken.js';
import AllRoutes from './routes';

import {store} from "./redux/store";


function App() {

  // useEffect(() => {
  //   // check for token in LS when app first runs
  //   if (localStorage.token) {
  //     // if there is a token set axios headers for all requests
  //     setAuthToken(localStorage.token);
  //   }
  //   // try to fetch a user, if no token or invalid token we
  //   // will get a 401 response from our API
  //   store.dispatch(loadUser());

  //   // log user out from all tabs if they log out in one tab
  //   window.addEventListener('storage', () => {
  //     if (!localStorage.token) store.dispatch({ type: LOGOUT });
  //   });
  // }, []);
  return (
    // <Provider>
      <AllRoutes/>      
    // </Provider>
    
    
  );
}

export default App;
