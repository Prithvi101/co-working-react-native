import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native'
import React, {useLayoutEffect} from 'react'
import {useNavigation} from '@react-navigation/native'
import {SafeAreaView} from 'react-native-safe-area-context';
import {styled} from "nativewind";

import Toast from 'react-native-simple-toast';

const StyledText = styled(Text)
const StyledTouch = styled(TouchableOpacity);

const Home = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({headerShown: false})
    })
    function handleWork(){
        navigation.navigate('Desk')
    }
    function handelMeeting(){
        navigation.navigate('Desk')
    }
    function handleBooking(){
        navigation.navigate('Booking')
    }






    return (
        <SafeAreaView className="bg-white h-[100%]">
            <View className=" flex-row  items-center  px-[25px] py-10 ">
                {/* Left */}
                <View className="flex-row items-center justify-start  w-[50%] ">
                    <Image source={require('../assets/df_icon.png')} className="w-[40px] h-[40px]"></Image>
                    <Text className='text-[20px]  ml-2'>Co-working</Text>

                </View>
                {/* Right */}
                <View className="flex-row items-center w-[50%]  ">
                    <StyledTouch
                        onPress={handleBooking}
                        className=' bg-[#5167EB] h-10 w-52   rounded-lg  items-center justify-center'>
                        <StyledText className='text-white'>
                            Booking History
                        </StyledText>
                    </StyledTouch>
                </View>
            </View>
            <View className="flex-row justify-evenly gap-4 px-5">
                {/* Left */}
                <View className="w-[50%] p-5 items-center ">
                    <StyledTouch className='p-10 bg-[#4D60D1] items-center rounded-xl ' onPress={handleWork}>
                        <Image
                            style={{
                                resizeMode: 'contain',
                                height: 130,
                                width: 130
                            }}
                            source={require('../assets/work-station.png')}
                            className="  w-[83px] h-[50%]"></Image>
                    </StyledTouch>
                    <StyledText className='text-[30px] text-center mt-5 px-5'>Book Work Station</StyledText>
                </View>
                {/* Right */}
                <View className="w-[50%] p-5 items-center ">
                    <StyledTouch className='p-10 bg-[#4D60D1] items-center rounded-xl ' onPress={handelMeeting}>
                        <Image
                            style={{
                                resizeMode: 'contain',
                                height: 130,
                                width: 130
                            }}
                            source={require('../assets/meeting-room-1.png')}
                            className="  w-[83px] h-[50%]"></Image>
                    </StyledTouch>
                    <StyledText className='text-[30px] text-center mt-5 px-5'>Meeting Room</StyledText>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Home