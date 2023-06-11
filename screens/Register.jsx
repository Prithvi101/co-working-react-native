import {
    Text,

    View,
    TextInput,
    TouchableOpacity
} from "react-native";
import React, {useLayoutEffect, useState} from 'react'
import {useNavigation} from "@react-navigation/native";
import {SafeAreaView} from "react-native-safe-area-context";
import {styled} from "nativewind";
import Toast from 'react-native-simple-toast';

const StyledTouch = styled(TouchableOpacity);
const StyledText = styled(Text)
const StyledInput = styled(TextInput)

var urlencoded = new URLSearchParams();

var requestOptions = {
    method: 'POST',
    body: urlencoded,
    redirect: 'follow'
};

var requestOptions = {
    method: 'POST',
    body: urlencoded,
    redirect: 'follow'
};

const Register = () => {
    const [fname, setName] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [mobile, setMobile] = useState(" ");
    // const [password, setPassword] = useState(" ");
    const [isWrong, setIsWrong] = useState("");

    const validateEmail = () => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

        if (!emailRegex.test(email)) {
            setIsWrong("email")
        } else {
            setIsWrong(" ")
        }
    };

    const validateMobile = () => {
        const mobileRegex = /^\d{10}$/;

        if (!mobileRegex.test(mobile)) {
            setIsWrong("mobile")
        } else {
            setIsWrong(" ")
        }
    };
    {/* FOR PASSWORD */}
    // const validatePassword = () => {   const passwordRegex = /^.{8,}$/;   if
    // (!passwordRegex.test(password)) {     setIsWrong("password")   }   else{
    // setIsWrong(" ")   } };
    function userCreated() {
        Toast.show('Account Created Sucessfully', Toast.LONG);
        navigation.navigate('Home')
    }

    const handleRegistration = () => {
        if (isWrong == " ") {
            var urlencoded = new URLSearchParams();
            urlencoded.append("email", email);
            urlencoded.append("name", fname);
            urlencoded.append("mobile", mobile);
            fetch(
                "https://demo0413095.mockable.io/digitalflake/api/create_account",
                requestOptions
            )
                .then(response => response.text())
                .then(result => userCreated())
                .catch(error => console.log('error', error));

        }
    };

    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({headerShown: false})
    })
    return (
        <SafeAreaView
            className="flex w-[100%]  h-[100%]  bg-white justify-evenly items-center">

            <View className="align-top  justify-evenly items-center w-[100%] h-[100%] ">
                {/* Top Section */}
                <View className="w-[80%] ">
                    <StyledText className="text-[36px] text-black mb-10">{"Create Account"}</StyledText>
                    <StyledText className="text-[20px]   text-[#494949] mb-5">Full Name</StyledText>
                    <StyledInput
                        className={"rounded-3xs bg-whitesmoke box-border w-[100%] h-16 border-[1px] border-solid b" +
                                "order-gainsboro mb-5 px-5 "}
                        placeholder={isWrong == ""
                            ? ""
                            : ""}
                        keyboardType='default'
                        onChangeText={(fname) => setName(fname)}></StyledInput>
                    <StyledText className=" text-[20px] leading-tight  text-[#494949] mb-5">Mobile Number</StyledText>
                    <StyledInput
                        className={"rounded-3xs bg-whitesmoke box-border w-[100%] h-16 border-[1px] border-solid b" +
                                "order-gainsboro mb-5 px-5 " + (
                            isWrong == "mobile"
                                ? "border-red-500"
                                : " "
                        )}
                        placeholder={isWrong == "mobile"
                            ? "Enter Valid Mobile"
                            : ""}
                        onChangeText={(mobile) => setMobile(mobile)}
                        onBlur={validateMobile}
                        keyboardType="number-pad"></StyledInput>
                    <StyledText className="text-[20px] leading-tight  text-[#494949] mb-5">Email ID</StyledText>
                    <StyledInput
                        className={"rounded-3xs bg-whitesmoke box-border  w-[100%] h-16 border-[1px] border-solid " +
                                "border-gainsboro mb-5 px-5 " + (
                            isWrong == "email"
                                ? "border-red-500"
                                : " "
                        )}
                        placeholder={isWrong == "email"
                            ? "Enter Valid Email"
                            : ""}
                        autoComplete="email"
                        keyboardType='default'
                        onChangeText={(email) => setEmail(email)}
                        onBlur={validateEmail}></StyledInput>

                    {/* FOR PASSWORD */}
                    {/* <StyledText className="text-[20px] leading-tight  text-[#494949] mb-5">Password</StyledText>
                    <StyledInput
                        className={"rounded-3xs bg-whitesmoke box-border  w-[100%] h-16   border-[1px] border-solid border-gainsboro mb-5 px-5 " + (isWrong=="password"?"border-red-500":" ")}
                        placeholder={isWrong=="password"?"Password Must be 8 char long":""}
                        keyboardType='default'
                        onChangeText={(password) => setPassword(password)}
                        onBlur={validatePassword}

                        ></StyledInput> */
                    }
                </View>
                {/* Bottom Section */}
                <View>
                    <StyledTouch
                        className=" p-5 w-80 bg-[#5167EB] rounded-lg "
                        title="Create An Account"
                        onPress={handleRegistration}>
                        <StyledText className="text-[#fff] text-[20px] font-extrabold text-center">Create an account</StyledText>
                    </StyledTouch>
                    <View className="flex-row items-center justify-center mt-2">
                        <StyledText>Existing User ?</StyledText>
                        <StyledText
                            className="text-[14px] text-[#5167EB] underline"
                            onPress={() => navigation.navigate('Login')}>
                            Log in</StyledText>
                    </View>
                </View>
            </View>

        </SafeAreaView>
    )
}

export default Register