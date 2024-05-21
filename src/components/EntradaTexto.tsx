import { FormControl, IInputProps, Input } from "native-base";

export interface EntradaTextoProps extends IInputProps {
    label: string;
    placeholder: string;
}

export function EntradaTexto({ label, placeholder, ...rest }: EntradaTextoProps) {
    return (
        <FormControl mt={3}>
            <FormControl.Label>{label}</FormControl.Label>
            <Input placeholder={placeholder}  size="lg" w="100%" borderRadius="lg" bgColor="gray.100" shadow={3} {...rest}/>
        </FormControl>
    );
}