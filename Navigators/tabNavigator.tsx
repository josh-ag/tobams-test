import {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, StyleSheet, Keyboard, TouchableOpacity} from 'react-native';
import {HomeScreen} from '../screens';
import {MenuScreen} from '../screens/menuScreen';
import {CartScreen} from '../screens/cartScreen';
import {AccountScreen} from '../screens/accountScreen';
import Icon from 'react-native-vector-icons/Feather';
import Svg, {Path} from 'react-native-svg';

// init tab navigator
const Tab = createBottomTabNavigator();

const TabBarComponent = ({state, descriptors, navigation}: any) => {
  return (
    <View style={[styles.tabBarStyle]}>
      {state.routes.map((route: any, index: number) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        // make icons base on route name
        const tabBarIcon =
          route.name === 'Home' ? (
            <Svg
              width="22"
              height="21"
              viewBox="0 0 22 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <Path
                d="M1.25 10.5L10.204 1.54499C10.4151 1.33426 10.7012 1.2159 10.9995 1.2159C11.2978 1.2159 11.5839 1.33426 11.795 1.54499L20.75 10.5M3.5 8.24999V18.375C3.5 18.996 4.004 19.5 4.625 19.5H8.75V14.625C8.75 14.004 9.254 13.5 9.875 13.5H12.125C12.746 13.5 13.25 14.004 13.25 14.625V19.5H17.375C17.996 19.5 18.5 18.996 18.5 18.375V8.24999M7.25 19.5H15.5"
                stroke={isFocused ? '#DB3C25' : '#858585'}
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </Svg>
          ) : route.name === 'Menu' ? (
            <Svg
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill={isFocused ? '#DB3C25' : 'transparent'}
              xmlns="http://www.w3.org/2000/svg">
              <Path
                d="M0.75 3.5C0.75 2.90326 0.987053 2.33097 1.40901 1.90901C1.83097 1.48705 2.40326 1.25 3 1.25H5.25C5.84674 1.25 6.41903 1.48705 6.84099 1.90901C7.26295 2.33097 7.5 2.90326 7.5 3.5V5.75C7.5 6.34674 7.26295 6.91903 6.84099 7.34099C6.41903 7.76295 5.84674 8 5.25 8H3C2.40326 8 1.83097 7.76295 1.40901 7.34099C0.987053 6.91903 0.75 6.34674 0.75 5.75V3.5ZM0.75 13.25C0.75 12.6533 0.987053 12.081 1.40901 11.659C1.83097 11.2371 2.40326 11 3 11H5.25C5.84674 11 6.41903 11.2371 6.84099 11.659C7.26295 12.081 7.5 12.6533 7.5 13.25V15.5C7.5 16.0967 7.26295 16.669 6.84099 17.091C6.41903 17.5129 5.84674 17.75 5.25 17.75H3C2.40326 17.75 1.83097 17.5129 1.40901 17.091C0.987053 16.669 0.75 16.0967 0.75 15.5V13.25ZM10.5 3.5C10.5 2.90326 10.7371 2.33097 11.159 1.90901C11.581 1.48705 12.1533 1.25 12.75 1.25H15C15.5967 1.25 16.169 1.48705 16.591 1.90901C17.0129 2.33097 17.25 2.90326 17.25 3.5V5.75C17.25 6.34674 17.0129 6.91903 16.591 7.34099C16.169 7.76295 15.5967 8 15 8H12.75C12.1533 8 11.581 7.76295 11.159 7.34099C10.7371 6.91903 10.5 6.34674 10.5 5.75V3.5ZM10.5 13.25C10.5 12.6533 10.7371 12.081 11.159 11.659C11.581 11.2371 12.1533 11 12.75 11H15C15.5967 11 16.169 11.2371 16.591 11.659C17.0129 12.081 17.25 12.6533 17.25 13.25V15.5C17.25 16.0967 17.0129 16.669 16.591 17.091C16.169 17.5129 15.5967 17.75 15 17.75H12.75C12.1533 17.75 11.581 17.5129 11.159 17.091C10.7371 16.669 10.5 16.0967 10.5 15.5V13.25Z"
                stroke={isFocused ? '#DB3C25' : '#858585'}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </Svg>
          ) : route.name === 'Cart' ? (
            <Svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill={isFocused ? '#DB3C25' : 'transparent'}
              xmlns="http://www.w3.org/2000/svg">
              <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.5 4.5V5.25H3.513C2.553 5.25 1.749 5.974 1.648 6.929L0.384998 18.929C0.357528 19.1903 0.3853 19.4545 0.466513 19.7045C0.547726 19.9544 0.680566 20.1844 0.856417 20.3797C1.03227 20.575 1.2472 20.7311 1.48728 20.838C1.72736 20.9448 1.98721 21 2.25 21H17.75C18.0128 21 18.2726 20.9448 18.5127 20.838C18.7528 20.7311 18.9677 20.575 19.1436 20.3797C19.3194 20.1844 19.4523 19.9544 19.5335 19.7045C19.6147 19.4545 19.6425 19.1903 19.615 18.929L18.352 6.929C18.3036 6.46815 18.0862 6.04155 17.7418 5.73151C17.3974 5.42146 16.9504 5.24993 16.487 5.25H14.5V4.5C14.5 3.30653 14.0259 2.16193 13.182 1.31802C12.3381 0.474106 11.1935 0 10 0C8.80652 0 7.66193 0.474106 6.81802 1.31802C5.9741 2.16193 5.5 3.30653 5.5 4.5ZM10 1.5C9.20435 1.5 8.44129 1.81607 7.87868 2.37868C7.31607 2.94129 7 3.70435 7 4.5V5.25H13V4.5C13 3.70435 12.6839 2.94129 12.1213 2.37868C11.5587 1.81607 10.7956 1.5 10 1.5ZM7 9.75C7 10.5456 7.31607 11.3087 7.87868 11.8713C8.44129 12.4339 9.20435 12.75 10 12.75C10.7956 12.75 11.5587 12.4339 12.1213 11.8713C12.6839 11.3087 13 10.5456 13 9.75V9C13 8.80109 13.079 8.61032 13.2197 8.46967C13.3603 8.32902 13.5511 8.25 13.75 8.25C13.9489 8.25 14.1397 8.32902 14.2803 8.46967C14.421 8.61032 14.5 8.80109 14.5 9V9.75C14.5 10.9435 14.0259 12.0881 13.182 12.932C12.3381 13.7759 11.1935 14.25 10 14.25C8.80652 14.25 7.66193 13.7759 6.81802 12.932C5.9741 12.0881 5.5 10.9435 5.5 9.75V9C5.5 8.80109 5.57902 8.61032 5.71967 8.46967C5.86032 8.32902 6.05109 8.25 6.25 8.25C6.44891 8.25 6.63968 8.32902 6.78033 8.46967C6.92098 8.61032 7 8.80109 7 9V9.75Z"
                fill={isFocused ? '#DB3C25' : 'transparent'}
                stroke={isFocused ? 'transparent' : '#858585'}
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </Svg>
          ) : (
            <Icon
              name={'user'}
              size={24}
              color={isFocused ? '#DB3C25' : '#858585'}
            />
          );

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            activeOpacity={1}
            key={index}
            style={styles.tabBarButton}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
            {tabBarIcon}
            <Text
              style={[
                styles.tabBarText,
                {color: isFocused ? '#DB3C25' : '#858585'},
              ]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export const TabNavigator = () => {
  const [keyboardShown, setKeyboardShown] = useState(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardShown(true);
    });

    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardShown(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <Tab.Navigator
      backBehavior="none"
      initialRouteName="Menu"
      tabBar={
        keyboardShown ? () => null : props => <TabBarComponent {...props} />
      }
      screenOptions={() => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: styles.tabBarStyle,
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Menu" component={MenuScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    flexDirection: 'row',
    height: 83,
    backgroundColor: '#F9F9F9',
    borderTopWidth: 0.2,
    borderRadius: 8,
    borderBottomColor: ' #E1E5E9',
  },

  tabBarButton: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  tabBarText: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
    marginTop: 6,
  },
});
