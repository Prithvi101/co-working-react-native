import React from 'react';
import {Modal, View, Text, TouchableOpacity} from 'react-native';
import {XMarkIcon,CheckCircleIcon} from "react-native-heroicons/solid";
const ToastGreen = ({isVisible, isConfirm,onClose}) => {
    return (
        <Modal
            visible={isVisible}
            animationType="fade"
            transparent={true}
            onRequestClose={onClose}>
          <View   className="w-[100%] flex-1 justify-start pt-28 items-center ">
                <TouchableOpacity className="w-[80%] bg-[#19AD1E] h-20 flex-row rounded-xl items-start" >
                {/* LEFT */}
                <View className="w-[20%] items-center justify-center h-[100%]">
                <CheckCircleIcon size={40} color={"#fff"}></CheckCircleIcon>
                </View>
                {/* MID */}
                <View className="w-[60%] items-start gap-1 justify-center h-[100%]">
                  <Text className="text-[24px] font-bold text-white">Sucess</Text>
                  <Text className="text-[14px] font-bold text-white">You Have Sucessfully Booked Your Desk</Text>
                  </View>
                  {/* RIGHT */}
                  <View className="w-[20%] items-center justify-center h-[100%]">
                    <XMarkIcon size={20} color={"#fff"}></XMarkIcon>
                  </View>
                </TouchableOpacity>

          </View>
        </Modal>
    );
};


export default ToastGreen;
