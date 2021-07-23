/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
import "@testing-library/jest-dom";
import "@testing-library/react";
import { server } from "./__mocks__/gqlMswServer.js";

// mock scrollTo browser functions
// https://stackoverflow.com/questions/57311971/error-not-implemented-window-scrollto-how-do-we-remove-this-error-from-jest-t
const noop = () => {};
Object.defineProperty(window, "scrollTo", { value: noop, writable: true });

const observe = jest.fn();
const unobserve = jest.fn();
window.IntersectionObserver = jest.fn(() => ({
  observe,
  unobserve,
}));

// Establish API mocking before all tests.
beforeAll(() => {
  server.listen();
});
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());
// Clean up after the tests are finished.
afterAll(() => server.close());
