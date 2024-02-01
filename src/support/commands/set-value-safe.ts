import { WdioElement } from '../../types';

const addSetValueSafe = () => {
  browser.addCommand(
    'setValueSafe',
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async function (this: WdioElement, text: string, ignoreCase = false) {
      await this.setValue(text);
      // const MAX_ATTEMPTS = 5;
      // const elementId = await this.elementId;
      //
      // const compareText = (actualText: string, expectedText: string) => {
      //   if (!ignoreCase) {
      //     return actualText === expectedText;
      //   }
      //   return actualText.toLowerCase() === expectedText.toLowerCase();
      // };
      //
      // const getValue = async () => browser.getElementAttribute(elementId, 'value');
      //
      // // Clear the input before entering new value.
      // await browser.elementClear(elementId);
      //
      // for (let i = 0; i < MAX_ATTEMPTS; i++) {
      //   await this.setValue(text);
      //
      //   const actualText = await getValue();
      //   if (compareText(actualText, text)) {
      //     break;
      //   }
      // }
      //
      // const actualText = await getValue();
      // if (!compareText(actualText, text)) {
      //   throw new Error(
      //     `setValueSafe() failed to set the correct value: ${text}, element value: ${actualText}`
      //   );
      // }
    },
    true
  );
};

export default addSetValueSafe;
