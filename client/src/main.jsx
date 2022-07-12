import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { TransactionProvider } from './context/TransactionContext';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )

// ReactDOM.render(
//   <TransactionProvider>
//     <App />
//   </TransactionProvider>,
//   document.getElementById('root')
// );

ReactDOM.createRoot(document.getElementById('root')).render(
  <TransactionProvider>
    <App />
  </TransactionProvider>
)