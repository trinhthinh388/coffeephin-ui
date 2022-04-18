import { Breakpoint } from 'src/config';

export default class BreakpointHelpers {
  constructor(_bp: Breakpoint) {
    this.breakpoints = _bp;
    this.bpKeys = Object.keys(_bp);
    this.getCurrentBreakpoint = this.getCurrentBreakpoint.bind(this);
  }

  private breakpoints: Breakpoint;
  private bpKeys: Array<keyof Breakpoint>;

  getCurrentBreakpoint(currentWith: number): keyof Breakpoint | null {
    if (!this.bpKeys.length) return null;
    for (let i = 0; i < this.bpKeys.length; i++) {
      const key = this.bpKeys[i];
      const bpWidth = this.breakpoints[key];
      if (currentWith <= bpWidth) return key;
    }

    return this.bpKeys[this.bpKeys.length - 1];
  }
}
