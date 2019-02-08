import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

import GlobalStyle from './styles/global';
import store from './store';
import Routes from './routes';

import Background from './components/Background';
import Header from './components/Header';

const props = useSpring({
  to: async (next, cancel) => {
    await next({ opacity: 1 });
    await next({ opacity: 0 });
  },
  from: { opacity: 0 },
});

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <GlobalStyle />
      <Header />
      <animated.div style={props}>
        <Routes />
      </animated.div>
      <Background />
    </Provider>
  </BrowserRouter>
);

export default App;
