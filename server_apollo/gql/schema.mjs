// import { Express } from '@wavein-iot/be-utils';
import path from 'path';
import fs from 'fs';
import {fileURLToPath} from 'url';

// import resolvers from './resolver.mjs';

const {dirname} = path;

// const { GraphQLServer: { makeExecutableSchema } } = Express;

const __dirname = dirname(fileURLToPath(import.meta.url));
const schemaPath = path.join(__dirname, 'schema');
const typeDefs = fs.readdirSync(schemaPath)
	.map(filename => /\.gql$/.test(filename) ?
		fs.readFileSync(path.resolve(schemaPath, filename), 'utf-8') : null)
	.filter(v => v)
	.join('\n');

// export default makeExecutableSchema(typeDefs, resolvers);
export {typeDefs};
