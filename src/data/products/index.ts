import type { CategoryData } from "./types";
import { pumpFuel } from "./pump-fuel";
import { pumpVacuum } from "./pump-vacuum";
import { valveFuel } from "./valve-fuel";
import { valveVacuum } from "./valve-vacuum";
import { etcCoupling } from "./etc-coupling";
import { etcFlange } from "./etc-flange";
import { etcFuel } from "./etc-fuel";
import { etcGasket } from "./etc-gasket";
import { etcJoint } from "./etc-joint";
import { etcVacuum } from "./etc-vacuum";
import { etcHose } from "./etc-hose";

export const productsData: Record<string, CategoryData> = {
  "pump-fuel": pumpFuel,
  "pump-vacuum": pumpVacuum,
  "valve-fuel": valveFuel,
  "valve-vacuum": valveVacuum,
  "etc-coupling": etcCoupling,
  "etc-flange": etcFlange,
  "etc-fuel": etcFuel,
  "etc-gasket": etcGasket,
  "etc-hose": etcHose,
  "etc-joint": etcJoint,
  "etc-vacuum": etcVacuum,
};

export const categories = Object.keys(productsData);

export type { ProductImage, Product, CategoryData } from "./types";
