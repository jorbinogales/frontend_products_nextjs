import { ChakraProvider } from '@chakra-ui/react';
import './globals.css';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

export const metadata = {
    title: 'Tu Aplicación',
    description: 'Descripción de tu aplicación',
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <I18nextProvider i18n={i18n}>
                    <ChakraProvider>
                        {children}
                    </ChakraProvider>
                </I18nextProvider>
            </body>
        </html>
    );
};

export default RootLayout;