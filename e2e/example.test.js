import {
  getDefaultSettings, setupJest, getDriver, Helpers,
} from "../test/selenium";

const defaultSettings = getDefaultSettings();

setupJest(defaultSettings);

const capabilities = {
  "os": "Windows",
  "os_version": "10",
  "browserName": "Edge",
  "browser_version": "81.0 beta",
  "browserstack.local": "false",
  "browserstack.selenium_version": "3.5.2",

  // "os": "Windows",
  // "os_version": "10",
  // "browserName": "IE",
  // "browser_version": "11.0",
  // "browserstack.local": "false",
  // "browserstack.selenium_version": "3.5.2",

  // "os_version": "7.0",
  // "device": "Samsung Galaxy S8",
  // "real_mobile": "true",
  // "browserstack.local": "false",
  // "browserName": "Android",

  // "os_version": "13",
  // "device": "iPad 7th",
  // "real_mobile": "true",
  // "browserstack.local": "false",
  // "browserName": "iPad",

  // "browserName": "Chrome",
  // "browser_version": "81.0 beta",
  // "os": "OS X",
  // "os_version": "Catalina",
  // "resolution": "1024x768",
};

describe("react-wireframes", () => {
  let driver;
  let helpers;

  beforeEach(async () => {
    driver = await getDriver({
      ...defaultSettings.capabilities,
      ...capabilities,
    });

    helpers = Helpers(driver, defaultSettings);
  });

  afterEach(() => {
    if (driver) {
      driver.quit();
    }
  });

  describe("Wireframe", () => {
    it("should have correct title", async () => {
      await driver.get("https://matt-dunn.github.io/react-wireframes/");

      const el = await helpers.querySelector("[data-test=\"toggle\"]");

      el.click();

      await driver.sleep(1000);

      el.click();

      await driver.sleep(2000);

      const title = await driver.getTitle();

      expect(title).toEqual("Wireframe Test");
    });
  });
});
