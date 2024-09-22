import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function EmojiPicker({ isVisible, children, onClose }) {
  return (
    <Modal animationType='slide' transparent={true} visible={isVisible}>
      <View style={styles.modalContent}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>스티커 선택</Text>
          <Pressable onPress={onClose}>
            <MaterialIcons name='close' color='#fff' size={24} />
          </Pressable>
        </View>
        {children}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    height: '25%',
    width: '100%',
    backgroundColor: '#25292e',
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    position: 'absolute',
    bottom: 0
  },
  titleContainer: {
    height: '20%',
    backgroundColor: '#464C55',
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    color: '#fff',
    fontSize: 16
  }
});
