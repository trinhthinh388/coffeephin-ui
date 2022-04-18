import { trim } from 'lodash';
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
  return typeof window === 'object';
}

/**
 * makeCSSVar is a function which creates CSS variables in browser environment.
 * @param name
 * @param value
 * @returns {string}
 */
export function makeCSSVar(name: string, value: string) {
  return `${name}: ${value}`;
}

/**
 *
 * @param template Generate `style` element from provided template and inject it to the `head` element.
 * @returns {void}
 */
export function injectCSSToHead(template: string) {
  if (!isBrowser()) return;
  const styleEl = document.createElement('style');
  styleEl.setAttribute('data-emotion', 'css-global');
  styleEl.setAttribute('data-s', 'coffeephin-ui');
  styleEl.appendChild(document.createTextNode(template));
  window.document.head.appendChild(styleEl);
}

/**
 * addPrefix is a function which will prefix every css variable.
 * @param value -  the value which needs to be prefixed.
 * @param prefix - the prefix used for this css variable. `"--cp"`
 */
export function addPrefix(vars: any[], prefix: string = '--cp'): any[] {
  return vars.map((v) => {
    if (typeof v === 'object' && v.length) {
      return addPrefix(v, prefix);
    }
    const [name, value] = v.split(':');
    return `${prefix}-${trim(name, '-').trim()}: ${trim(value)}`;
  });
}
