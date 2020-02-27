const goldenRatio: number = Math.PI;

const getHexValue = (value: number): string => {
  return Math.round(value * 255).toString(16);
};

const HSVtoRGB = (h: number, s: number, v: number): string => {
  let r = 0;
  let g = 0;
  let b = 0;
  let i = 0;
  let f = 0;
  let p = 0;
  let q = 0;
  let t = 0;

  i = Math.floor(h * 6);
  f = h * 6 - i;
  p = v * (1 - s);
  q = v * (1 - f * s);
  t = v * (1 - (1 - f) * s);
  switch (i % 6) {
    case 0:
      r = v;
      g = t;
      b = p;
      break;
    case 1:
      r = q;
      g = v;
      b = p;
      break;
    case 2:
      r = p;
      g = v;
      b = t;
      break;
    case 3:
      r = p;
      g = q;
      b = v;
      break;
    case 4:
      r = t;
      g = p;
      b = v;
      break;
    case 5:
      r = v;
      g = p;
      b = q;
      break;
  }

  return `#${getHexValue(r)}${getHexValue(g)}${getHexValue(b)}`;
};

export const generateHex = (saturation: number, value: number): string => {
  const hue = (goldenRatio * Math.random()) % 1;
  return HSVtoRGB(hue, saturation, value);
};
