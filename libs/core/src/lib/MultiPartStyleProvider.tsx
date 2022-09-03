import { SoperioComponent, createContext } from "@soperio/react";

const [StylesProvider, useStyles] = createContext<Partial<Record<string, SoperioComponent>>>();

export { StylesProvider as MultiPartStyleProvider, useStyles as useMultiPartStyles };
