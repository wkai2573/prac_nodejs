import bcrypt from 'bcryptjs';

export async function userCreate(parent, args, context, info) {
	//! 驗證登入
	const {input: {account, name, password}} = args;
	
	// 新增user 寫入db
	const query = 'INSERT INTO prac.users (account, name, password) VALUES ($1, $2, $3) RETURNING *';
	const values = [
		account,
		name,
		bcrypt.hashSync(password, 10),
	];
	const result = await context.db.pool.query(query, values);
	const newUser = result.rows[0];
	return newUser;
}

export async function userUpdate(parent, args, context, info) {
	//! 驗證登入
	const {id, input} = args;
	if (input.password) input.password = bcrypt.hashSync(input.password, 10);

	var i = 1;
	const setClause = Object.keys(input).map(key => `${key} = $${i++}`).join(',');
	const query = `
		UPDATE prac.users
		SET ${setClause}
		WHERE id = $${i++}
		RETURNING *`;
	const values = [...Object.values(input), id];
	const result = await context.db.pool.query(query, values);
	const user = result.rows[0];
	return user;
}

export async function userDelete(parent, args, context, info) {
	//! 驗證登入
	const {id} = args;
	const query = 'DELETE FROM prac.users WHERE id = $1';
	const values = [id];
	const result = await context.db.pool.query(query, values);
	return 'ok';
}
