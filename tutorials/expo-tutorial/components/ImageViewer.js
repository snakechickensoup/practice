import { Image, StyleSheet } from 'react-native';

export default function ImageViewer({ backgroundImage, selectedImage }) {
  const imageSource = selectedImage ? { uri: selectedImage } : backgroundImage;
  return <Image source={imageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 400
  }
});
