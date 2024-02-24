import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store';
// import { PersistGate } from 'redux-persist/integration/react';

import App from 'components/App/App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="./rent-car-react">
        {/* <PersistGate loading={null}> */}
        <App />
        {/* </PersistGate> */}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
