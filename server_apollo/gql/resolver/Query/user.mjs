export async function users(parent, args, context, info) {
	//! 驗證登入
	
	try {
		const query = 'SELECT * FROM prac.users';
		const result = await context.db.pool.query(query);
		const users = result.rows;
		return users;
	} catch (error) {
		console.error('Error inserting data:', error);
		throw error;
	}
}