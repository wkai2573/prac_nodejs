import {UnknownError} from "../../../lib/extended_error/extended_error.mjs";

export async function me(parent, args, context, info) {

	// const error = new UnknownError("XX");
	// throw error;

	return {
		id: 'uuid_v4',
		name: 'xdd',
		tags: ['a', 'b'],
	};
}