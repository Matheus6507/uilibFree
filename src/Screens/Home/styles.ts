import styled, { css } from "styled-components/native";

export const HomeContainer = styled.View`
    ${({ theme }) => css`   
        flex: 1;
        align-items: center;
        justify-content: center;
        background-color: ${theme.colors.white};
    `};
`;

export const HomeScrollContainer = styled.ScrollView`
    ${({ theme }) => css`   
        flex: 1;
        width: 100%;
        padding: 0 ${theme.space[4]};
    `};
`;