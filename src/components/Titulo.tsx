import { ITextProps, Text } from "native-base";
import { ReactNode } from "react";

interface TituloProps  extends ITextProps { 
  children: ReactNode;
}

export function Titulo({ children, ...rest }: TituloProps) {
    return <Text fontSize="2xl" color="gray.500" fontWeight="bold" textAlign="center" mt={5} {...rest}>{children}</Text>;
}