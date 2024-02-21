const configCode = `import { createConfig } from 'react-native-ustyle';
export const CONFIG = createConfig({
  p: 'padding',
  m: 'margin',
  t: 'top',
  b: 'bottom',
  l: 'left',
  r: 'right',
  h: 'height',
  w: 'width',
  bg: 'backgroundColor',
  c: 'color',
  mx: 'marginHorizontal',
  bc: 'borderColor',
  bw: 'borderWidth',
  mr: 'marginRight',
} as const);

type ConfigType = typeof CONFIG;

declare module 'react-native-ustyle' {
  interface ICustomConfig extends ConfigType {}
}
`;

// create and write rnu.config.ts
const fs = require("fs");
const path = require("path");

fs.writeFileSync(path.join(__dirname, "rnu.config.ts"), configCode, "utf8");
