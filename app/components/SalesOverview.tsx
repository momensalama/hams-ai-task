"use client";

interface TotalSales {
  current: number;
  previous: number;
  growth: number;
}

interface SalesOverviewProps {
  totalSales: TotalSales;
}

const SalesOverview = ({ totalSales }: SalesOverviewProps) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-medium text-gray-900">Total Sales</h3>
      <div className="mt-2">
        <p className="text-3xl font-bold text-gray-900">
          {formatCurrency(totalSales.current)}
        </p>
        <div className="flex items-center mt-2">
          <span
            className={`text-sm font-medium ${
              totalSales.growth >= 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            {totalSales.growth >= 0 ? "+" : ""}
            {totalSales.growth}%
          </span>
          <span className="text-sm text-gray-500 ml-2">
            vs {formatCurrency(totalSales.previous)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SalesOverview;
