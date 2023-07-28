import { Link, Stack } from "expo-router";
import { View, Text, Image } from "react-native";

const LogoTitle = () => {
    return(
        <Image 
            style={{ width:50, height:50}}
            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        />
    )
}

const HomePage = () => {
    return (
        <View style={{ flex:1, alignItems: 'center', justifyContent: 'center'}}>
            <Stack.Screen 
            options={{
                title: "My Home",
                headerStyle: { backgroundColor: "#f4511e"},
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: 'bold',
                    headerTitle: props => <LogoTitle {...props} />
                }
            }}/>
            <Text>Home Screen</Text>
            <Link href={{ pathname: 'InfoScreen', params: {name: "Bacon"}}}> Go to Detail</Link>
        </View>
    )
};

export default HomePage;
    
