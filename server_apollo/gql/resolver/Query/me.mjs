import {UnknownError} from "../../extended_error/extended_error.mjs";

export async function me() {

	// const error = new UnknownError("XX");
	// throw error;

	return {
		id: 'uuid_v4',
		name: 'xdd',
		tags: ['a', 'b'],
	};
}