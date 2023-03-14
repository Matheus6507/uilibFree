import { Text, TouchableOpacity } from "react-native";
import { SignInContainer } from "./styles";

export function Signin({ navigation }: any) {
    const navigateProfile = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Main' }],
        });
        // navigation.navigate('Main');
    }

    return (
        <SignInContainer>
            <TouchableOpacity onPress={navigateProfile}>
                <Text>
                    Entrar
                </Text>
            </TouchableOpacity>
        </SignInContainer>
    )
}