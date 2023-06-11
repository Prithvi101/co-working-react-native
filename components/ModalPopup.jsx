import React from 'react';
import {Modal, View, Text, TouchableOpacity} from 'react-native';
import {XCircleIcon} from "react-native-heroicons/solid";
const ModalPopup = ({isVisible, roomId, roomNumber, slot, onClose , onConfirm}) => {
    return (
        <Modal
            visible={isVisible}
            animationType="slide"
            transparent={true}
            onRequestClose={onClose}>
          <View   className="w-[100%] flex-1 justify-center items-center bg-[#e2d3d3d0]">
            <View  className="w-[70%] bg-white h-[25%]  rounded-2xl">
              <View className="w-[100%] flex-row h-14 bg-[#FBFBFF] rounded-t-2xl items-center justify-between px-10">
                <Text className="text-[20px]">Confirm booking</Text>
                <XCircleIcon  onPress={onClose}  size={25} color={"#000"}></XCircleIcon>
              </View>
            
              <View className="flex-row justify-between mt-5">
                <Text className="w-[50%] text-start pl-10 text-slate-400">Room ID: <Text className="text-black text-[20px]">{roomId}</Text> </Text>
                <Text className="w-[50%] text-center text-black text-[20px]">Room No: {roomNumber}</Text>
              </View>
              <View className="flex-row justify-between mt-5">
                <Text className="w-[100%] text-start pl-10 text-slate-400">Slot : <Text className="text-black text-[20px]">{slot}</Text></Text>
              </View>
              
             <View className="w-[100%] items-center mt-10">
                <TouchableOpacity className="w-[70%] bg-[#5167EB] py-4 rounded-xl items-center" onPress={onConfirm}>
                  <Text className="text-[24px] font-bold text-white">Confirm</Text>
                </TouchableOpacity>
              </View>

            </View>
          </View>
        </Modal>
    );
};


export default ModalPopup;
