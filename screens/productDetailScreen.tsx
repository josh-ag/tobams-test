import {useRef, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  StatusBar,
  LogBox,
} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {MenuType} from '../types';
import Carousel from 'react-native-snap-carousel';
import {List} from 'react-native-paper';

// @ignore all logs
LogBox.ignoreAllLogs();

// product details Header Component
const HeaderComponent = ({navigation}: any) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.headerButton}
        onPress={navigation.goBack}>
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
    </View>
  );
};

// accordion lists
const lists = [
  {title: 'Ingredient', id: 1},
  {title: 'Nutritional Information', id: 2},
  {title: 'How to Prepare', id: 3},
  {title: 'Dietary Information', id: 4},
  {title: 'Storage Information', id: 5},
  {title: 'Extra', id: 6},
];

// @Product card component
const ProductDetailsCard = ({item}: {item: MenuType}) => {
  const [activeSlide, setActiveSlide] = useState(0);

  // @carousel refs
  const carouselRefs = useRef(null);
  //render carousel image
  const _renderItem = ({item, index}: any) => {
    return (
      <View style={{flex: 1}} key={index}>
        <Image source={item} resizeMode="contain" style={styles.image} />
      </View>
    );
  };

  const RenderTruncatedText = ({text}: {text: string}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const truncatedText = isExpanded ? text : `${text.substring(0, 100)}...`;

    return (
      <View style={styles.truncatedTextContainer}>
        <Text
          style={[
            styles.text,
            {
              fontWeight: '400',
              fontFamily: 'Poppins-Regular',
              fontSize: 12,
              color: '#4A4A4A',
              lineHeight: 18,
            },
          ]}>
          {truncatedText}
          {!isExpanded && (
            // <TouchableOpacity
            //   activeOpacity={1}
            //   onPress={() => setIsExpanded(true)}>
            <Text
              onPress={() => setIsExpanded(true)}
              style={[
                styles.text,
                {
                  color: '#DB3C25',
                  fontWeight: '500',
                  fontFamily: 'Poppins-Regular',
                  fontSize: 12,
                  lineHeight: 18,
                  paddingLeft: 4,
                },
              ]}>
              Read more
            </Text>
          )}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.contentContainer}>
      <Carousel
        ref={(c: any) => (carouselRefs.current = c)}
        loop
        data={Array.from(item.images)}
        renderItem={_renderItem}
        sliderWidth={304}
        itemWidth={304}
        sliderHeight={304}
        itemHeight={304}
        onSnapToItem={index => setActiveSlide(index)}
      />
      <View style={styles.dots}>
        {item.images.map((_, i) => (
          <TouchableOpacity
            activeOpacity={1}
            key={i}
            onPress={() => carouselRefs.current.snapToItem(i)}>
            <Text style={activeSlide === i ? styles.dotActive : styles.dot}>
              ⬤
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.menuItem}>
        <View style={{marginVertical: 16}}>
          <View style={[styles.itemTextContainer, {marginBottom: 6}]}>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={[
                styles.text,
                {
                  fontWeight: '500',
                  fontFamily: 'Poppins-Medium',
                  fontSize: 16,
                  width: '70%',
                  lineHeight: 24,
                  color: '#151515',
                },
              ]}>
              {item.name}
            </Text>
            <Text
              style={[
                styles.text,
                {
                  color: '#DB3C25',
                  fontSize: 16,
                  fontFamily: 'Poppins-Medium',
                  fontWeight: '500',
                },
              ]}>
              &#163;{item.amount}
            </Text>
          </View>

          <RenderTruncatedText text={item.details} />
        </View>

        <View style={styles.accordionContainer}>
          <List.AccordionGroup>
            {lists.map((list: any) => (
              <List.Accordion
                rippleColor={'transparent'}
                titleStyle={{
                  fontFamily: 'Poppins-Medium',
                  fontSize: 14,
                  fontWeight: '500',
                  color: '#151515',
                }}
                style={styles.list}
                title={list.title}
                id={list.id}
                key={list.id}>
                <List.Item
                  titleStyle={{
                    fontWeight: '400',
                    fontFamily: 'Poppins-Regular',
                    fontSize: 12,
                    color: '#4A4A4A',
                    lineHeight: 18,
                  }}
                  titleNumberOfLines={4}
                  title={
                    'List.Accordion can be wrapped because implementation uses React.Context.'
                  }
                />
              </List.Accordion>
            ))}
          </List.AccordionGroup>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 24,
          }}>
          <TouchableOpacity
            activeOpacity={1}
            style={{
              width: 48,
              alignItems: 'center',
              justifyContent: 'center',
              height: 48,
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
                stroke="#E1E5E9"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </Svg>
          </TouchableOpacity>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={[styles.text]}>1</Text>
          </View>
          <TouchableOpacity
            activeOpacity={1}
            style={{
              width: 48,
              height: 48,
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
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </Svg>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.menuItemButton} activeOpacity={1}>
          <Svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <Path
              d="M15.8569 10.8843V6.38434C15.8569 5.38978 15.4618 4.43595 14.7586 3.73269C14.0553 3.02943 13.1015 2.63434 12.1069 2.63434C11.1124 2.63434 10.1585 3.02943 9.45527 3.73269C8.75201 4.43595 8.35692 5.38978 8.35692 6.38434V10.8843M19.7129 8.89134L20.9759 20.8913C21.0459 21.5563 20.5259 22.1343 19.8569 22.1343H4.35692C4.19913 22.1345 4.04306 22.1015 3.89887 22.0374C3.75467 21.9733 3.62557 21.8796 3.51994 21.7624C3.41432 21.6452 3.33453 21.507 3.28577 21.357C3.23701 21.2069 3.22037 21.0483 3.23692 20.8913L4.50092 8.89134C4.53007 8.6149 4.66054 8.35904 4.86717 8.1731C5.07379 7.98715 5.34194 7.88429 5.61992 7.88434H18.5939C19.1699 7.88434 19.6529 8.31934 19.7129 8.89134ZM8.73192 10.8843C8.73192 10.9838 8.69241 11.0792 8.62208 11.1495C8.55176 11.2198 8.45637 11.2593 8.35692 11.2593C8.25746 11.2593 8.16208 11.2198 8.09175 11.1495C8.02143 11.0792 7.98192 10.9838 7.98192 10.8843C7.98192 10.7849 8.02143 10.6895 8.09175 10.6192C8.16208 10.5488 8.25746 10.5093 8.35692 10.5093C8.45637 10.5093 8.55176 10.5488 8.62208 10.6192C8.69241 10.6895 8.73192 10.7849 8.73192 10.8843ZM16.2319 10.8843C16.2319 10.9838 16.1924 11.0792 16.1221 11.1495C16.0518 11.2198 15.9564 11.2593 15.8569 11.2593C15.7575 11.2593 15.6621 11.2198 15.5918 11.1495C15.5214 11.0792 15.4819 10.9838 15.4819 10.8843C15.4819 10.7849 15.5214 10.6895 15.5918 10.6192C15.6621 10.5488 15.7575 10.5093 15.8569 10.5093C15.9564 10.5093 16.0518 10.5488 16.1221 10.6192C16.1924 10.6895 16.2319 10.7849 16.2319 10.8843Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </Svg>

          <Text
            style={[
              styles.text,
              {color: '#fff', marginLeft: 6.67, fontSize: 12},
            ]}>
            Add To Cart
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.menuItemButton,
            {
              borderColor: '#DB3C25',
              backgroundColor: 'transparent',
              borderWidth: 1,
              marginTop: 16,
            },
          ]}
          activeOpacity={1}>
          <Text
            style={[
              styles.text,
              {
                color: '#DB3C25',
                fontSize: 14,
                fontWeight: '500',
                fontFamily: 'Poppins-Medium',
              },
            ]}>
            Subscribe to a Plan
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// @Menu Screen
export const ProductDetailsScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const {item} = route.params;

  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#f9f9f9'} />
      <SafeAreaView style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}>
          <HeaderComponent navigation={navigation} />

          <ProductDetailsCard item={item} />
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
    width: 327,
    height: 304,
  },

  headerContainer: {
    width: '100%',
    height: 72,
    paddingHorizontal: '5%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  accordionContainer: {marginVertical: 24},

  list: {
    backgroundColor: '#fff',
    borderColor: '#E1E5E9',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
  },

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
    marginTop: 16,
    borderRadius: 16,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  //@carousel dots styles
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  dot: {
    margin: 5,
    color: '#D9D9D9',
  },

  dotActive: {
    margin: 5,
    color: '#DB3C25',
  },

  truncatedTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
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
    fontWeight: '500',
    fontSize: 14,
  },
});
