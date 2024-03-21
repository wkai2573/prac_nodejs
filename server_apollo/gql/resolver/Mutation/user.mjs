import bcrypt from 'bcryptjs';

export async function userCreate(parent, args, context, info) {
	//! 驗證登入

	const {input: {account, name, password}} = args;
	try {
		// 新增user 寫入db
		const query = 'INSERT INTO prac.users (account, name, password) VALUES ($1, $2, $3) RETURNING *';
		const values = [
			account,
			name,
			bcrypt.hashSync(password, 10),
		];
		const result = await context.db.client.query(query, values);
		const newUser = result.rows[0];
		// 傳回新user
		return newUser;
	} catch (error) {
		console.error('Error inserting data:', error);
		throw error;
	}
}

//!
export async function userUpdate(parent, args, context, info) {
	const {input} = args;
	return {
		id: 'newId',
		account: input?.account ?? 'old_account',
		name: input?.name ?? 'old_name',
	};
}

//!
export async function userDelete(parent, args, context, info) {
	const {id} = args;
	return `ok, ${id} has been deleted.`;
}
