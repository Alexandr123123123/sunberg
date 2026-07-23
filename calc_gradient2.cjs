const hexToRgb = (hex) => {
  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5, 7), 16);
  return [r, g, b];
};

const rgbToHex = (r, g, b) => {
  const toHex = (c) => {
    const hex = Math.round(c).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  return '#' + toHex(r) + toHex(g) + toHex(b);
};

const interpolateColor = (color1, color2, factor) => {
  const result = [];
  for (let i = 0; i < 3; i++) {
    result[i] = color1[i] + factor * (color2[i] - color1[i]);
  }
  return result;
};

const c1 = hexToRgb('#5B7E5F'); // Primary brand green (#5B7E5F)
const c2 = hexToRgb('#C4785B'); // Coral accent (#C4785B)

console.log("<svg style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }} aria-hidden='true'>");
console.log("  <defs>");

for (let i = 0; i < 10; i++) {
  const factorStart = i / 10;
  const factorEnd = (i + 1) / 10;
  
  const startColor = rgbToHex(...interpolateColor(c1, c2, factorStart));
  const endColor = rgbToHex(...interpolateColor(c1, c2, factorEnd));
  
  console.log(`    <linearGradient id="iconGrad${i}" x1="0%" y1="0%" x2="0%" y2="100%">`);
  console.log(`      <stop offset="0%" stopColor="${startColor}" />`);
  console.log(`      <stop offset="100%" stopColor="${endColor}" />`);
  console.log(`    </linearGradient>`);
}

console.log("  </defs>");
console.log("</svg>");
