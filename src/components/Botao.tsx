import { Button, IButtonProps } from "native-base";
import { ReactNode } from "react";

export interface BotaoProps extends IButtonProps {
    children: ReactNode;
}

export function Botao({ children, ...rest }: BotaoProps) {
    return <Button mt={5} w="100%" bg="blue.800" borderRadius="lg" {...rest}>{children}</Button>;
}