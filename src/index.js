import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/stackNinjas-frontend">
      {/* <Provider store={store}>
        <App />
      </Provider> */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
