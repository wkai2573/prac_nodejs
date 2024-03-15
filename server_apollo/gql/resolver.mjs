import Query from './resolver/Query.mjs';
import Mutation from './resolver/Mutation.mjs';
import * as scalars from './scalars/index.mjs';


const resolvers = {
	ScalarUUID: scalars.ScalarUUID,
	// ScalarDate: scalars.ScalarDate,
	// ScalarUpload: scalars.ScalarUpload,

	Query,
	Mutation,

	// 其他type...
};

export {resolvers};