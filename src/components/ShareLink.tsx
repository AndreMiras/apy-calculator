import { Link } from "react-router-dom";

import { APYParams } from "../types";

const ShareLink = ({
  startDate,
  endDate,
  startBalance,
  endBalance,
  compound,
  children,
}: APYParams & { children?: React.ReactNode }) => {
  const params = new URLSearchParams({
    startDate,
    endDate,
    startBalance: startBalance.toString(),
    endBalance: endBalance.toString(),
    compound,
  });

  const shareUrl = `/?${params.toString()}`;

  return (
    <Link
      to={shareUrl}
      className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
    >
      {children}
    </Link>
  );
};

export default ShareLink;
