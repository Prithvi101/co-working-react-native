import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import Register from './screens/Register';
import Login from './screens/Login';
import Desk from './screens/Desk';
import AvailableDesk from './screens/AvailableDesk';
import BookingHistory from './screens/BookingHistory';

const Stack = createNativeStackNavigator();

export default function App() {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Booking" component={BookingHistory}
                options={{
                    title: 'Booking History',
                    headerStyle: {
                        backgroundColor: '#fff'
                    },
                    headerTintColor: '#000',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize:30,

                    },
                    headerShadowVisible:false,
                }}/>

                <Stack.Screen name="Register" component={Register}/>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen
                    name="Desk"
                    options={{
                        title: 'Select Date & Slot',
                        headerStyle: {
                            backgroundColor: '#fff'
                        },
                        headerTintColor: '#000',
                        headerTitleStyle: {
                            fontWeight: 'bold',

                        },
                        headerShadowVisible:false,
                    }}
                    component={Desk}/>
                <Stack.Screen name="Available" component={AvailableDesk}
                options={{
                    title: 'Available rooms',
                    headerStyle: {
                        backgroundColor: '#fff'
                    },
                    headerTintColor: '#000',
                    headerTitleStyle: {
                        fontWeight: 'bold',

                    },
                    headerShadowVisible:false
                }}/>

            </Stack.Navigator>
        </NavigationContainer>
    );
}
