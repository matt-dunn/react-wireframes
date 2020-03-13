import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { JSDOM } from "jsdom";

configure({ adapter: new Adapter() });

const jsdom = new JSDOM("<!doctype html><html><body></body></html>", {
  url: "https://example.org/",
  referrer: "https://example.com/",
});
const { window } = jsdom;

const copyProps = (src, target) => {
  Object.defineProperties(target, {
    ...Object.getOwnPropertyDescriptors(src),
    ...Object.getOwnPropertyDescriptors(target),
  });
};

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: "node.js",
};
global.requestAnimationFrame = function requestAnimationFrame(callback) {
  return setTimeout(callback, 0);
};
global.cancelAnimationFrame = function cancelAnimationFrame(id) {
  clearTimeout(id);
};

copyProps(window, global);

// console.error = () => {};
// console.warn = () => {};
// console.debug = () => {};
// console.log = () => {};
