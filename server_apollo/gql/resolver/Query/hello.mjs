export function hello(parent, args, context, info) {
	return 'world';
}

export async function hello2(parent, args, context, info) {
	await new Promise(r => setTimeout(r, 1000));
	return 'world2';
}

export async function hello3(parent, args, context, info) {
	const {name} = args;
	return `name: ${name}`;
}