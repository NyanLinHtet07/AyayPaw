import { Text, View } from "react-native";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";

const InfoScreen = () => {
    const router = useRouter();
    const params = useLocalSearchParams();

    return (
        <View style={{ flex:1, alignItems: 'center', justifyContent: 'center'}}>
            <Stack.Screen 
                options={{
                    title: params.name
                }}
                />

                <Text
                    onPress={() => {
                        router.setParams({name: 'Updated'});
                    }}>
                        Update the Title
                </Text>
        </View>
    )
}