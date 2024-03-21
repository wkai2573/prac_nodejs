const pkg = require('../../../../package.json');

const {name: serviceName, version} = pkg;

function service(parent, args, context, info) {
	return {service: serviceName, version};
}

module.exports = {service};
