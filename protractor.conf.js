// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts


exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './e2e/*.feature'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    require: ['./e2e/*.steps.ts'],
    monochrome: true,
    strict: true,
    plugin: ["pretty"],
    format: ["progress"],
    dryRun: false,
    compiler: [ 'ts:ts-node']
  },

  onPrepare(){
  require('ts-node').register({
    project: 'e2e/tsconfig.e2e.json'
  });
}
};
