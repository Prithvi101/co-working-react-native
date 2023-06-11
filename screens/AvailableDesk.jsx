import {View, Text, TouchableOpacity} from 'react-native'
import React, {useEffect, useState} from 'react'
import {useNavigation} from "@react-navigation/native";
import {FlatGrid} from 'react-native-super-grid';
import {styled} from 'nativewind';
import ModalPopup from '../components/ModalPopup';
import ToastGreen from '../components/Toast';


const StyledTouch = styled(TouchableOpacity);
const StylesIOS = {
  textColor: "#FFF",
  backgroundColor: "#00FF00",
};
const AvailableDesk = ({route}) => {
    const navigation = useNavigation();
    const [available, setAvailable] = useState([]);
    const slot = route.params.selectedSlot;
    const date = route.params.selectedDate;
    const [selected, setSelected] = useState();
    const [isModalVisible, setModalVisible] = useState(false);
    const [isVisible,setIsVisible] = useState(false)
    //console.log(selected)
    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };
    const onConfirm = () =>{
      var urlencoded = new URLSearchParams();
      urlencoded.append("date", date);
      urlencoded.append("slot_id", slot.slot_id);
      urlencoded.append("workspace_id", selected.workspace_id);
      urlencoded.append("type", "1");
      
      var requestOptions = {
        method: 'POST',
        body: urlencoded,
        redirect: 'follow'
      };
      
      fetch("https://demo0413095.mockable.io/digitalflake/api/confirm_booking", requestOptions)
        .then(response => response.text())
        .then(result => onConfirmed())
        .catch(error => console.log('error', error));
    }
  
    function onConfirmed(){
      console.log("toast----")
      setIsVisible(true)
      const timeout = setTimeout(() => {
        setIsVisible(false);
        navigation.navigate('Home')
      }, 1000);
      
    }



    const formatDate = (dateString) => {
      const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
      const date = new Date(dateString);
      
      const day = date.getDay().toLocaleString('en-US', { weekday: 'long' });
      const dateNumber = date.getDate();
      const month = date.toLocaleString('en-US', { month: 'long' });
      //console.log(day)
      return days[day]+" "+dateNumber+" "+month;
    };
    function getAvailable() {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(
            `https://demo0413095.mockable.io/digitalflake/api/get_availability?date=${date}-01&slot_id=${slot.slot_id}&type=1`,
            requestOptions
        )
            .then(response => response.text())
            .then(result => (setAvailable(JSON.parse(result).availability)))
            .catch(error => console.log('error', error));
    }
    useEffect(() => {
        getAvailable()

    }, []);

    return (
        <View className="bg-white h-[100%] ">
            <View className="h-[50%]">
                <Text className="text-[20px] ml-3 mb-5 mt-3">{formatDate(date.toLocaleString())} , {slot.slot_name}</Text>
                <View>
                    <FlatGrid
                        itemDimension={20}
                        data={available}
                        maxItemsPerRow={6}
                        renderItem={({item}) => (
                            <StyledTouch
                                className={'w-16 h-16 bg-[#F0F5FF] rounded-lg items-center border-2 justify-center border-slate-200 ' + (!item.workspace_active? " bg-[#E3E3E3] border-[#E3E3E3]": "" + (selected == item? " bg-[#5167EB] border-[#5167EB]": " ")
                                )}
                                disabled={!item.workspace_active}
                                onPress={() => setSelected(item)}>
                                <Text
                                    className={"text-[20px] " + (
                                        !item.workspace_active || selected == item
                                            ? "text-[#fff]"
                                            : ""
                                    )}>{item.workspace_name}</Text>
                            </StyledTouch>
                        )}></FlatGrid>
                </View>
            </View>
            <View className="h-[50%]  items-center justify-end">
                <StyledTouch
                    onPress={openModal}
                    className='p-5 w-[80%] bg-[#5167EB] rounded-lg mb-10'>
                    <Text className="text-[#fff] text-[20px] font-extrabold text-center">Next</Text>
                </StyledTouch>
            </View>

            <ModalPopup
                isVisible={isModalVisible}
                roomId={selected?.workspace_id}
                roomNumber={selected?.workspace_name}
                slot={formatDate(date.toLocaleString())+" "+slot.slot_name}
                onClose={closeModal}
                onConfirm={onConfirmed}>
                </ModalPopup>

            <ToastGreen isVisible={isVisible}></ToastGreen>
        </View>
    )
}

export default AvailableDesk