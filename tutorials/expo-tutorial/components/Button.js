import { Pressable, StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Button({ label, theme, onPress }) {
  if (theme === 'primary') {
    return (
      <View
        style={[
          styles.buttonContainer,
          { borderWidth: 2, borderColor: '#fff', borderRadius: 8 }
        ]}>
        <Pressable
          style={[styles.button, { backgroundColor: '#fff' }]}
          onPress={onPress}>
          <FontAwesome
            name='picture-o'
            size={18}
            color='#25292e'
            style={styles.buttonIcon}
          />
          <Text style={[styles.buttonLabel, { color: '#25292e' }]}>
            {label}
          </Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={[
          styles.button,
          { borderWidth: 1, borderColor: '#fff', borderRadius: 8 }
        ]}
        onPress={onPress}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 360,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16
  },
  button: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  buttonIcon: {
    paddingRight: 8
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16
  }
});
