export const rgbToHex = (rgb: string): string => {
  const [r, g, b] = rgb.match(/\d+/g)?.map(Number) || [];
  if (r === undefined || g === undefined || b === undefined) {
    throw new Error('Invalid RGB color format');
  }
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
};
