import { Image, StyleSheet } from 'react-native';

export default function ImageViewer({ backgroundImage }) {
  return <Image source={backgroundImage} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 400
  }
});
