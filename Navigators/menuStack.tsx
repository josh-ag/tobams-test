import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TabNavigator} from './tabNavigator';
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
    <NativeStack.Screen name="Tab" component={TabNavigator} />
    <NativeStack.Screen
      name="ProductDetails"
      component={ProductDetailsScreen}
    />
  </NativeStack.Navigator>
);
