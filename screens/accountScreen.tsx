import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useTheme} from 'react-native-paper';

export const AccountScreen = ({navigation}: any) => {
  const theme = useTheme();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F9F9F9'}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.text}>Account</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// @style rules
const styles = StyleSheet.create({
  scrollContainer: {flex: 1},
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  text: {
    fontWeight: '500',
    fontSize: 18,
    textAlign: 'center',
    color: '#121212',
  },
});
