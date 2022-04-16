import * as tinycolor from 'tinycolor2';
import {
  DARK_COLOR_COUNT,
  LIGHT_COLOR_COUNT,
  BRIGHTNESS_STEP,
  BRIGHTNESS_STEP_2,
  SATURATION_STEP,
  SATURATION_STEP_2,
  HUE_STEP
} from 'src/constants';
import { ColorDepth } from 'src/config/theme/colors';

export default class ColorPalette {
  readonly color: string;
  static colorLevels = [0.5, 1, 2, 3, 4, 5, 7, 8, 9];
  constructor(_color: string) {
    this.color = _color;
    this.getHue = this.getHue.bind(this);
    this.getColorAtLevel = this.getColorAtLevel.bind(this);
    this.getSaturation = this.getSaturation.bind(this);
    this.getValue = this.getValue.bind(this);
  }

  private getHue(
    hsv: tinycolor.ColorFormats.HSV,
    i: number,
    isLight: boolean
  ): number {
    let hue;
    if (hsv.h >= 60 && hsv.h <= 240) {
      hue = isLight ? hsv.h - HUE_STEP * i : hsv.h + HUE_STEP * i;
    } else {
      hue = isLight ? hsv.h + HUE_STEP * i : hsv.h - HUE_STEP * i;
    }
    if (hue < 0) {
      hue += 360;
    } else if (hue >= 360) {
      hue -= 360;
    }
    return Math.round(hue);
  }

  private getSaturation(
    hsv: tinycolor.ColorFormats.HSV,
    i: number,
    isLight: boolean
  ): number {
    let saturation;
    if (isLight) {
      saturation = hsv.s - SATURATION_STEP * i;
    } else if (i === DARK_COLOR_COUNT) {
      saturation = hsv.s + SATURATION_STEP;
    } else {
      saturation = hsv.s + SATURATION_STEP_2 * i;
    }
    if (saturation > 1) {
      saturation = 1;
    }
    if (isLight && i === LIGHT_COLOR_COUNT && saturation > 0.1) {
      saturation = 0.1;
    }
    if (saturation < 0.06) {
      saturation = 0.06;
    }
    return Number(saturation.toFixed(2));
  }

  private getValue(
    hsv: tinycolor.ColorFormats.HSV,
    i: number,
    isLight: boolean
  ): number {
    var value;
    if (isLight) {
      value = hsv.v + BRIGHTNESS_STEP * i;
    } else {
      value = hsv.v - BRIGHTNESS_STEP_2 * i;
    }
    if (value > 1) {
      value = 1;
    }
    return Number(value.toFixed(2));
  }

  public getColorAtLevel(index: number) {
    const isLight = index < 6;
    const hsv = tinycolor(this.color).toHsv();
    const i = isLight
      ? LIGHT_COLOR_COUNT + 1 - index
      : index - LIGHT_COLOR_COUNT - 1;
    return tinycolor({
      h: this.getHue(hsv, i, isLight),
      s: this.getSaturation(hsv, i, isLight),
      v: this.getValue(hsv, i, isLight)
    }).toHexString();
  }

  public getColorPalette(): ColorDepth {
    return ColorPalette.colorLevels.reduce<ColorDepth>(
      (palette, level) => {
        palette[level * 100] = this.getColorAtLevel(level);
        return palette;
      },
      {
        50: '',
        100: '',
        200: '',
        300: '',
        400: '',
        500: '',
        600: this.color,
        700: '',
        800: '',
        900: ''
      }
    );
  }
}
