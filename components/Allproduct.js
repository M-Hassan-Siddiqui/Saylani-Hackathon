import * as React from 'react';
import { Button, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, SafeAreaView, Text, View, TextInput, StyleSheet, Image, email, password, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';

export default function App() {
  return (

    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>
    <View style={styles.inner}>
          <View>
            <Text style={styles.h4_Tophead}>All Products</Text>
          </View>

          <View style={styles.catebox}>
            <View>
            <Image
                source={require('../assets/images/Email.png')} 
                style={{
                  padding: 10,
                  margin: 5,
                  height: 50,
                  width: 50,
                  resizeMode: 'stretch',
                  alignItems: 'center',
                }}
              />
            </View>
            <View  style={{ width:"50%"}}>
            <Text style={{
                left:15,
                fontSize: 20,
                color: "#61B846",
                fontWeight: "500",
                lineHeight: 30,
            }}>Apple</Text>
            <Text style={{
                left:15,
                fontSize: 18,
                color: "grey",
                fontWeight: "500",
                lineHeight: 30,
            }}>1.5kg</Text>
              </View>
              <View>
              <Text style={{
                left:15,
                fontSize: 18,
                color: "grey",
                fontWeight: "500",
                lineHeight: 30,
                textAlign:"right",
                marginTop:15,
            }}>PKR 200</Text>
              </View>
          </View>

          <View style={styles.catebox}>
            <View>
            <Image
                source={require('../assets/images/Email.png')} 
                style={{
                  padding: 10,
                  margin: 5,
                  height: 50,
                  width: 50,
                  resizeMode: 'stretch',
                  alignItems: 'center',
                }}
              />
            </View>
            <View  style={{ width:"50%"}}>
            <Text style={{
                left:15,
                fontSize: 20,
                color: "#61B846",
                fontWeight: "500",
                lineHeight: 30,
            }}>Apple</Text>
            <Text style={{
                left:15,
                fontSize: 18,
                color: "grey",
                fontWeight: "500",
                lineHeight: 30,
            }}>1.5kg</Text>
              </View>
              <View>
              <Text style={{
                left:15,
                fontSize: 18,
                color: "grey",
                fontWeight: "500",
                lineHeight: 30,
                textAlign:"right",
                marginTop:15,
            }}>PKR 200</Text>
              </View>
          </View>

          <View style={styles.catebox}>
            <View>
            <Image
                source={require('../assets/images/Email.png')} 
                style={{
                  padding: 10,
                  margin: 5,
                  height: 50,
                  width: 50,
                  resizeMode: 'stretch',
                  alignItems: 'center',
                }}
              />
            </View>
            <View  style={{ width:"50%"}}>
            <Text style={{
                left:15,
                fontSize: 20,
                color: "#61B846",
                fontWeight: "500",
                lineHeight: 30,
            }}>Apple</Text>
            <Text style={{
                left:15,
                fontSize: 18,
                color: "grey",
                fontWeight: "500",
                lineHeight: 30,
            }}>1.5kg</Text>
              </View>
              <View>
              <Text style={{
                left:15,
                fontSize: 18,
                color: "grey",
                fontWeight: "500",
                lineHeight: 30,
                textAlign:"right",
                marginTop:15,
            }}>PKR 200</Text>
              </View>
          </View>

    </View>
    </ScrollView>
  </SafeAreaView>

  );


}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'space-around',
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 0,
  },
  btnContainer: {
    backgroundColor: 'white',
    marginTop: 12,
  },
  bg_logo: {
    width: 320, height: 250
  },
  h2: {
    fontSize: 38,
    color: "#61B846",
    fontWeight: "700",
    lineHeight: 50,
  },
  h4: {
    fontSize: 20,
    color: "#024F9D",
    fontWeight: "600",
    lineHeight: 50,
  },
  h6: {
    fontSize: 15,
    color: "#024F9D",
    fontWeight: "500",
    lineHeight: 50,
  },
  scrollView: {
    backgroundColor: '#fff',
    marginHorizontal: 1,
  },
  h4_Tophead:{
    left:15,
    fontSize: 20,
    color: "#024F9D",
    fontWeight: "600",
    lineHeight: 50,
  },
  catebox:{
    backgroundColor: "#FFF",
    borderColor:"#65BD50",
    borderWidth:2,
    borderRadius: 15,
    shadowColor: "#000",
    margin:5,
    padding:10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    flexDirection: 'row',
  },
  h5_cate_:{
    left:15,
    fontSize: 20,
    color: "#024F9D",
    fontWeight: "500",
    lineHeight: 30,
  }
});