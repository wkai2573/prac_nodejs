import * as user from './Mutation/user.mjs';
import * as login from './Mutation/login.mjs';

export default {
  ...user,
	...login,
};

