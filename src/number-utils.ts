export const clampValue = (min: number, value: number, max: number) => Math.min(max, Math.max(value, min));
export const clampToMax = (value: number, max: number) => clampValue(0, value, max);