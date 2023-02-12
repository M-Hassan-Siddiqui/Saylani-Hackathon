import * as React from 'react';
import { Button, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, SafeAreaView, Text, View, TextInput, StyleSheet, Image, email, password, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';
import DropDownPicker from 'react-native-dropdown-picker';
import ImagePicker from 'react-native-image-picker';
import { useState } from 'react';
export default function App() {

  const [NewCate, onChangeNewCate] = React.useState("");

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [Name, onChangeName] = React.useState("");
  const [items, setItems] = useState([
    { label: 'Meat', value: 'meat' },
    { label: 'Vagetable', value: 'vagetable' }
  ]);
  return (


    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View>
            <Text style={styles.h3}>Settings</Text>
          </View>
          <View style={{ height: "90%" }}>

            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <View  style={styles.profile_img_div}>
              <Image
                style={styles.profile_img}
                source={require('../assets/images/demoProfilepic.png')}
              />
              </View>

              <View style={styles.inputSectionStyle}>
              <TextInput
                style={styles.input}
                onChangeText={onChangeName}
                value={Name}
                placeholder="Full Name"
                keyboardType="text"
              />
                <Image
                  source={require('../assets/images/check.png')} //Change your icon image here
                  style={{
                    padding: 10,
                    margin: 5,
                    height: 5,
                    width: 25,
                    resizeMode: 'stretch',
                    alignItems: 'center',
                  }}
                />
              </View>
            </View>

            <View style={{ flexDirection: 'row', }}>
              <View style={{ width: "75%" }}>
                <TextInput
                  style={styles.Input}
                  onChangeText={onChangeNewCate}
                  value={NewCate}
                  placeholder="new category name"
                  keyboardType="text"
                />
              </View>
              <View style={{ width: "25%", justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity style={styles.auth_button_bg_sm}>
                  <Text style={styles.auth_button_text_sm}>Add</Text>
                </TouchableOpacity>
              </View>
            </View>


            <View style={styles.inner}>
              <View>
                <Text style={styles.h4_Tophead}>All Categories</Text>
              </View>
              <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                  <View style={styles.catebox}>
                    <View>
                      <Image
                        source={require('../assets/images/vegitables.png')}
                        style={{
                          padding: 5,
                          margin: 2,
                          height: 35,
                          width: 60,
                          resizeMode: 'stretch',
                          alignItems: 'center',
                        }}
                      />


                    </View>
                    <View style={{ width: "50%" }}>
                      <Text style={{
                        left: 5,
                        fontSize: 18,
                        color: "#61B846",
                        fontWeight: "500",
                        lineHeight: 37,
                      }}>Vegetables</Text>
                    </View>
                  </View>

                </ScrollView>
              </SafeAreaView>



            </View>


            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 25 }}>
              <TouchableOpacity style={styles.auth_button_bg}>
                <Text style={styles.auth_button_text}>Logout</Text>
              </TouchableOpacity>
            </View>

          </View>

        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
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
  Input: {
    height: 40,
    borderRadius: 15,
    backgroundColor: "#D9D9D9",
    marginBottom: 0,
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 10,
    marginBottom: 10,
  },
  Input_area: {
    borderRadius: 15,
    backgroundColor: "#D9D9D9",
    marginBottom: 0,
    paddingLeft: 15,
    paddingRight: 15,
    height: 125,
    textAlignVertical: 'top',
    marginTop: 10,
    marginBottom: 10,
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
    marginHorizontal: 3,
  },
  h4_Tophead: {
    left: 15,
    fontSize: 20,
    color: "#024F9D",
    fontWeight: "600",
    lineHeight: 50,
  },
  catebox: {
    backgroundColor: "#FFF",
    borderColor: "#65BD50",
    borderWidth: 2,
    borderRadius: 15,
    shadowColor: "#000",
    margin: 5,
    padding: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    flexDirection: 'row',
  },
  h5_cate_: {
    left: 15,
    fontSize: 20,
    color: "#024F9D",
    fontWeight: "500",
    lineHeight: 30,
  },
  auth_button_text: {
    fontSize: 30,
    color: '#fff',
    padding: 18,
    paddingLeft: 50,
    paddingRight: 50,
    fontWeight: "600",
  },
  auth_button_bg: {
    backgroundColor: "#61B846",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  auth_button_text_sm: {
    fontSize: 18,
    color: '#fff',
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    fontWeight: "600",
  },
  auth_button_bg_sm: {
    backgroundColor: "#61B846",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  profile_img: {

    borderRadius: 100,
    width: 120,
    height: 120,
    left:2,
    top:2,
  },
  profile_img_div: {
    borderColor: "#61B846",
    borderRadius: 100,
    borderWidth: 3,
    width: 150,
    height: 150,
    padding: 10,
  },
  inputSectionStyle: {
    flexDirection: 'row',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginBottom: 30,
    width:"80%",
    justifyContent:"center",
},
input: {
  flex: 1,
  padding:-5,
},
h3:{
  textAlign:"center",
    fontSize: 25,
    color: "#024F9D",
    fontWeight: "600",
    lineHeight: 50,
}
});