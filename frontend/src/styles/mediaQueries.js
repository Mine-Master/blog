export const breakpoints = {
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1200,
  xl: 1400,
  xxl: 1550,
  fhd: 1920,
  bsc: 2100,
};

export const mediaQueries = {
  greaterThan: (key) => (style) =>
    `@media (min-width: ${breakpoints[key]}px) { ${style} }`,

  lessThan: (key) => (style) =>
    `@media (max-width: ${breakpoints[key]}px) { ${style} }`,

  between: (min, max) => (style) =>
    `@media (min-width: ${breakpoints[min]}px) and (max-width: ${breakpoints[max]}px) { ${style} }`,
};
