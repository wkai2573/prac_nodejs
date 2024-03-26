import {GraphQLError} from "graphql";

const formatError = error => {
	return error;
}

class BadRequestError extends GraphQLError {
	constructor(msg) {
		super(`Badrequest - ${msg}`, {
			extensions: {
				errorType: 'BadRequestError',
				status: 400,
				code: 4001,
			}
		});
	}
}

class IllegalArgument extends GraphQLError {
	constructor(argName) {
		super(`Bad argument: ${argName}.`, {
			extensions: {
				errorType: 'IllegalArgument',
				status: 400,
				code: 4002,
			}
		});
	}
}

class AuthenticationFailed extends GraphQLError {
	constructor() {
		super('Please check your account or password.', {
			extensions: {
				errorType: 'AuthenticationFailed',
				status: 401,
				code: 4011,
			}
		});
	}
}

class NoAccessToken extends GraphQLError {
	constructor() {
		super('No access token', {
			extensions: {
				errorType: 'NoAccessToken',
				status: 401,
				code: 4012,
			}
		});
	}
}

class InvalidToken extends GraphQLError {
	constructor() {
		super('Token is invalid', {
			extensions: {
				errorType: 'InvalidToken',
				status: 401,
				code: 4012,
			}
		});
	}
}

class UnsupportedToken extends GraphQLError {
	constructor() {
		super('Token is unsupported', {
			extensions: {
				errorType: 'UnsupportedToken',
				status: 401,
				code: 4012,
			}
		});
	}
}

class ForbiddenError extends GraphQLError {
	constructor() {
		super('Access denied.', {
			extensions: {
				errorType: 'ForbiddenError',
				status: 403,
				code: 4031,
			}
		});
	}
}

class NotFoundError extends GraphQLError {
	constructor(resName, resValue = null) {
		const err_msg = resValue ?
			`${resName}: ${resValue} not exists` :
			`${resName} not exists`;
		super(err_msg, {
			extensions: {
				errorType: 'NotFoundError',
				status: 404,
				code: 4041,
			}
		});
	}
}


class ExistsError extends GraphQLError {
	constructor(resName) {
		super(`${resName} already exists`, {
			extensions: {
				errorType: 'ExistsError',
				status: 409,
				code: 4091,
			}
		});
	}
}

class NotImplemented extends GraphQLError {
	constructor(method, path) {
		super(`Not Implemented. [${`${method}`.toUpperCase()}] ${path}`, {
			extensions: {
				errorType: 'NotImplemented',
				status: 501,
				code: 5011,
			}
		});
	}
}

class UnknownError extends GraphQLError {
	constructor() {
		super('Unknown error', {
			extensions: {
				errorType: "UnknownError",
				status: 500,
				code: 9999,
			}
		});
	}
}

export {
	formatError,
	BadRequestError,
	IllegalArgument,
	AuthenticationFailed,
	NoAccessToken,
	InvalidToken,
	UnsupportedToken,
	ForbiddenError,
	NotFoundError,
	ExistsError,
	NotImplemented,
	UnknownError,
};