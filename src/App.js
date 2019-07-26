import React from 'react';
import {HashRouter} from 'react-router-dom'
import router from './router'

import {Provider} from 'react-redux'
import store from './Redux/Store'



function App() {
  return (
    <Provider store={store}>

   <HashRouter>
     
  
       {router} 
  
   
  
   </HashRouter>
   </Provider>
  );
}

export default App;
