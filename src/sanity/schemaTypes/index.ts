import { type SchemaTypeDefinition } from "sanity";
import { DesignEventsType } from "./designEvents";
import { headerType } from "./header";
import { heroType } from "./hero";
import { ideasSectionType } from "./ideasSection";
import { joinSectionType } from "./joinSection";
import { levelUpSectionType } from "./levelUpSection";
import { lowerFooterType } from "./lowerFooter";
import { targetSectionType } from "./targetSection";
import { toolsSectionType } from "./toolsSection";
import { upperFooterType } from "./upperFooter";
import { workSectionType } from "./workSection";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    headerType,
    heroType,
    joinSectionType,
    ideasSectionType,
    targetSectionType,
    toolsSectionType,
    workSectionType,
    levelUpSectionType,
    DesignEventsType,
    upperFooterType,
    lowerFooterType,
  ],
};
