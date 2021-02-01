import type { ClientAppEnhance } from "@vuepress/client";
import { createVueApp } from "@vuepress/client";

// @ts-ignore
const app = createVueApp({});

const enhanceApp: ClientAppEnhance = () => {
  console.log("test");
};

export default enhanceApp;

export const a = 1;
