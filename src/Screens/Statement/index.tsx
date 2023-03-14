import { Text } from "react-native"
import { StatementContainer } from "./styles"

export function Statement() {
    return (
        <StatementContainer style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Extrato</Text>
        </StatementContainer>
    )
}