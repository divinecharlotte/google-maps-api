
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraProvider, theme } from '@chakra-ui/react'
import React from 'react';

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  
);



