import * as React from 'react';
import { Button, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, SafeAreaView, Text, View, TextInput, StyleSheet, Image, email, password, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';
import DropDownPicker from 'react-native-dropdown-picker';
import ImagePicker from 'react-native-image-picker';
import { useState } from 'react';
export default function App() {
  const [Item_Name, onChangeName] = React.useState("");
  const [UnitName, onChangeUnitName] = React.useState("");
  const [Item_Descrip, onChangeDescrip] = React.useState("");
  const [UnitPrice, onChangeUnitPrice] = React.useState("");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
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
            <Text style={styles.h4_Tophead}>Add New Item</Text>
          </View>
          <View style={{ height: "90%" }}>
           
            <TextInput
              style={styles.Input}
              onChangeText={onChangeName}
              value={Item_Name}
              placeholder="Item Name"
              keyboardType="text"
            />

            <DropDownPicker
              style={{
                height: 5,
                borderRadius: 17,
                backgroundColor: "#D9D9D9",
                paddingLeft: 15,
                paddingRight: 15,
                marginTop: 10,
                marginBottom: 50,
              }}
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
            />

            <TextInput
              multiline={true}
              numberOfLines={8}
              onChangeText={onChangeDescrip}
              value={Item_Descrip}
              placeholder="Describe this Item"
              keyboardType="text"
              style={styles.Input_area} />


            <View style={{ flexDirection: 'row', }}>
              <View style={{ width: "50%" }}>
                <Text style={styles.h4_Tophead}>Unit Name:</Text>
              </View>
              <View style={{ width: "50%" }}>
                <TextInput
                  style={styles.Input}
                  onChangeText={onChangeUnitName}
                  value={UnitName}
                  placeholder="Pcs./Kg/Dozen"
                  keyboardType="text"
                />
              </View>
            </View>

            <View style={{ flexDirection: 'row', }}>
              <View style={{ width: "50%" }}>
                <Text style={styles.h4_Tophead}>Unit Price:</Text>
              </View>
              <View style={{ width: "50%" }}>
                <TextInput
                  style={styles.Input}
                  onChangeText={onChangeUnitPrice}
                  value={UnitPrice}
                  placeholder="PKR 100"
                  keyboardType="text"
                />
              </View>
            </View>

            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 25 }}>
              <TouchableOpacity style={styles.auth_button_bg}>
                <Text style={styles.auth_button_text}>Add Products</Text>
              </TouchableOpacity>
            </View>

          </View>


          {/* <View style={styles.catebox}>
            <View>
            <Image
                source={require('./assets/images/Email.png')} 
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
          </View> */}

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
    marginHorizontal: 1,
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
    padding: 10,
    paddingLeft: 35,
    paddingRight: 35,
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
});