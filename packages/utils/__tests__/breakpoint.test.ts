import { Breakpoint } from '../src/config';
import BreakpointHelpers from '../src/helpers/breakpoint';

const bp: Breakpoint = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280
};

const bpHelpers = new BreakpointHelpers(bp);

test('Should return exact breakpoint', () => {
  // sm
  expect(bpHelpers.getCurrentBreakpoint(-1)).toBe('sm');
  expect(bpHelpers.getCurrentBreakpoint(639)).toBe('sm');
  expect(bpHelpers.getCurrentBreakpoint(640)).toBe('sm');

  // md
  expect(bpHelpers.getCurrentBreakpoint(767)).toBe('md');
  expect(bpHelpers.getCurrentBreakpoint(768)).toBe('md');

  // lg
  expect(bpHelpers.getCurrentBreakpoint(1023)).toBe('lg');
  expect(bpHelpers.getCurrentBreakpoint(1024)).toBe('lg');

  // xl
  expect(bpHelpers.getCurrentBreakpoint(1279)).toBe('xl');
  expect(bpHelpers.getCurrentBreakpoint(1280)).toBe('xl');
  expect(bpHelpers.getCurrentBreakpoint(9999)).toBe('xl');
  expect(bpHelpers.getCurrentBreakpoint(1e9)).toBe('xl');
});
