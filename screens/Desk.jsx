import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import React, {useEffect, useState} from 'react'
import CalendarStrip from 'react-native-calendar-strip';
import {styled} from "nativewind";
import {FlatGrid} from 'react-native-super-grid';
import {useNavigation} from '@react-navigation/native';
import Spinner from 'react-native-loading-spinner-overlay';
import Toast from 'react-native-simple-toast';

const StyledTouch = styled(TouchableOpacity);
var urlencoded = new URLSearchParams();

var requestOptions = {
  method: 'GET',
  body: urlencoded,
  redirect: 'follow'
};
const Desk = () => {
    const navigation = useNavigation();
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedSlot, setSelectedSlot] = useState()

    const [loading, setLoading] = useState(false);
    function handleNextSelected() {
        if (selectedSlot) {
            navigation.navigate('Available', {selectedSlot: selectedSlot,selectedDate:selectedDate})
        }
        else{
            Toast.show('Please Select Slot', Toast.SHORT);
        }

    }
    function handleDateSelected(date){
        setSelectedDate(date.toISOString().slice(0, 10))
        var urlencoded = new URLSearchParams();
        urlencoded.append("date",selectedDate)
        var requestOptions = {
        method: 'GET',
        redirect: 'follow'
        };
        setLoading(true);
        setTimeout(() => {
        setLoading(false);
        }, 300);
        fetch(`https://demo0413095.mockable.io/digitalflake/api/get_slots?date=${selectedDate}`, requestOptions)
        .then(response => response.text())
        .then(result => (setSlots(JSON.parse(result).slots)))
        .catch(error => console.log('error', error));

    }
    const [slots, setSlots] = useState([])
    useEffect(() => {
        handleDateSelected(selectedDate)
        
    }, []);

    return (
        <View className="bg-white h-[100%] ">
            <View className="h-[50%]">
                <View className="border-y-2 border-b-slate-50 border-t-0 p-0">
                    <CalendarStrip
                        style={{
                            height: 60,
                            paddingTop: 0,
                            paddingBottom: 10,
                            marginTop: 0,
                            borderBottomColor: 'black'
                        }}
                        showMonth={false}
                        scrollable={true}
                        highlightDateContainerStyle={{
                            backgroundColor: '#4D60D1',
                            borderRadius: 0
                        }}
                        highlightDateNumberStyle={{
                            color: "white"
                        }}
                        highlightDateNameStyle={{
                            color: 'white'
                        }}
                        leftSelector={[]}
                        rightSelector={[]}
                        shouldAllowFontScaling={false}
                        calendarHeaderContainerStyle={{
                            backgroundColor: ""
                        }}
                        selectedDate={selectedDate}
                        onDateSelected={(date) => handleDateSelected(date)}/>
                </View>

                <View>
                <Spinner
          visible={loading}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
        />
                    <FlatGrid
                        itemDimension={130}
                        data={slots}
                        maxItemsPerRow={2}
                        renderItem={({item}) => (
                            <StyledTouch
                                onPress={() => setSelectedSlot(item)}
                                className={'px-5 py-5 bg-[#F0F5FF] rounded-xl items-center border-[#5B6180]' + (
                                    (!item.slot_active)
                                        ? " bg-[#E3E3E3] "
                                        : " "
                                ) + (
                                    selectedSlot == item
                                        ? " bg-[#4D60D1]"
                                        : ""
                                )}
                                disabled={!item.slot_active}>
                                <Text
                                    className={"" + (
                                        (!item.slot_active) || selectedSlot == item
                                            ? " text-white"
                                            : " "
                                    )}>{item.slot_name}</Text>
                            </StyledTouch>
                        )}></FlatGrid>
                </View>
            </View>
            <View className="h-[50%]  items-center justify-end">
                <StyledTouch
                    className='p-5 w-[80%] bg-[#5167EB] rounded-lg mb-10'
                    onPress={handleNextSelected}>
                    <Text className="text-[#fff] text-[20px] font-extrabold text-center">Next</Text>
                </StyledTouch>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      textAlign: 'center',
      paddingTop: 30,
      backgroundColor: '#ecf0f1',
      padding: 8,
    },
    spinnerTextStyle: {
      color: '#FFF',
    },
  });

export default Desk