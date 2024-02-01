import { World, setWorldConstructor } from '@wdio/cucumber-framework';


import WorldState from './state';

import type { IWorldOptions } from '@cucumber/cucumber';

class CustomWorld extends World {
  // @ts-expect-error Will be defined in hook
  testName: string;

  state: WorldState;
  start: number;

  constructor(props: IWorldOptions) {
    super(props);
    this.state = new WorldState();
    this.start = new Date().getTime();
  }
}

setWorldConstructor(CustomWorld);

export default CustomWorld;
