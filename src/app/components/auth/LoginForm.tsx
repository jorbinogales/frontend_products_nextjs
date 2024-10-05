"use client";

import {useState} from "react";
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    Switch,
    Text,
    useColorModeValue
} from "@chakra-ui/react";

interface LoginFormProps {
    onLogin: (email: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onLogin(email, password);
    };

    return (
        <Stack maxW="xl">
            <Heading fontSize="xl" mb={4} textAlign="center">
                Bienvenido
            </Heading>
            <Text fontSize="sm" color={useColorModeValue("gray.600", "gray.400")} mb={4} textAlign="center">
               Escribe tu email y contraseña para ingresar
            </Text>
            <form onSubmit={handleSubmit}>
                <Stack spacing={4}>
                    <FormControl id="email" isRequired>
                        <Input
                            type="email"
                            placeholder="Correo"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            variant="outline"
                            colorScheme="teal"
                        />
                    </FormControl>
                    <FormControl id="password" isRequired>
                        <Input
                            type="password"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            variant="outline"
                            colorScheme="teal"
                        />
                    </FormControl>
                    <Button type="submit" colorScheme="teal" variant="solid" width="full">
                        INGRESAR
                    </Button>
                </Stack>
            </form>
            <Text textAlign="center" mt={4}>
                No tienes cuenta?{" "}
                <Button variant="link" colorScheme="teal">
                    Registrate
                </Button>
            </Text>
        </Stack>
    );
};

export default LoginForm;