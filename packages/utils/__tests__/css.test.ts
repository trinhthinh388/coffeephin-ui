import { addPrefix } from '../src/helpers/css';

test('Should prefix every css variables.', () => {
  const cssVars = ['gg: #fff', '--ff: #ggg'];
  const nestedVars = [cssVars];

  expect(addPrefix(cssVars)).toEqual(['--cp-gg: #fff', '--cp-ff: #ggg']);
  expect(addPrefix(nestedVars)).toEqual([['--cp-gg: #fff', '--cp-ff: #ggg']]);
});
