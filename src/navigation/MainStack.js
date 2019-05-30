import { Easing, Animated } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import FirstScreen from '../pages/FirstScreen';
import SecondScreen from '../pages/SecondScreen';

const MainStack = createStackNavigator(
  {
    FirstScreen: {
      screen: FirstScreen,
      navigationOptions: {
        gesturesEnabled: false,
      },
    },
    SecondScreen: {
      screen: SecondScreen,
      navigationOptions: {
        gesturesEnabled: false,
      },
    },
  },
  {
    headerMode: 'none',
    initialRouteName: 'FirstScreen',
    transitionConfig: () => ({
      mode: 'card',
      navigationOptions: params => ({
        gesturesEnabled: true,
        gesturesDirection: 'inverted',
      }),
      transitionSpec: {
        duration: 250,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
        useNativeDriver: true,
      },
      screenInterpolator: (sceneProps) => {
        const { layout, position, scene } = sceneProps;

        const thisSceneIndex = scene.index;
        const width = layout.initWidth;

        const translateX = position.interpolate({
          inputRange: [thisSceneIndex - 1, thisSceneIndex],
          outputRange: [width, 0],
        });

        return { transform: [{ translateX }] };
      },
    }),
  },
);

export default createAppContainer(MainStack);