const API_BASE_URL = 'http://localhost:8000';

export const API_ENDPOINTS = {
  SEND_OTP: `${API_BASE_URL}/auth/send-otp`,
  VERIFY_OTP: `${API_BASE_URL}/auth/verify-otp`,
  GET_PROFILE: `${API_BASE_URL}/profile`,
};
