import { useState } from 'react';
import { FlatList, Platform, Pressable, StyleSheet, Text } from 'react-native';

export default function EmojiList({ onSelect, onCloseModal }) {
  const [emoji] = useState(['🤏', '🤭', '👽', '😈', '🥹']);

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === 'ios'}
      data={emoji}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item, index }) => (
        <Pressable
          onPress={() => {
            onSelect(item);
            onCloseModal();
          }}>
          <Text key={index} style={styles.image}>
            {item}
          </Text>
        </Pressable>
      )}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 16
  }
});
