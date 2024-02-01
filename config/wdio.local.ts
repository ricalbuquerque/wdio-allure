import process from 'process';

import { baseConfig } from './wdio.base';
import { hooksConfig } from './wdio.hooks';

import type { Options } from '@wdio/types';

const isDebug = process.argv.includes('--debug');
const isHeadless = process.argv.includes('--headless');

const chromeArgs = [
  '--disable-infobars',
  '--window-size=1920,1080',
  '--disable-gpu',
  '--disable-dev-shm-usage'
];
if (!isDebug || isHeadless) {
  chromeArgs.push('--headless');
}

export const config: Options.Testrunner = {
  ...baseConfig,
  ...hooksConfig,
  //
  // ====================
  // Runner Configuration
  // ====================
  // WebdriverIO supports running e2e tests as well as unit and component tests.
  runner: 'local',
  //
  // ============
  // Capabilities
  // ============
  // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
  // time. Depending on the number of capabilities, WebdriverIO launches several test
  // sessions. Within your capabilities you can overwrite the spec and exclude options in
  // order to group specific specs to a specific capability.
  //
  // First, you can define how many instances should be started at the same time. Let's
  // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
  // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
  // files and you set maxInstances to 10, all spec files will get tested at the same time
  // and 30 processes will get spawned. The property handles how many capabilities
  // from the same test should run tests.
  //
  maxInstances: isDebug ? 1 : 5,
  //
  // If you have trouble getting all important capabilities together, check out the
  // Sauce Labs platform configurator - a great tool to configure your capabilities:
  // https://saucelabs.com/platform/platform-configurator
  //
  capabilities: [
    {
      browserName: 'chrome',
      'goog:chromeOptions': {
        args: chromeArgs
      }
    }
  ],
  services: []
};
