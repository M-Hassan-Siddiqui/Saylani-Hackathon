import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ItemsAddScreen from './components/AddNewItem';
import { Button, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, SafeAreaView, Text, View, TextInput, StyleSheet, Image, email, password, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';

function LoginScreen({ navigation }) {

    const [Email, onChangeEmail] = React.useState("");
    const [Pass, onChangePass] = React.useState("");
    return (

        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.inner}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.h2}>SAYLANI WELFARE</Text>
                        <Text style={styles.h4}>ONLINE DISCOUNT STORE</Text>
                    </View>
                    <View style={{}}>



                        <View style={styles.inputSectionStyle}>
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeEmail}
                                value={Email}
                                placeholder="Email"
                                keyboardType="email-address"
                            />
                            <Image
                                source={require('../assets/images/Email.png')} //Change your icon image here
                                style={{
                                    padding: 10,
                                    margin: 5,
                                    height: 25,
                                    width: 30,
                                    resizeMode: 'stretch',
                                    alignItems: 'center',
                                }}
                            />
                        </View>

                        <View style={styles.inputSectionStyle}>
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangePass}
                                value={Pass}
                                placeholder="Password"
                                keyboardType="visible-password"
                            />
                            <Image
                                source={require('../assets/images/Password.png')} //Change your icon image here
                                style={{
                                    padding: 10,
                                    margin: 5,
                                    height: 25,
                                    width: 35,
                                    resizeMode: 'stretch',
                                    alignItems: 'center',
                                }}
                            />
                        </View>
                        <Text style={styles.h6_Forgetpass}>Forgot Password?</Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity style={styles.auth_button_bg} 
                        onPress={() => navigation.push('Add Items')}>
                            <Text style={styles.auth_button_text}>Sign In</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Sign up')}>
                        <Text style={styles.h6}>Don't have account? Rigister</Text>
            </TouchableOpacity>
                        
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );


}


function TabNavigator() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Add Items" component={ItemsAddScreen} />
      </Tab.Navigator>
    );
  }


export default LoginScreen;


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
    input: {
        flex: 1,
        padding: -5,
    },
    inputSectionStyle: {
        flexDirection: 'row',
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginBottom: 30,
        width: "90%",
        justifyContent: "center",
        left: 15,
    },
    h6_Forgetpass: {
        fontSize: 15,
        color: "#024F9D",
        fontWeight: "500",
        lineHeight: 50,
        marginTop: -25,
        left: 15,
    }
});