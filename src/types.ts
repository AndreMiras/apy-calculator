import { CompoundFrequency } from "./lib/utils";

type APYParams = {
  startDate: string;
  endDate: string;
  startBalance: number;
  endBalance: number;
  compound: CompoundFrequency;
};

export type { APYParams };
