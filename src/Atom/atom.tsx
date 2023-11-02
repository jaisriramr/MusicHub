import { atom } from "recoil";

const QueueState = atom({
  key: "queue-state",
  default: {},
});

export { QueueState };
