import { Text } from "../../Components/Text";
import { HomeContainer, HomeScrollContainer } from "./styles";

export function Home({ navigation }: any) {
    return (
        <HomeContainer>
            <HomeScrollContainer showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} overScrollMode={"never"}>
                <Text>Início</Text>
            </HomeScrollContainer>
        </HomeContainer>
    )
}