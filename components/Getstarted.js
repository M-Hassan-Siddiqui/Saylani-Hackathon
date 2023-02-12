import * as React from 'react';
import { Button, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, SafeAreaView, Text, View, TextInput, StyleSheet, Image, email, password, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';


function HomeScreen({ navigation }) {

    const [text, onChangeText] = React.useState("");
    const [number, onChangeNumber] = React.useState(null);

    return (

        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.inner}>
                    <View style={{ flex: 1.5, justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            style={styles.bg_logo}
                            source={require('../assets/images/Logo.png')}
                        />
                        <Text style={styles.h2}>SAYLANI WELFARE</Text>
                        <Text style={styles.h4}>ONLINE DISCOUNT STORE</Text>
                    </View>
                    <View style={{ flex: 0.5 }}>

                    </View>
                    <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity  onPress={() => navigation.navigate('Sign In')}
                        style={styles.auth_button_bg}>
                            <Text style={styles.auth_button_text}>Get Started</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );


}

export default HomeScreen;

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
        marginBottom: 36,
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
    auth_button_text: {
        fontSize: 30,
        color: '#fff',
        padding: 18,
        fontWeight: "600"
    },
    auth_button_bg: {
        backgroundColor: "#61B846",
        borderRadius: 15,
        shadowColor: "#000",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
    }
});