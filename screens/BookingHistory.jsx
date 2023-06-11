import { View } from 'react-native'
import React, { useEffect, useState } from 'react'
import BookingCard from '../components/BookingCard'

const BookingHistory = () => {
    const [bookings,setBookings] = useState([]);

    function getBookings(){
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("https://demo0413095.mockable.io/digitalflake/api/get_bookings?user_id=1", requestOptions)
            .then(response => response.text())
            .then(result => setBookings(JSON.parse(result).bookings))
            .catch(error => console.log('error', error));
    }
   useEffect(() => {
    getBookings()

    }, []);


  return (
    <View className="bg-white h-[100%] items-center pt-10">
        {
            bookings.map((e =>(<BookingCard bookedOn={e.booking_date} roomId={e.workspace_id}></BookingCard>)))
        }
        
    </View>
  )
}

export default BookingHistory