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

    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.inner}>
          <View>
            <Text style={styles.h4_Tophead}>Orders</Text>
          </View>

          <View style={{ borderBottomWidth:1 , borderBottomColor:"grey" }}>
            <Text style={styles.h4_orderead}>Zamam mailk</Text>
            <View style={styles.inputSectionStyle}>
              <View style={{ flex: 1 }}>
                <Text style={styles.h4_timennum_1st}>just-now</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.h4_timennum_2nd}>033020203030</Text>
              </View>
            </View>
            <Text style={styles.h4_items}>Orders</Text>
            <Text style={styles.h4_items}>Orders</Text>
            <View style={styles.inputSectionStyle}>
              <View style={{ flex: 1 }}>
                <Text style={{
                  fontSize: 17,
                  color: "black",
                  fontWeight: "600",
                  textAlign: "left",
                }}>Total</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{
                  fontSize: 17,
                  color: "#61B846",
                  fontWeight: "600",
                  textAlign: "right",
                }}>PKR 200</Text>
              </View>
            </View>
           <View>
           <DropDownPicker
              style={{
                borderRadius: 17,
                backgroundColor: "#D9D9D9",
                paddingLeft: 15,
                paddingRight: 15,
                marginTop: 10,
                marginBottom: 25,
              }}
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
            />
           </View>
          </View>



        </View>
      </ScrollView>
    </SafeAreaView>

  );


}



const styles = StyleSheet.create({
  inputSectionStyle: {
    flexDirection: 'row',
    width: "90%",
    justifyContent: "center",
  },
  h4_items: {
    fontSize: 14,
    color: "grey",
    fontWeight: "500",
  },
  h4_timennum_1st: {
    fontSize: 12,
    color: "black",
    fontWeight: "500",
    textAlign: "left"
  },
  h4_timennum_2nd: {
    fontSize: 12,
    color: "black",
    fontWeight: "500",
    textAlign: "right",
  },
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
  profile_img: {

    borderRadius: 100,
    width: 120,
    height: 120,
    left: 2,
    top: 2,
  },
  profile_img_div: {
    borderColor: "#61B846",
    borderRadius: 100,
    borderWidth: 3,
    width: 150,
    height: 150,
    padding: 10,
  },
  h3: {
    textAlign: "center",
    fontSize: 25,
    color: "#024F9D",
    fontWeight: "600",
    lineHeight: 50,
  },
  h4_orderead: {
    fontSize: 25,
    color: "black",
    fontWeight: "300",
    lineHeight: 50,
  }
});