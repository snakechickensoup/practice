import { View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  withSpring,
  useSharedValue
} from 'react-native-reanimated';

export default function EmojiSticker({ size, sticker }) {
  const scaleText = useSharedValue(size);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onStart(() => {
      if (scaleText.value !== size * 2) {
        scaleText.value = scaleText.value * 2;
      } else {
        scaleText.value = Math.round(scaleText.value / 2);
      }
    });

  const drag = Gesture.Pan().onChange((evt) => {
    translateX.value += evt.changeX;
    translateY.value += evt.changeY;
  });

  const containerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value }
      ]
    };
  });

  const textStyle = useAnimatedStyle(() => {
    return {
      fontSize: withSpring(scaleText.value)
    };
  });

  return (
    <GestureDetector gesture={drag}>
      <Animated.View style={[containerStyle, { top: -360 }]}>
        <GestureDetector gesture={doubleTap}>
          <Animated.Text style={[textStyle, { fontSize: size }]}>
            {sticker}
          </Animated.Text>
        </GestureDetector>
      </Animated.View>
    </GestureDetector>
  );
}
