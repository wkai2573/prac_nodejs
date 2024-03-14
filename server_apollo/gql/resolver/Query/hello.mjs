export function hello() {
	return 'world';
}

export async function hello2() {
	await new Promise(r => setTimeout(r, 1000));
	return 'world2';
}

export async function hello3(_, { name }) {
	return `name: ${name}`;
}