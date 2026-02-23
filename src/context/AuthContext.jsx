import { createContext, useContext, useState, useEffect } from 'react';
import { getCookie, removeSharedCookie } from '../utils/cookieUtils';
import { getUserProfile } from '../utils/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(getCookie('zogiraa_token') || localStorage.getItem('token'));
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            const currentToken = getCookie('zogiraa_token') || localStorage.getItem('token');
            if (currentToken) {
                try {
                    const data = await getUserProfile();
                    setUser({
                        id: data.profile?.userId || 'unknown',
                        role: data.role,
                        ...data
                    });
                } catch (e) {
                    console.error("Auth check failed", e);
                    if (e.message.includes('401') || e.message.includes('token') || e.message.includes('User not found')) {
                        // Clear invalid local data
                        localStorage.removeItem('token');
                        localStorage.removeItem('userRole');
                        removeSharedCookie('zogiraa_token');
                        setToken(null);
                        setUser(null);
                    }
                }
            } else {
                setUser(null);
            }
            setLoading(false);
        };

        checkAuth();

        // Listen for storage changes (for multi-tab sync)
        window.addEventListener('storage', checkAuth);
        return () => window.removeEventListener('storage', checkAuth);
    }, []);

    const login = (newToken, role) => {
        localStorage.setItem('token', newToken);
        localStorage.setItem('userRole', role);
        setToken(newToken);
        // User state will be updated by useEffect or manually here
        try {
            const payload = JSON.parse(atob(newToken.split('.')[1]));
            setUser({ id: payload.id, role: payload.role });
        } catch (e) { }
    };

    const logout = () => {
        removeSharedCookie('zogiraa_token');
        localStorage.removeItem('token');
        localStorage.removeItem('userRole');
        setToken(null);
        setUser(null);
        window.location.reload();
    };

    return (
        <AuthContext.Provider value={{ user, token, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
