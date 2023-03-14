import { createStackNavigator } from "@react-navigation/stack";
import { Bell, GearSix } from "phosphor-react-native";
import { Image, Platform, StyleSheet, TouchableOpacity, View } from "react-native";
import logo from '../../assets/logo.png';
import { Notifications } from "../Screens/Notifications";
import { Settings } from "../Screens/Settings";
import { Signin } from "../Screens/Signin";
import { BottomTabNavigation } from "./BottomTabNavigation";

export function StackNavigation() {
    const { Navigator, Screen } = createStackNavigator();

    return (
        <Navigator initialRouteName="Signin">
            <Screen name="Main" component={BottomTabNavigation} options={{
                header(props) {
                    return (
                        <View style={styles.mainHeaderContainer}>
                            <View style={styles.mainHeaderLogoWrapper}>
                                <Image source={logo} style={styles.mainHeaderLogo} />
                            </View>
                            <TouchableOpacity activeOpacity={0.5} onPress={() => props.navigation.navigate("Notifications")}>
                                <Bell color={"#00b169"} />
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.5} onPress={() => props.navigation.navigate("Settings")}>
                                <GearSix color={"#00b169"} />
                            </TouchableOpacity>
                        </View>
                    )
                }
            }} />
            <Screen name="Signin" component={Signin} options={{ headerShown: false }} />
            <Screen name="Settings" component={Settings} options={{ title: "Configurações de conta", headerBackTitleVisible: false, headerTintColor: "#005454" }} />
            <Screen name="Notifications" component={Notifications} options={{ title: "Notificações", headerBackTitleVisible: false, headerTintColor: "#005454" }} />
        </Navigator>
    )
}

const styles = StyleSheet.create({
    mainHeaderContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
        paddingHorizontal: 16,
        paddingTop: Platform.OS === 'android' ? 20 : 0,
        backgroundColor: "#fff"
    },
    mainHeaderLogoWrapper: {
        flex: 1
    },
    mainHeaderLogo: {
        width: 150,
        resizeMode: "contain"
    },
})