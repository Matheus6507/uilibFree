import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { House, ListDashes, PlusCircle, Question, Receipt } from "phosphor-react-native";
import { View } from "react-native";
import OneSignal from 'react-native-onesignal';
import { useTheme } from "styled-components/native";
import { Text } from "../Components/Text";
import { Charges } from "../Screens/Charges";
import { Faq } from "../Screens/Faq";
import { Home } from "../Screens/Home";
import { NewLink } from "../Screens/NewLink";
import { Statement } from "../Screens/Statement";

OneSignal.setAppId("44d4a64d-67b2-45f7-a404-dde370b46ff6");

export function BottomTabNavigation() {
    const { Navigator, Screen } = createBottomTabNavigator();
    const theme = useTheme();

    return (
        <Navigator initialRouteName="Home" screenOptions={{
            headerShown: false,
            tabBarStyle: {
                alignItems: "stretch",
                justifyContent: "space-between",
            }
        }}>
            <Screen name="Home" component={Home} options={{
                title: "Início",
                tabBarActiveTintColor: theme.colors.ra50,
                tabBarIcon(props) {
                    return <House weight={props.focused ? 'fill' : 'bold'} color={props.focused ? theme.colors.ra50 : theme.colors.gray400} />
                }
            }} />
            <Screen name="Charges" component={Charges} options={{
                title: "Cobranças",
                tabBarActiveTintColor: theme.colors.ra50,
                tabBarIcon(props) {
                    return <ListDashes weight={props.focused ? 'fill' : 'bold'} color={props.focused ? theme.colors.ra50 : theme.colors.gray400} />
                }
            }} />
            <Screen name="NewLink" component={NewLink} options={{
                title: "",
                tabBarActiveTintColor: theme.colors.ra50,
                tabBarIcon(props) {
                    return (
                        <View style={{
                            position: "relative",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 8,
                            paddingHorizontal: 12,
                            paddingVertical: 20,
                            borderRadius: theme.radii.xs,
                            backgroundColor: theme.colors.ra50
                        }}>
                            <PlusCircle weight='bold' color={theme.colors.white} />
                            <Text size="xs" color={theme.colors.white}>Criar link</Text>
                        </View>
                    )
                }
            }} />
            <Screen name="Receipt" component={Statement} options={{
                title: "Extrato",
                tabBarActiveTintColor: theme.colors.ra50,
                tabBarIcon(props) {
                    return <Receipt weight={props.focused ? 'fill' : 'bold'} color={props.focused ? theme.colors.ra50 : theme.colors.gray400} />
                }
            }} />
            <Screen name="Faq" component={Faq} options={{
                title: "Dúvidas",
                tabBarActiveTintColor: theme.colors.ra50,
                tabBarIcon(props) {
                    return <Question weight={props.focused ? 'fill' : 'bold'} color={props.focused ? theme.colors.ra50 : theme.colors.gray400} />
                }
            }} />
        </Navigator>
    )
}