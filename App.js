import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

export default function App() {
  
  return (
    <View style={styles.containerOuterBox}>
      <StatusBar style="auto" />

    <View style={styles.containerBox}>

      <View style={[styles.container2, styles.shadowProp]}>
      <View style={styles.icon}>
            <Ionicons name="md-checkmark-circle" size={32} color="green" />
          </View>

          <View style={{width: '90%', alignItems: 'center'}}> 
            <Text style={styles.myTextAb}>Record Purchase</Text>
          </View>
      </View>

    
      <View style={[styles.container1, {paddingBottom: 10}]}>
          <View style={styles.icon}>
            <Ionicons name="md-checkmark-circle" size={32} color="green" />
          </View>

          <View style={{width: '90%', alignItems: 'center', paddingLeft: 20}}> 
            <Text style={styles.myText}>Rewards & Benefits</Text>
          </View>
      </View>

      <View style={styles.container1}>
          <View style={styles.icon}>
            <Ionicons name="md-checkmark-circle" size={32} color="green" />
          </View>

          <View style={{width: '90%', alignItems: 'center', paddingLeft: 20}}> 
            <Text style={styles.myText}>Products & Schemes</Text>
          </View>
      </View>

      <View style={[styles.container1, {paddingBottom: 10}]}>
          <View style={styles.icon}>
            <Ionicons name="md-checkmark-circle" size={32} color="green" />
          </View>

          <View style={{width: '85%', alignItems: 'center'}}> 
            <Text style={styles.myText}>Help & Support</Text>
          </View>
      </View>

      <View style={styles.container1}>
          <View style={styles.icon}>
            <Ionicons name="md-checkmark-circle" size={32} color="green" />
          </View>

          <View style={{width: '85%', alignItems: 'center'}}> 
            <Text style={styles.myText}>My Business</Text>
          </View>
      </View>

      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  containerOuterBox: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  containerBox: {
    // borderWidth: 1,
    width: '100%',
    height: Dimensions.get('screen').height/2,
    flexWrap: 'wrap'
  }, 
  container1: {
    borderWidth: 1,
    width: '50%',
    height: '50%',
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#eeeeee',
    borderColor: 'gray'
  },
  container2: {
    width: 140,
    height: 140,
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#fff',
    position: 'absolute',
    zIndex: 1,
    top: '33%',
    left: '31%',
    borderRadius: 100
  },
  myText: {
    marginTop: 5,
    fontSize: 20,
    fontWeight: '700'
  },
  myTextAb: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center'
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -50, height: 40},
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
});
