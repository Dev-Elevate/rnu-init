const code = `
import { createConfig } from "react-native-ustyle";
export const CONFIG = createConfig({
  p: "padding",
  pt: "paddingTop",
  pb: "paddingBottom",
  pl: "paddingLeft",
  pr: "paddingRight",
  px: "paddingHorizontal",
  py: "paddingVertical",
  m: "margin",
  mt: "marginTop",
  mb: "marginBottom",
  ml: "marginLeft",
  mr: "marginRight",
  mx: "marginHorizontal",
  my: "marginVertical",
  t: "top",
  b: "bottom",
  l: "left",
  r: "right",
  h: "height",
  w: "width",
  flex: "flex",
  direction: "flexDirection",
  wrap: "flexWrap",
  justify: "justifyContent",
  align: "alignItems",
  alignContent: "alignContent",
  self: "alignSelf",
  grow: "flexGrow",
  shrink: "flexShrink",
  basis: "flexBasis",
  lineH: "lineHeight",
  fontSize: "fontSize",
  fontW: "fontWeight",
  family: "fontFamily",
  fontStyle: "fontStyle",
  letterSpacing: "letterSpacing",
  textAlign: "textAlign",
  textDecoration: "textDecorationLine",
  overflow: "overflow",
  shadow: "shadowColor",
  shadowOffset: "shadowOffset",
  shadowOpacity: "shadowOpacity",
  shadowRadius: "shadowRadius",
  elevation: "elevation",
  position: "position",
  z: "zIndex",
  transform: "transform",
  bg: "backgroundColor",
  op: "opacity",
  c: "color",
  borderColor: "borderColor",
  rounded: "borderRadius",
  borderWidth: "borderWidth",
  gap: "gap",
} as const);

type ConfigType = typeof CONFIG;

declare module "react-native-ustyle" {
  interface ICustomConfig extends ConfigType {}
}
`;
// write the code in run.config.ts file in user's project

const fs = require("fs");

fs.writeFileSync("rnu.config.ts", code);
console.log(
  "rnu.config.ts file created successfully!\nNow you can modify rnu.config.ts file to use react-native-ustyle easily."
);
