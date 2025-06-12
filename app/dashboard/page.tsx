import {
  monthlyRevenue,
  topProducts,
  recentTransactions,
  totalSales,
} from "../data/mockData";
import SalesOverview from "../components/SalesOverview";
import RevenueChart from "../components/RevenueChart";
import TopProducts from "../components/TopProducts";
import RecentTransactions from "../components/RecentTransactions";

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Sales Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <SalesOverview totalSales={totalSales} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Monthly Revenue</h2>
            <RevenueChart data={monthlyRevenue} />
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Top 5 Products</h2>
            <TopProducts products={topProducts} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
          <RecentTransactions transactions={recentTransactions} />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
