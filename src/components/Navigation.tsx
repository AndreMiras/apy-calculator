import { Calculator, Home, Info, Share } from "lucide-react";

import { APYParams } from "../types";
import ShareLink from "./ShareLink";

type NavigationProps = APYParams;

const Navigation = ({
  startDate,
  endDate,
  startBalance,
  endBalance,
  compound,
}: NavigationProps) => (
  <nav className="border-b">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold text-blue-600">
              <Calculator className="inline-block h-5 w-5 mr-1" />
              APY Calculator
            </span>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <a
              href="/"
              className="border-blue-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
            >
              <Home className="h-5 w-5 mr-1" />
              Home
            </a>
            <ShareLink
              startDate={startDate}
              endDate={endDate}
              startBalance={startBalance}
              endBalance={endBalance}
              compound={compound}
            >
              <Share className="h-5 w-5 mr-1" />
              Share
            </ShareLink>
          </div>
        </div>
        <div className="flex items-center">
          <a
            href="https://github.com/AndreMiras/apy-calculator"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100"
          >
            <Info className="h-5 w-5 mr-1" />
            About
          </a>
        </div>
      </div>
    </div>
  </nav>
);

export default Navigation;
