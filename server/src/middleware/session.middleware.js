import crypto from 'crypto';
export default function sessionMiddleware(req, res, next) {
    
    if (!req.signedCookies.token_session) {
        res.cookie('token_session', randomValueHex(32), { signed: true, maxAge: 60 * 60 * 60, httpOnly: true });
    }
    next();
}
function randomValueHex(len) {
    return crypto
        .randomBytes(Math.ceil(len / 2))
        .toString('hex') // convert to hexadecimal format
        .slice(0, len) // return required number of characters
}

