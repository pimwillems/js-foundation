import { getBookCount } from "./model.js";
import { renderCount } from "./view.js";
export function start(books) { renderCount(getBookCount(books)); }
