import { Pressable, StyleSheet, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function CircleButton({ onPress }) {
  return (
    <View style={styles.circleButtonContainer}>
      <Pressable style={styles.circleButton} onPress={onPress}>
        <MaterialIcons name='add' size={36} color='#25292e' />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  circleButtonContainer: {
    width: 80,
    height: 80,
    marginHorizontal: 64,
    borderWidth: 2,
    borderColor: '#ffd33d',
    borderRadius: 40,
    padding: 4
  },
  circleButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    backgroundColor: '#fff'
  }
});
