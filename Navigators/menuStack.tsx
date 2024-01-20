import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MenuScreen} from '../screens/menuScreen';
import {ProductDetailsScreen} from '../screens/productDetailScreen';

const NativeStack = createNativeStackNavigator();

export const MenuStack = () => (
  <NativeStack.Navigator
    screenOptions={{
      headerShown: false,
      animationTypeForReplace: 'push',
      statusBarAnimation: 'slide',
      animation: 'slide_from_right',
    }}>
    <NativeStack.Screen name="Menu#" component={MenuScreen} />
    <NativeStack.Screen
      name="ProductDetails"
      component={ProductDetailsScreen}
    />
  </NativeStack.Navigator>
);
