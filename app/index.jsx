import { View, StyleSheet } from "react-native";
import HomeScreen from "./screens/homeScreen";
import { Stack } from "expo-router";

const Page = () => {
    return (
        <Stack 
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#f4511e",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }}
        >
            <Stack.Screen name="home" options={{}} />
        </Stack>
        )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    }
})

export default Page;