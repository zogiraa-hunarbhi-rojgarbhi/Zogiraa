import { API_ENDPOINTS } from '../config/api';
import { getCookie } from './cookieUtils';

async function apiRequest(url, options = {}) {
    try {
        const token = getCookie('zogiraa_token') || localStorage.getItem('token');

        const headers = {
            'Content-Type': 'application/json',
            ...options.headers,
        };

        if (token && !options.noAuth) {
            headers.Authorization = `Bearer ${token}`;
        }

        const response = await fetch(url, {
            ...options,
            headers,
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || data.error || 'Something went wrong');
        }

        return data;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
}

export async function sendOTP(phone, role = null, mode = 'login') {
    return apiRequest(API_ENDPOINTS.SEND_OTP, {
        method: 'POST',
        body: JSON.stringify({ phone, role, mode }),
        noAuth: true,
    });
}

export async function verifyOTP(phone, otp, role = null, mode = 'login') {
    return apiRequest(API_ENDPOINTS.VERIFY_OTP, {
        method: 'POST',
        body: JSON.stringify({ phone, otp, role, mode }),
        noAuth: true,
    });
}

export async function getUserProfile() {
    return apiRequest(API_ENDPOINTS.GET_PROFILE, {
        method: 'GET',
    });
}

export default apiRequest;
