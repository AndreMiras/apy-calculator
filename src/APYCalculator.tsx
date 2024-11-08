import { useState } from "react";
import { APYParams } from "./types";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { calculateRates, CompoundFrequency } from "./lib/utils";

type APYCalculatorProps = APYParams & {
  setStartDate: (date: string) => void;
  setEndDate: (date: string) => void;
  setStartBalance: (balance: number) => void;
  setEndBalance: (balance: number) => void;
  setCompound: (frequency: APYParams["compound"]) => void;
};

const APYCalculator = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  startBalance,
  setStartBalance,
  endBalance,
  setEndBalance,
  compound,
  setCompound,
}: APYCalculatorProps) => {
  const [results, setResults] = useState({ apr: 0, apy: 0, daysElapsed: 0 });

  const handleCalculateRates = () => {
    const result = calculateRates(
      startDate,
      endDate,
      startBalance,
      endBalance,
      compound,
    );
    setResults(result);
  };

  return (
    <Card className="w-full max-w-md mx-auto p-6">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          APY/APR Calculator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="startDate">Start Date</Label>
            <Input
              id="startDate"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="endDate">End Date</Label>
            <Input
              id="endDate"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="startBalance">Start Balance</Label>
            <Input
              id="startBalance"
              type="number"
              value={startBalance}
              onChange={(e) => setStartBalance(Number(e.target.value))}
              placeholder="0.00"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="endBalance">End Balance</Label>
            <Input
              id="endBalance"
              type="number"
              value={endBalance}
              onChange={(e) => setEndBalance(Number(e.target.value))}
              placeholder="0.00"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="compound">Compound Frequency</Label>
          <Select
            value={compound}
            onValueChange={(value) => setCompound(value as CompoundFrequency)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select compound frequency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="daily">Daily</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
              <SelectItem value="annually">Annually</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <button
          onClick={handleCalculateRates}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors mt-4"
        >
          Calculate
        </button>

        {results.apr !== 0 && (
          <div className="mt-6 space-y-2">
            <div className="flex justify-between p-2 bg-gray-50 rounded">
              <span className="font-medium">Days Elapsed:</span>
              <span>{results.daysElapsed} days</span>
            </div>
            <div className="flex justify-between p-2 bg-gray-50 rounded">
              <span className="font-medium">APR:</span>
              <span>{results.apr}%</span>
            </div>
            <div className="flex justify-between p-2 bg-gray-50 rounded">
              <span className="font-medium">APY:</span>
              <span>{results.apy}%</span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default APYCalculator;
