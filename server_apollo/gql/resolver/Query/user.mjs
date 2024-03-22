export async function users(parent, args, context, info) {
	//! 驗證登入
	const query = 'SELECT * FROM prac.users';
	const result = await context.db.pool.query(query);
	const users = result.rows;
	return users;
}