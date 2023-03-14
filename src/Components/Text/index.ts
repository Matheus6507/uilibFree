import styled, { css } from "styled-components/native";

interface TextProps {
    size?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl",
    color?: string
}

export const Text = styled.Text<TextProps>`
    ${({ theme }) => css`
        font-family: ${theme.fonts.defaultRegular};
        margin: 0;
        font-size: ${(props: TextProps) => {
            switch (props.size) {
                case "xxs":
                    return theme.fontSizes.xxs;
                case "xs":
                    return theme.fontSizes.xs;
                case "sm":
                    return theme.fontSizes.sm;
                case "md":
                    return theme.fontSizes.md;
                case "lg":
                    return theme.fontSizes.lg;
                case "xl":
                    return theme.fontSizes.xl;
                case "2xl":
                    return theme.fontSizes["2xl"];
                case "4xl":
                    return theme.fontSizes["4xl"];
                case "5xl":
                    return theme.fontSizes["5xl"];
                case "6xl":
                    return theme.fontSizes["6xl"];
                case "7xl":
                    return theme.fontSizes["7xl"];
                case "8xl":
                    return theme.fontSizes["8xl"];
                case "9xl":
                    return theme.fontSizes["9xl"];
                default:
                    return theme.fontSizes.md;
            }
        }};
        color: ${(props: TextProps) => {
            return props.color ?? theme.colors.gray900
        }};
    `}
`;