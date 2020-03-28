const { Builder, By, until } = require("selenium-webdriver");

const USE_BROWSER_STACK = process.env.USE_BROWSER_STACK || false;

export async function getDriver(capabilities) {
  if (USE_BROWSER_STACK) {
    return new Builder()
      .usingServer("http://hub-cloud.browserstack.com/wd/hub")
      .withCapabilities(capabilities)
      .build();
  }

  return new Builder()
    // .withCapabilities(capabilities)
    .forBrowser("chrome")
    .build();
}

export async function getElementById(driver, { waitUntilTime }, id) {
  const el = await driver.wait(until.elementLocated(By.id(id)), waitUntilTime);
  return driver.wait(until.elementIsVisible(el), waitUntilTime);
}

export async function querySelector(driver, { waitUntilTime }, selector) {
  const el = await driver.wait(until.elementLocated(By.css(selector)), waitUntilTime);
  return driver.wait(until.elementIsVisible(el), waitUntilTime);
}

export async function getElementByXPath(driver, { waitUntilTime }, xpath) {
  const el = await driver.wait(until.elementLocated(By.xpath(xpath)), waitUntilTime);
  return driver.wait(until.elementIsVisible(el), waitUntilTime);
}

export function Helpers(driver, settings) {
  return {
    getElementById: getElementById.bind(null, driver, settings),
    querySelector: querySelector.bind(null, driver, settings),
    getElementByXPath: getElementByXPath.bind(null, driver, settings),
  };
}

export function getDefaultSettings() {
  if (!process.env.BROWSER_STACK_USER) {
    throw new Error("process.env.BROWSER_STACK_USER not defined");
  }

  if (!process.env.BROWSER_STACK_KEY) {
    throw new Error("process.env.BROWSER_STACK_KEY not defined");
  }

  return {
    waitUntilTime: 40000,
    capabilities: {
      "browserstack.user": process.env.BROWSER_STACK_USER,
      "browserstack.key": process.env.BROWSER_STACK_KEY,
      "name": "react-wireframes",
      "project": "Wireframe Components",
      "build": "Components",
    },
  };
}

export function setupJest(settings) {
  jest.setTimeout(settings.waitUntilTime);
}
