declare namespace WebdriverIO {
  interface Element {
    setValueSafe(value: string, ignoreCase?: boolean): Promise<void>;
  }
}
