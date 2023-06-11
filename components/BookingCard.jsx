import { View, Text } from 'react-native'
import React from 'react'

const BookingCard = ({roomId,name,bookedOn}) => {
  return (
    <View className="rounded-lg w-[80%] bg-[#F5F7FF] py-5 flex-row px-5 mt-5">
        {/* Left */}
        <View className="w-[30%]">
            <Text className="text-[20px] text-[#898989]">Room ID</Text>
            <Text className="text-[20px] text-[#898989]">Name</Text>
            <Text className="text-[20px] text-[#898989]">Booked on </Text>
        </View>

        {/* Right */}
        <View className="w-[70%]">
            <Text className="text-[20px]">: {roomId}</Text>
            <Text className="text-[20px]">: John Wick</Text>
            <Text className="text-[20px]">: {bookedOn} </Text>
        </View>

      
    </View>
  )
}

export default BookingCard