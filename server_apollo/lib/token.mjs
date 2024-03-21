import jwt from 'jsonwebtoken';
import "dotenv/config.js"; // 引用.env
const env = process.env;

const secretKey = env.JWT_KEY;
const tokenTTL = 86400 * 30; // second

/**
 * @param {string | Buffer | object} payload 
 * @returns {string} token
 */
function signToken(payload) {
	const signOptions = {expiresIn: tokenTTL};
	return jwt.sign(payload, secretKey, signOptions);
}

/**
 * @param {string} token 
 * @returns {Jwt} jwt
 */
function verifyToken(token) {
	return jwt.verify(token, secretKey);
}

export {signToken, verifyToken};