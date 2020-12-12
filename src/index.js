import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import { ModalProvider } from "react-modal-hook";

ReactDOM.render(
  <ModalProvider>
    <App />
  </ModalProvider>,
  document.getElementById('root')
);


