import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const COMPOUND_FREQUENCIES = {
  daily: 365,
  monthly: 12,
  annually: 1,
} as const;

export type CompoundFrequency = keyof typeof COMPOUND_FREQUENCIES;

// Helper function to calculate APR, APY, and days elapsed
export const calculateRates = (
  startDate: string,
  endDate: string,
  startBalance: string,
  endBalance: string,
  compound: CompoundFrequency,
) => {
  const start = new Date(startDate).getTime();
  const end = new Date(endDate).getTime();
  const daysElapsed = (end - start) / (1000 * 60 * 60 * 24);
  const startBalanceNumber = parseFloat(startBalance);
  const endBalanceNumber = parseFloat(endBalance);

  if (!startBalanceNumber || !endBalanceNumber || daysElapsed <= 0) {
    return { apr: 0, apy: 0, daysElapsed: 0 };
  }

  // Calculate simple interest rate (APR)
  const apr =
    ((endBalanceNumber - startBalanceNumber) / startBalanceNumber) *
    (365 / daysElapsed) *
    100;

  const compoundFrequency = COMPOUND_FREQUENCIES[compound];
  // Calculate APY
  const r = apr / 100;
  const apy =
    (Math.pow(1 + r / compoundFrequency, compoundFrequency) - 1) * 100;

  return {
    apr: parseFloat(apr.toFixed(2)),
    apy: parseFloat(apy.toFixed(2)),
    daysElapsed: Math.round(daysElapsed),
  };
};
