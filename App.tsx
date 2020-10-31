import 'react-native-gesture-handler';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import Navigation from '@navigation/index';

import { theme } from '@theme/index';

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <Navigation />
    </PaperProvider>
  );
};

export default App;
