export enum ScenarioKeys {
  Mocker = 'mocker',
  Tasker = 'tasker'
}

class WorldState {
  private readonly store = new Map<ScenarioKeys, any>();

  getValue<T>(key: ScenarioKeys, force?: boolean): T {
    if (!force && !this.contains(key)) {
      throw new Error(`[ World State ] Value not set for key ${key}`);
    }
    return this.store.get(key);
  }

  getValues(): Record<string, any> {
    return Object.fromEntries(this.store);
  }

  setValue(key: ScenarioKeys, value: any): void {
    this.store.set(key, value);
  }

  setValues(values: Partial<{ [key in ScenarioKeys]: any }>): void {
    (Object.keys(values) as Array<ScenarioKeys>).forEach((key) => {
      this.store.set(key, values[key]);
    });
  }

  contains(key: ScenarioKeys): boolean {
    return this.store.has(key);
  }
}

export default WorldState;
