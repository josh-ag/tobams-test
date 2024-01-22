import {useContext} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  StatusBar,
} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {AppContext} from '../context/appContext';
import {MenuType} from '../types';

const HeaderComponent = ({navigation}: any) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity style={styles.headerButton} onPress={navigation.goBack}>
        <Svg
          width="7"
          height="11"
          viewBox="0 0 7 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.79001 0.230017C5.92784 0.373276 6.00315 0.565395 5.9994 0.764157C5.99565 0.962918 5.91314 1.15206 5.77001 1.29002L1.83201 5.00002L5.77001 8.71002C5.84435 8.77745 5.9044 8.85913 5.9466 8.9502C5.98881 9.04127 6.0123 9.13988 6.01569 9.2402C6.01908 9.34052 6.00229 9.44049 5.96634 9.53421C5.93038 9.62792 5.87598 9.71346 5.80635 9.78576C5.73673 9.85806 5.6533 9.91565 5.56102 9.95512C5.46873 9.99458 5.36945 10.0151 5.26908 10.0155C5.16871 10.0159 5.06928 9.99616 4.97668 9.95743C4.88408 9.91869 4.8002 9.86176 4.73001 9.79002L0.230008 5.54002C0.157421 5.47005 0.0996844 5.38618 0.0602489 5.29339C0.0208133 5.20061 0.000488281 5.10083 0.000488281 5.00002C0.000488281 4.8992 0.0208133 4.79942 0.0602489 4.70664C0.0996844 4.61386 0.157421 4.52998 0.230008 4.46002L4.73001 0.210017C4.87327 0.0721872 5.06539 -0.0031283 5.26415 0.000621912C5.46291 0.00437213 5.65205 0.0868812 5.79001 0.230017Z"
            fill="#131313"
          />
        </Svg>
      </TouchableOpacity>
      <Text
        style={[
          styles.headerText,
          {textAlign: 'center', flex: 1, marginRight: 24},
        ]}>
        Cart
      </Text>
    </View>
  );
};

const CartItemComponent = ({item}: {item: MenuType}) => {
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 24,
      }}>
      <Image
        source={item.images[0]}
        resizeMode="contain"
        style={styles.image}
      />

      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}>
          <Text
            style={[
              styles.text,
              {fontSize: 14, fontWeight: '500', fontFamily: 'Poppins-Medium'},
            ]}>
            {item.name}
          </Text>
          {item?.variant && (
            <Text
              numberOfLines={1}
              style={[styles.text, {color: '#4A4A4A', fontWeight: '400'}]}>
              {item.variant}
            </Text>
          )}
        </View>
        <Text
          style={[
            styles.text,
            {
              fontSize: 14,
              fontWeight: '500',
              fontFamily: 'Poppins-Medium',
              color: '#DB3C25',
              marginVertical: 6,
            },
          ]}>
          &#163;{item.amount}
        </Text>
        <TouchableOpacity activeOpacity={1}>
          <Svg
            width="18"
            height="22"
            viewBox="0 0 18 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <Path
              d="M11.74 8L11.394 17M6.606 17L6.26 8M16.228 4.79C16.57 4.842 16.91 4.897 17.25 4.956M16.228 4.79L15.16 18.673C15.1164 19.2382 14.8611 19.7662 14.445 20.1512C14.029 20.5363 13.4829 20.7502 12.916 20.75H5.084C4.5171 20.7502 3.97102 20.5363 3.55498 20.1512C3.13894 19.7662 2.88359 19.2382 2.84 18.673L1.772 4.79M16.228 4.79C15.0739 4.61552 13.9138 4.4831 12.75 4.393M1.772 4.79C1.43 4.841 1.09 4.896 0.75 4.955M1.772 4.79C2.92613 4.61552 4.08623 4.4831 5.25 4.393M12.75 4.393V3.477C12.75 2.297 11.84 1.313 10.66 1.276C9.55362 1.24064 8.44638 1.24064 7.34 1.276C6.16 1.313 5.25 2.298 5.25 3.477V4.393M12.75 4.393C10.2537 4.20008 7.74628 4.20008 5.25 4.393"
              stroke="#4A4A4A"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </Svg>
        </TouchableOpacity>
      </View>

      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'column',
        }}>
        <TouchableOpacity
          activeOpacity={1}
          style={{
            width: 32,
            height: 32,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 1,
            padding: 23,
            borderRadius: 8,
            borderColor: '#E1E5E9',
            backgroundColor: '#fff',
          }}>
          <Svg
            width="18"
            height="2"
            viewBox="0 0 18 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <Path
              d="M16.5 1H1.5"
              stroke="#151515"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </Svg>
        </TouchableOpacity>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={[styles.text]}>1</Text>
        </View>
        <TouchableOpacity
          activeOpacity={1}
          style={{
            width: 32,
            height: 32,
            borderWidth: 1,
            padding: 23,
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: '#E1E5E9',
            backgroundColor: '#fff',
          }}>
          <Svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <Path
              d="M6 1V11M11 6H1"
              stroke="#151515"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </Svg>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// @Menu Screen
export const CartScreen = ({navigation}: any) => {
  const {carts} = useContext(AppContext);

  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#f9f9f9'} />
      <SafeAreaView style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}>
          <HeaderComponent navigation={navigation} />

          <View style={styles.contentContainer}>
            {carts.map((cartItem: MenuType, index: number) => (
              <CartItemComponent key={cartItem.id} item={cartItem} />
            ))}

            <View style={{marginVertical: 32, width: '100%'}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '100%',
                  marginBottom: 10,
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text
                    style={[
                      styles.text,
                      {
                        fontWeight: '500',
                        fontFamily: 'Poppins-Medium',
                        color: '#151515',
                      },
                    ]}>
                    Total
                  </Text>
                  <Text style={styles.text}> (3 items)</Text>
                </View>

                <Text
                  style={[
                    styles.text,
                    {
                      fontWeight: '500',
                      fontFamily: 'Poppins-Medium',
                      color: '#151515',
                    },
                  ]}>
                  &#163;90
                </Text>
              </View>

              <TouchableOpacity
                style={[styles.menuItemButton, {width: '100%'}]}
                activeOpacity={1}>
                <Text
                  style={[
                    styles.text,
                    {color: '#fff', fontFamily: 'Poppins-Medium'},
                  ]}>
                  Checkout - &#163;90
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

// @style rules
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#F9F9F9'},

  scrollContainer: {width: '100%'},
  image: {
    alignSelf: 'center',
    marginBottom: 8,
    width: 92,
    height: 92,
  },

  headerContainer: {
    height: 72,
    paddingHorizontal: '5%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomColor: '#E1E5E9',
    borderBottomWidth: 1,
  },

  headerText: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    textAlign: 'center',
    color: '#151515',
  },

  accordionContainer: {marginVertical: 24},

  headerButton: {
    width: 36,
    height: 36,
    borderRadius: 8,
    padding: 8,
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: '#E1E5E9',
    alignItems: 'center',
    justifyContent: 'center',
  },

  contentContainer: {
    width: '90%',
    paddingTop: 16,
    alignItems: 'center',
    alignSelf: 'center',
    // backgroundColor: '#fff',
  },

  menuItemHeader: {flex: 1, flexDirection: 'row', justifyContent: 'flex-end'},

  menuItem: {
    width: '100%',
    borderRadius: 8,
    marginBottom: 16,
  },
  itemTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuItemButton: {
    flexDirection: 'row',
    backgroundColor: '#DB3C25',
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    paddingVertical: 12,
    borderRadius: 50,
  },

  text: {
    color: '#151515',
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    fontSize: 14,
  },
});
