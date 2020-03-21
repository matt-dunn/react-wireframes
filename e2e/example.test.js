import {
  getDefaultSettings, setupJest, getDriver, Helpers,
} from "../test/selenium";

const defaultSettings = getDefaultSettings();

setupJest(defaultSettings);

const capabilities = {
  "browserName": "Chrome",
  "browser_version": "81.0 beta",
  "os": "OS X",
  "os_version": "Catalina",
  "resolution": "1024x768",
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
