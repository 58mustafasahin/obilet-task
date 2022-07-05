import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    {/* <Suspense fallback={
      <div style={{ position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center', background:'black', opacity:'0.6', top: 0, bottom: 0 , width:'100%'}}>
        <img src={`https://s3.eu-central-1.amazonaws.com/static.obilet.com/images/web/loading-bus.gif`} style={{ width: "300px" }} />
      </div>
    }> */}
      <App />
    {/* </Suspense> */}
  </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
