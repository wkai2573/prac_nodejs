import { GraphQLScalarType } from 'graphql';

const pattern = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/i;

export default new GraphQLScalarType({
  name: 'ScalarUUID',
  description: 'UUID string',
  serialize: (val) => typeof val === 'string' ? val : null,
  parseValue: checker,
  parseLiteral: (ast) => checker(ast.value),
});


function checker (val) {
  if (!pattern.test(val)) {
    throw new Error('invalid uuid');
  }
  return val;
}
