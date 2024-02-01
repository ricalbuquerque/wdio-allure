import path from 'path';
import * as process from 'process';

import { BaseUrl } from '../src/support/constants';

import type { Options } from '@wdio/types';

const isDebug = process.argv.includes('--debug');
const cucumberTags = isDebug ? '@debug' : undefined;

export const baseConfig: Partial<Options.Testrunner> = {
  //
  // ====================
  // Runner Configuration
  // ====================
  autoCompileOpts: {
    autoCompile: true,
    tsNodeOpts: {
      project: `${process.cwd()}tsconfig.json`,
      transpileOnly: true
    }
  },
  //
  // =====================
  // Server Configurations
  // =====================
  // Host address of the running Selenium server. This information is usually obsolete as
  // WebdriverIO automatically connects to localhost. Also, if you are using one of the
  // supported cloud services like Sauce Labs, Browserstack, Testing Bot or LambdaTest you don't
  // need to define host and port information because WebdriverIO can figure that out
  // according to your user and key information. However, if you are using a private Selenium
  // backend you should define the host address, port, and path here.
  //
  // hostname: 'http://localhost',
  // port: 5003,
  // path: '',
  //
  // ==================
  // Specify Test Files
  // ==================
  // Define which test specs should run. The pattern is relative to the directory
  // of the configuration file being run.
  //
  // The specs are defined as an array of spec files (optionally using wildcards
  // that will be expanded). The test for each spec file will be run in a separate
  // worker process. In order to have a group of spec files run in the same worker
  // process simply enclose them in an array within the specs array.
  //
  // If you are calling `wdio` from an NPM script (see https://docs.npmjs.com/cli/run-script),
  // then the current working directory is where your `package.json` resides, so `wdio`
  // will be called from there.
  //
  specs: [path.resolve(process.cwd(), 'features/**/*.feature')],
  // Patterns to exclude.
  exclude: [
    // 'path/to/excluded/files'
  ],
  //
  // ===================
  // Test Configurations
  // ===================
  // Define all options that are relevant for the WebdriverIO instance here
  //
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  logLevel: isDebug ? 'info' : 'warn',
  //
  // Set specific log levels per logger
  // loggers:
  // - webdriver, webdriverio
  // - @wdio/browserstack-service, @wdio/devtools-service, @wdio/sauce-service
  // - @wdio/mocha-framework, @wdio/jasmine-framework
  // - @wdio/local-runner
  // - @wdio/sumologic-reporter
  // - @wdio/cli, @wdio/config, @wdio/utils
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  // logLevels: {
  //     webdriver: 'info',
  //     '@wdio/appium-service': 'info'
  // },
  //
  // If you only want to run your tests until a specific amount of tests have failed use
  // bail (default is 0 - don't bail, run all tests).
  bail: 0,
  //
  // Set a base URL in order to shorten url command calls. If your `url` parameter starts
  // with `/`, the base url gets prepended, not including the path portion of your baseUrl.
  // If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
  // gets prepended directly.
  baseUrl: BaseUrl,
  //
  // Default timeout for all waitFor* commands.
  waitforTimeout: 10000,
  //
  // Default timeout in milliseconds for request
  // if browser driver or grid doesn't send response
  connectionRetryTimeout: 120000,
  //
  // Default request retries count
  connectionRetryCount: 3,

  //
  // Test runner services
  // Services take over a specific job you don't want to take care of. They enhance
  // your test setup with almost no effort. Unlike plugins, they don't add new
  // commands. Instead, they hook themselves up into the test process.
  // services: [],
  //
  // Framework you want to run your specs with.
  // The following are supported: Mocha, Jasmine, and Cucumber
  // see also: https://webdriver.io/docs/frameworks
  //
  // Make sure you have the wdio adapter package for the specific framework installed
  // before running any tests.
  framework: 'cucumber',

  //
  // The number of times to retry the entire specfile when it fails as a whole
  // specFileRetries: 1,
  //
  // Delay in seconds between the spec file retry attempts
  // specFileRetriesDelay: 0,
  //
  // Whether or not retried spec files should be retried immediately or deferred to the end of the queue
  // specFileRetriesDeferred: false,
  //
  // Test reporter for stdout.
  // The only one supported by default is 'dot'
  // see also: https://webdriver.io/docs/dot-reporter
  reporters: [
    [
      'spec',
      {
        realtimeReporting: true
      }
    ],
    [
      'junit',
      {
        outputDir: path.resolve(process.cwd(), 'reports/junit'),
        outputFileFormat(opts: any) {
          return `wdio-${opts.cid}-reporter.xml`;
        }
      }
    ],
    [
      'allure',
      {
        outputDir: path.resolve(process.cwd(), 'reports/allure-results'),
        useCucumberStepReporter: true,
        disableWebdriverStepsReporting: false,
        disableWebdriverScreenshotsReporting: false,
        addConsoleLogs: true
      }
    ]
  ],
  // If you are using Cucumber you need to specify the location of your step definitions.
  cucumberOpts: {
    tags: cucumberTags,
    // <string[]> (file/dir) require files before executing features
    require: [
      path.resolve(process.cwd(), 'src', '**/*.ts'),
      path.resolve(process.cwd(), 'config', '**/*.ts')
    ],
    // <boolean> show full backtrace for errors
    backtrace: true,
    // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
    requireModule: [],
    // <boolean> invoke formatters without executing steps
    dryRun: false,
    // <boolean> abort the run on first failure
    failFast: false,
    // <boolean> hide step definition snippets for pending steps
    snippets: true,
    // <boolean> hide source uris
    source: false,
    // <boolean> fail if there are any undefined or pending steps
    strict: true,
    // <number> timeout for step definitions
    timeout: isDebug ? 1000 * 60 * 60 : 60000,
    order: 'defined',
    // <boolean> Enable this config to treat undefined definitions as warnings.
    ignoreUndefinedDefinitions: true,
    scenarioLevelReporter: true
  },
  execArgv: []
};
