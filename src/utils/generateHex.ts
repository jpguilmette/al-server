const goldenRatio: number = 0.618033988749895;
export const generateHex = (saturation: number, value: number): string => {
  let hue = (goldenRatio + Math.random()) % 1;
  return hsvToRgb(hue, saturation, value);
};

const hsvToRgb = (h: number, s: number, v: number): string => {
  let hi: number = h * 6;
  let f: number = h * 6 - hi;
  let p: number = v * (1 - s);
  let q: number = v * (1 - f * s);
  let t: number = v * (1 - (1 - f) * s);
  let r: number = 0;
  let g: number = 0;
  let b: number = 0;
  switch (hi) {
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
  return `#${r * 256}${g * 256}${b * 256}`;
};
