import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import ColorSequence from './color-sequence';
import CompleteLyrics from './router-react-exercise';
import Patotits from './patotits-move';
import E_Bingo from './e-bingo/eBingo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <ColorSequence /> */}
    {/* <Patotits /> */}
    {/* <CompleteLyrics /> */}
    <E_Bingo />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
