const pkg = require('../../../package.json');

const { name: service, version } = pkg;

module.exports = () => ({
  service, version
});
