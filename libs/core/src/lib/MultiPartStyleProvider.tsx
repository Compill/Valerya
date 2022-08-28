import { SoperioComponent } from "@soperio/theming";
import { createContext } from "./createContext";

const [StylesProvider, useStyles] = createContext<Partial<Record<string, SoperioComponent>>>();

export { StylesProvider as MultiPartStyleProvider, useStyles as useMultiPartStyles };
