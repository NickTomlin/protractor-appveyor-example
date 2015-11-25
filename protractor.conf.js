exports.config = {
  capabilities: {
    'browserName': 'internet explorer'
  },
  framework: 'jasmine2',
  specs: ['example_spec.js'],
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
