import { WdioElement } from '../types';

class BasePage {
  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */
  public open (path?: string) {
    return browser.url(`https://the-internet.herokuapp.com/${path}`)
  }

  async setCheckBoxToState(element: WdioElement, desiredState: boolean) {
    const checkboxState = await element.isSelected();
    if (checkboxState !== desiredState) {
      await element.click();
    }
  }
}

export default BasePage;
