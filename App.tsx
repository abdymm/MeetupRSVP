import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {
  configureFonts,
  DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';

import {Colors, Fonts} from '@Constants';
import AppNavigationContainer from '@Navigations';

const theme = {
  ...DefaultTheme,
  fonts: configureFonts(Fonts),
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.primary,
    secondary: Colors.secondary,
  },
};

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={'light-content'} />
        <AppNavigationContainer />
      </SafeAreaView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
