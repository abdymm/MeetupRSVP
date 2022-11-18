import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {
  configureFonts,
  DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors, Fonts} from '@Constants';
import AppNavigationContainer from '@Navigations';

const theme = {
  ...DefaultTheme,
  fonts: configureFonts(Fonts),
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.primary,
    secondary: Colors.secondary,
    background: Colors.light,
  },
};

const App = () => {
  useEffect(() => {
    try {
      MaterialCommunityIcons.loadFont();
    } catch (error) {
      console.log('error', error);
    }
  }, []);

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
