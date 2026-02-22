/**
 * Set a cookie that is accessible by all subdomains of zogiraa.com
 */
export const setSharedCookie = (name, value, days = 7) => {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    // We use .zogiraa.com to make it available to all subdomains
    // For local development on localhost, it might need different handling
    const domain = window.location.hostname === 'localhost' ? '' : '; domain=.zogiraa.com';
    document.cookie = `${name}=${value}; expires=${expires}; path=/; SameSite=Lax${domain}`;
};

/**
 * Get a cookie by name
 */
export const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
};

/**
 * Remove a cookie
 */
export const removeSharedCookie = (name) => {
    const domain = window.location.hostname === 'localhost' ? '' : '; domain=.zogiraa.com';
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Lax${domain}`;
};
