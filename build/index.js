#!/usr/bin/env node

import { createRequire as createImportMetaRequire } from "module";
import.meta.require ||= (id) => createImportMetaRequire(import.meta.url)(id);
var a = (e) => {
  return import.meta.require(e);
};
var i = a("fs");
i.writeFileSync(
  "rnu.config.ts",
  `
import { createConfig } from "react-native-ustyle";
export const CONFIG = createConfig({
  aliases:{
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
    roundedTop: ["borderTopLeftRadius", "borderTopRightRadius"],
    roundedBottom: ["borderBottomLeftRadius", "borderBottomRightRadius"],
    roundedLeft: ["borderTopLeftRadius", "borderBottomLeftRadius"],
    roundedRight: ["borderTopRightRadius", "borderBottomRightRadius"],
  },
  tokens:{
    global:{
      primary: "#007bff",
      secondary: "#6c757d",
      success: "#28a745",
      danger: "#dc3545",
      warning: "#ffc107",
    },
    space:{
      0: 0,
      1: 4,
      2: 8,
      3: 12,
      4: 16,
      5: 20,
      6: 24,
      7: 28,
      8: 32,
      9: 36,
      10: 40,
      11: 44,
      12: 48,
      13: 52,
      14: 56,
      15: 60,
      16: 64,
      17: 68,
      18: 72,
      19: 76,
      20: 80,
    },
  },
  components:{
    Box:{
      tag:"View",
      baseStyle:{
        padding:4,
      }
    },
    Heading:{
      tag:"Text",
      baseStyle:{
        fontSize:20,
        fontWeight:"bold",
      },
      variants:{
        size:{
          sm:{
            fontSize:16,
          },
          md:{
            fontSize:20,
          },
          lg:{
            fontSize:24,
          }
        }
      }
    },
  }
} as const);

type ConfigType = typeof CONFIG;

declare module "react-native-ustyle" {
  interface ICustomConfig extends ConfigType {}
}
`
);
console.log(
  "rnu.config.ts file created successfully!\nNow you can modify rnu.config.ts file to use react-native-ustyle easily."
);
