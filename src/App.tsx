import { useState } from "react";
import { useLocation } from "react-router-dom";
import APYCalculator from "./APYCalculator";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { COMPOUND_FREQUENCIES, CompoundFrequency } from "./lib/utils";

const App = () => {
  const params = new URLSearchParams(useLocation().search);

  // Format today's date as YYYY-MM-DD
  const formatDate = (date: Date) => date.toISOString().split("T")[0];
  const today = formatDate(new Date());

  const [startDate, setStartDate] = useState(params.get("startDate") || today);
  const [endDate, setEndDate] = useState(params.get("endDate") || today);
  const [startBalance, setStartBalance] = useState(
    Number(params.get("startBalance") || 0),
  );
  const [endBalance, setEndBalance] = useState(
    Number(params.get("endBalance") || 0),
  );
  const validCompounds = new Set<CompoundFrequency>(
    Object.keys(COMPOUND_FREQUENCIES) as CompoundFrequency[],
  );
  const getCompoundFrequency = (value: string | null): CompoundFrequency =>
    validCompounds.has(value as CompoundFrequency)
      ? (value as CompoundFrequency)
      : "daily";
  const [compound, setCompound] = useState<CompoundFrequency>(
    getCompoundFrequency(params.get("compound")),
  );
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navigation
        startDate={startDate}
        endDate={endDate}
        startBalance={startBalance}
        endBalance={endBalance}
        compound={compound}
      />
      <main className="flex-grow flex items-center justify-center p-6">
        <APYCalculator
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          startBalance={startBalance}
          setStartBalance={setStartBalance}
          endBalance={endBalance}
          setEndBalance={setEndBalance}
          compound={compound}
          setCompound={setCompound}
        />
      </main>
      <Footer />
    </div>
  );
};

export default App;
