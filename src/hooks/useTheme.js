import { useContext } from "react";
import {AuthContext} from '../contexts/AuthContext';

export const useTheme = (className) => {
    const user = useContext(AuthContext)
    return `${className}--${user.config.theme}`;
} 