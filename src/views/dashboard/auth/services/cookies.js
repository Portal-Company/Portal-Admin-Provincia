import nookies from 'nookies';

export const setCookie = (token) => {
    nookies.set(undefined, 'token', token, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
        secure: true,
    });
};

export const parseCookies = (ctx) => {
    return nookies.get(ctx);
};