import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Button from './components/Button';
import ImageViewer from './components/ImageViewer';

const backgroundImage = require('./assets/punch-cat.jpg');

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer backgroundImage={backgroundImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button theme='primary' label='사진을 선택하세요' />
        <Button label='이 사진으로 결정' />
      </View>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageContainer: {
    flex: 1,
    paddingTop: 56
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center'
  }
});
