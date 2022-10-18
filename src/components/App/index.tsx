import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from 'theme';
import { Provider } from 'react-redux';
import store from 'redux/store';
import СonfiguredRoutes from 'routes';

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <СonfiguredRoutes />
      </ThemeProvider>
    </Provider>
  );
}
