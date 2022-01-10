export const withinBounds = (max: number, min: number, value: number) =>
  Math.min(max || 0, Math.max(min, value));
