import { Text, View } from 'react-native';

export default function EmojiSticker({ size, sticker }) {
  return (
    <View style={{ top: -360 }}>
      <Text style={{ fontSize: size }}>{sticker}</Text>
    </View>
  );
}
