import { GraphQLScalarType } from 'graphql';

import { isValidEmail } from '../../../lib/utils.mjs';

export default new GraphQLScalarType({
  name: 'ScalarEmail',
  description: 'Email string',
  serialize: (val) => typeof val === 'string' ? val : null,
  parseValue: checker,
  parseLiteral: (ast) => checker(ast.value),
});


function checker (val) {
  if (val === '') {
    return null;
  }
  if (!isValidEmail(val)) {
    throw new Error('invalid email');
  }
  return val;
}
