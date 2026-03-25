/**
 * Collage vitrine Fiwè — node Figma 2857:3610 (1248×941).
 * Positions / crops extraits du dev mode pour reproduire le chevauchement sans empiler au centre.
 */
export const FIWE_SHOWCASE_W = 1248;
export const FIWE_SHOWCASE_H = 941;

export type FiweShowcaseTile = {
  /** Boîte de positionnement (flex + centre), px Figma */
  left: number;
  top: number;
  outerW: number;
  outerH: number;
  rotate: number;
  /** Cadre écran interne après rotation, px */
  innerW: number;
  innerH: number;
  /** Strip screenshot : hauteur % du cadre clip, position */
  imgH: number;
  imgLeft: number;
  imgTop: number;
  z: number;
};

export const fiweShowcaseTiles: FiweShowcaseTile[] = [
  // Rangée 1 (3530)
  {
    left: -108.4,
    top: 356.51,
    outerW: 560.281,
    outerH: 364.456,
    rotate: -11.03,
    innerW: 518.132,
    innerH: 270.302,
    imgH: 1069.68,
    imgLeft: 0.02,
    imgTop: -165.84,
    z: 10,
  },
  {
    left: 462.84,
    top: 244.44,
    outerW: 560.35,
    outerH: 364.645,
    rotate: -11.06,
    innerW: 518.132,
    innerH: 270.302,
    imgH: 1069.68,
    imgLeft: 0,
    imgTop: -259.63,
    z: 10,
  },
  {
    left: 1034.41,
    top: 135.12,
    outerW: 560.604,
    outerH: 362.84,
    rotate: -10.81,
    innerW: 519.132,
    innerH: 270.302,
    imgH: 1069.68,
    imgLeft: 0,
    imgTop: -359.26,
    z: 10,
  },
  // Rangée 2 (3547)
  {
    left: -318.9,
    top: 731.56,
    outerW: 560.281,
    outerH: 364.456,
    rotate: -11.03,
    innerW: 518.132,
    innerH: 270.302,
    imgH: 1069.68,
    imgLeft: 0.24,
    imgTop: -362.17,
    z: 20,
  },
  {
    left: 252.94,
    top: 619.51,
    outerW: 560.35,
    outerH: 364.645,
    rotate: -11.06,
    innerW: 518.132,
    innerH: 270.302,
    imgH: 1069.68,
    imgLeft: -0.01,
    imgTop: -423.77,
    z: 20,
  },
  {
    left: 824.82,
    top: 510.21,
    outerW: 560.604,
    outerH: 362.84,
    rotate: -10.81,
    innerW: 519.132,
    innerH: 270.302,
    imgH: 1069.68,
    imgLeft: 0.02,
    imgTop: -558.94,
    z: 20,
  },
  // Rangée 3 (3531) — au-dessus en z pour le recouvrement Figma
  {
    left: -490.2,
    top: 98.61,
    outerW: 560.281,
    outerH: 364.456,
    rotate: -11.03,
    innerW: 518.132,
    innerH: 270.302,
    imgH: 1069.68,
    imgLeft: 0,
    imgTop: 0,
    z: 30,
  },
  {
    left: 81.05,
    top: -13.46,
    outerW: 560.35,
    outerH: 364.645,
    rotate: -11.06,
    innerW: 518.132,
    innerH: 270.302,
    imgH: 1069.68,
    imgLeft: 0,
    imgTop: 0,
    z: 30,
  },
  {
    left: 652.62,
    top: -122.78,
    outerW: 560.604,
    outerH: 362.84,
    rotate: -10.81,
    innerW: 519.132,
    innerH: 270.302,
    imgH: 1069.68,
    imgLeft: 0.01,
    imgTop: -91.14,
    z: 30,
  },
];
