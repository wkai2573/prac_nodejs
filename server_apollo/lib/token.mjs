import jwt from 'jsonwebtoken';
import {NoAccessToken} from './extended_error/extended_error.mjs';
import "dotenv/config.js"; // 引用.env
const env = process.env;

const secretKey = env.JWT_KEY;
const tokenTTL = '30d';

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
 * @returns {Jwt} jwt decoded
 */
function verifyToken(token) {
	const decoded = jwt.verify(token, secretKey);
	return decoded;
}


/** 驗證登入
 * @param {object} Context
 * @returns {object} jwt decoded
 */
function verifyLogin({req, res}) {
	const authHeader = req.headers.authorization;
	if (!authHeader) throw new NoAccessToken();
	const token = authHeader.replace(/^(Bearer )?(.*)$/, '$2');
	try {
		const decoded = verifyToken(token);
		return decoded;
	} catch (error) {
		throw new NoAccessToken();
	}
}


export {signToken, verifyToken, verifyLogin};