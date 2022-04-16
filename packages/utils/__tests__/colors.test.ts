import { defaultColors, BaseColors, defaultBaseColors } from '../src/config';

test('Should generate correct color palette', () => {
  expect(typeof defaultColors.black).toBe('string');
  expect(typeof defaultColors.white).toBe('string');
  // Alphas
  expect(typeof defaultColors.red).toBe('object');
  expect(typeof defaultColors.gray).toBe('object');
  expect(typeof defaultColors.orange).toBe('object');
  expect(typeof defaultColors.cyan).toBe('object');
  expect(typeof defaultColors.whiteAlpha).toBe('object');
  expect(typeof defaultColors.blackAlpha).toBe('object');
  expect(typeof defaultColors.pink).toBe('object');
  expect(typeof defaultColors.purple).toBe('object');
  expect(typeof defaultColors.green).toBe('object');
  expect(typeof defaultColors.teal).toBe('object');
  expect(typeof defaultColors.yellow).toBe('object');
  expect(typeof defaultColors.cyan).toBe('object');

  expect(Object.keys(defaultColors.red)).toStrictEqual([
    '50',
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900'
  ]);
  expect(Object.keys(defaultColors.gray)).toStrictEqual([
    '50',
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900'
  ]);
  expect(Object.keys(defaultColors.orange)).toStrictEqual([
    '50',
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900'
  ]);
  expect(Object.keys(defaultColors.cyan)).toStrictEqual([
    '50',
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900'
  ]);
  expect(Object.keys(defaultColors.whiteAlpha)).toStrictEqual([
    '50',
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900'
  ]);
  expect(Object.keys(defaultColors.blackAlpha)).toStrictEqual([
    '50',
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900'
  ]);
  expect(Object.keys(defaultColors.pink)).toStrictEqual([
    '50',
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900'
  ]);
  expect(Object.keys(defaultColors.purple)).toStrictEqual([
    '50',
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900'
  ]);
  expect(Object.keys(defaultColors.green)).toStrictEqual([
    '50',
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900'
  ]);
  expect(Object.keys(defaultColors.teal)).toStrictEqual([
    '50',
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900'
  ]);
  expect(Object.keys(defaultColors.yellow)).toStrictEqual([
    '50',
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900'
  ]);
  expect(Object.keys(defaultColors.cyan)).toStrictEqual([
    '50',
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900'
  ]);
});
