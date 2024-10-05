"use client";
import React from "react";

// Chakra Ui
import { Container, Stack, Heading, Text, useColorModeValue } from '@chakra-ui/react';

// Project
import LoginForm from '../components/auth/LoginForm';

const LoginPage: React.FC = () => {

    const handleLogin = (email: string, password: string) => {
    };

    return (
        <Container  height="100vh" display="flex" alignItems="center" justifyContent="center">
            <LoginForm onLogin={handleLogin} />
        </Container>
    );
};

export default LoginPage;