import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image
} from "react-native";
import React, {useLayoutEffect, useState} from 'react'
import {useNavigation} from "@react-navigation/native";
import {SafeAreaView} from "react-native-safe-area-context";
import {styled} from "nativewind";
import Toast from 'react-native-simple-toast';
import {EyeSlashIcon} from "react-native-heroicons/outline";

const StyledTouch = styled(TouchableOpacity);
const StyledText = styled(Text)
const StyledInput = styled(TextInput)
var urlencoded = new URLSearchParams();
urlencoded.append("email", "pankaj@digitalflake.com");
urlencoded.append("password", "panka23");

var requestOptions = {
    method: 'POST',
    body: urlencoded,
    redirect: 'follow'
};
const Login = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [isWrong, setIsWrong] = useState("not set");

    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({headerShown: false})
    })
    const validatePassword = () => {
        const passwordRegex = /^.{8,}$/;

        if (!passwordRegex.test(password)) {
            setIsWrong("password")
        } else {
            setIsWrong(" ")
        }
    };
    const validateEmail = () => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

        if (!emailRegex.test(userName)) {
            setIsWrong("email")
        } else {
            setIsWrong(" ")
        }
    };
    function handleLogin() {
        if(isWrong==" "){
            Toast.show('Logged In Sucessfully', Toast.SHORT);
            navigation.navigate('Home')
        }
        else{
            Toast.show('Please Check Emain or Password', Toast.SHORT);
        }
        
    }
    function Login() {
        if (isWrong == " ") {
            fetch("https://demo0413095.mockable.io/digitalflake/api/login", requestOptions)
                .then(
                    response => response.text()
                )
                .then(result => console.log(result))
                .catch(error => console.log('error', error));
        }

    }
    return (
        <SafeAreaView
            className="flex w-[100%]  h-[100%]  bg-white justify-evenly items-center">

            <View className="align-top  justify-evenly items-center w-[100%] h-[100%] ">
                {/* Top Section */}
                <View className="items-center">
                    <Image
                        source={require('../assets/df_iconmain.png')}
                        className='w-[100px] h-[100px]    '></Image>
                    <StyledText className="text-[36px] text-black mb-10">Co-working</StyledText>
                </View>
                <View className="w-[80%] ">

                    <StyledText className="text-[20px]   text-[#494949] mb-5">Mobile number or Email</StyledText>
                    <StyledInput
                        onChangeText={(email)=>setUserName(email)}
                        autoComplete="email"
                        onBlur={validateEmail}
                        className="rounded-3xs bg-whitesmoke box-border w-[100%] h-16 border-[1px] border-solid border-gainsboro mb-5 px-5"
                        placeholder=""
                        keyboardType='default'></StyledInput>
                    <StyledText className="text-[20px] leading-tight  text-[#494949] mb-5">Password</StyledText>
                    <View
                        className="flex-row space-x-2 rounded-3xs items-center bg-whitesmoke box-border w-[100%] h-16 border-[1px] border-solid border-gainsboro mb-5 px-5">
                        <StyledInput  onBlur={validatePassword} onChangeText={password=>setPassword(password)} className=" flex-1" placeholder="" keyboardType='default'></StyledInput>
                        <EyeSlashIcon size={25} color={"#A8A8A8"}></EyeSlashIcon>
                    </View>

                </View>
                {/* Bottom Section */}
                <View>
                    <StyledTouch
                        className=" p-5 w-80 bg-[#5167EB] rounded-lg "
                        title="Create An Account"
                        onPress={handleLogin}>
                        <StyledText className="text-[#fff] text-[20px] font-extrabold text-center">Log In</StyledText>
                    </StyledTouch>
                    <View className="flex-row items-center justify-center mt-2">
                        <StyledText>New User ?
                        </StyledText>
                        <StyledText
                            className="text-[14px] text-[#5167EB] underline"
                            onPress={() => navigation.navigate('Register')}>
                            Create an account</StyledText>
                    </View>
                </View>
            </View>

        </SafeAreaView>
    )
}

export default Login