import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    welcome: "Welcome Back",
                    email: "Email",
                    password: "Password",
                    signIn: "Sign In",
                    rememberMe: "Remember me",
                    dontHaveAccount: "Don't have an account? Sign Up"
                }
            },
            es: {
                translation: {
                    welcome: "Bienvenido de nuevo",
                    email: "Correo electrónico",
                    password: "Contraseña",
                    signIn: "Iniciar sesión",
                    rememberMe: "Recuérdame",
                    dontHaveAccount: "¿No tienes una cuenta? Regístrate"
                }
            }
        },
        lng: "en", // idioma por defecto
        fallbackLng: "en", // idioma de reserva
        interpolation: {
            escapeValue: false // React ya escapa valores
        }
    });

export default i18n;