import {verifyLogin} from '../../../lib/token.mjs';

export async function users(parent, args, context, info) {
	const decoded = verifyLogin(context);
	const query = 'SELECT * FROM prac.users';
	const result = await context.db.pool.query(query);
	const users = result.rows;
	return users;
}