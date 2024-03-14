export async function userCreate(_, {input}) {
	return {
		id: 'newId',
		...input,
	};
}

export async function userUpdate(_, {input}) {
	return {
		id: 'newId',
		account: input?.account ?? 'old_account',
		name: input?.name ?? 'old_name',
	};
}

export async function userDelete(_, {id}) {
	return `ok, ${id} has been deleted.`;
}