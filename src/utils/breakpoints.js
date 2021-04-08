import facepaint from "facepaint";

const breakpoints = [576, 768, 992, 1200];
// eslint-disable-next-line import/prefer-default-export
export const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));
