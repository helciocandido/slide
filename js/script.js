import { SlideNav } from "./slide.js";

const slide = new SlideNav(".slide", ".slide-wrapper", "active", 10);
slide.init();
slide.addArrow(".prev", ".next");

slide.addControl();
console.log(slide);
