import {FILTER_NAMES} from "../constants.js";

export const generateFilters = () => FILTER_NAMES.map((it) => {
  return {
    title: it,
    count: Math.floor(Math.random() * 10),
  };
});
