/*
Basic configuration to run your cucumber
feature files and step definitions with protractor.
**/
exports.config = {

    directConnect: true,
  
    baseUrl: 'http://demo.automationtesting.in//',
    allScriptsTimeout: 20000,  
    capabilities: {
        browserName:'chrome'
        
    },
    framework: 'custom',  // set to "custom" instead of cucumber.
  
    frameworkPath: require.resolve('protractor-cucumber-framework'),  // path relative to the current config file
  
    specs: [
      'e2e/features/login.feature'     // Specs here are the cucumber feature files
    ],
  
    // cucumber command line options
    cucumberOpts: {
      monochrome: true,
      require: ['e2e/steps/*.ts', 'e2e/resources/hook.ts'],  // require step definition files before executing features
      tags: [],                      // <string[]> (expression) only execute the features or scenarios with tags matching the expression
      strict: true,                  // <boolean> fail if there are any undefined or pending steps
      format: 'json:results.json',            // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
      'dry-run': false,              // <boolean> invoke formatters without executing steps
      compiler: ["ts:ts-node/register"]                   // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
    },
  
   onPrepare: function () {
      browser.manage().window().maximize(); // maximize the browser before executing the feature files
      require('ts-node').register({ 
        project: require('path').join(__dirname, './tsconfig.json') // Relative path of tsconfig.json file 
    });
   
    },
    onComplete: () => {
      var reporter = require('cucumber-html-reporter');
    var options = {
    theme: 'bootstrap',
    jsonFile: 'results.json',
    output: 'e2e/report/cucumber_report.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true
};

reporter.generate(options);

    }

    /*plugins: [{
      package: require.resolve('protractor-multiple-cucumber-html-reporter-plugin'),
      options:{
        // read the options part for more options
        automaticallyGenerateReport: true,
        removeExistingJsonReportFile: true
    }
  }]*/

 
  
  };
