import bcrypt from 'bcryptjs';
import {signToken, verifyToken} from '../../../lib/token.mjs';
import {AuthenticationFailed} from '../../../lib/extended_error/extended_error.mjs';

export async function login(parent, args, context, info) {
	const {account, password} = args;
	// 取得user
	const query = 'SELECT * FROM prac.users WHERE account = $1';
	const values = [account];
	const result = await context.db.pool.query(query, values);
	const user = result.rows?.[0];
	if (!user) {
		throw new AuthenticationFailed();
	}

	// 驗證密碼
	const valid = await bcrypt.compare(password, user.password)
	if (!valid) {
		throw new AuthenticationFailed();
	}

	// 回傳token
	const token = signToken({userId: user.id});
	return {token, user};
}