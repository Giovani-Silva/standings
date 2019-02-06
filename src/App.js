import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import store from './store';
import Routes from './routes';

import Background from './components/Background';
import Header from './components/Header';

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <GlobalStyle />
      <Header />
      <Routes />
      <Background />
    </Provider>
  </BrowserRouter>
);

export default App;
