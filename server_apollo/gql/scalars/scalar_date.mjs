import { GraphQLScalarType } from 'graphql';
import dayjs from 'dayjs';
import dayjsPluginUTC from 'dayjs/plugin/utc.js';
import dayjsPluginTimezone from 'dayjs/plugin/timezone.js';

dayjs.extend(dayjsPluginUTC);
dayjs.extend(dayjsPluginTimezone);

export default new GraphQLScalarType({
  name: 'ScalarDate',
  description: 'ISO date-time string in UTC.',
  serialize: (val) => dayjs.utc(val).toISOString(),
  parseValue: checker,
  parseLiteral: (ast) => checker(ast.value),
});


function checker (val) {
  const parsed = dayjs.utc(val);
  if (!parsed.isValid()) {
    throw new Error('invalid date-time');
  }
  return parsed.toDate();
}
