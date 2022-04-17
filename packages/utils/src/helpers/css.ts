/**
 * Checking if in a Node environment
 * @returns {boolean}
 */
export function isNode() {
  return typeof process === 'object' && typeof require === 'function';
}

/**
 * Checking if in a Service Worker environment.
 * @returns {boolean}
 */
export function isServiceWorker() {
  return typeof importScripts === 'function';
}

/**
 * Checking if in a browser environment.
 * @returns {boolean}
 */
export function isBrowser() {
  return typeof window === 'object' && !isNode() && !isServiceWorker();
}

/**
 * makeCSSVar is a function which creates CSS variables in browser environment.
 * @param name
 * @param value
 * @param priority
 * @returns {void}
 */
export function makeCSSVar(name: string, value: string, priority?: string) {
  if (!isBrowser()) return;
  window.document.documentElement.style.setProperty(name, value, priority);
}
