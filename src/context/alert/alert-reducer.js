import { SHOW_ALERT, HIDE_ALERT } from "../types";

const handlers = {
  [SHOW_ALERT]: (state, payload) => payload,
  [HIDE_ALERT]: () => null,
  DEFAULT: state => state
};

export const alertReducer = (state, { type, payload }) => {
  const handler = handlers[type] || handlers.DEFAULT;
  return handler(state, payload);
};
