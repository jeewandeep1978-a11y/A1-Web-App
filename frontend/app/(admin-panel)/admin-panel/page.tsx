import { ContentLayout } from "@/components/custom/admin-panel/contentLayout";
import { DateRangeForm } from "./DateRangeForm";
import { StatsDisplay } from "./StatsDisplay";
import { getDashboardData } from "@/lib/data";
import DashboardCharts from "@/app/(admin-panel)/admin-panel/DashboardCharts";

const Dashboard = async ({
  searchParams,
}: {
  searchParams?: { startDate?: string; endDate?: string };
}) => {
  // ✅ Parse searchParams safely
  const startDate = searchParams?.startDate ?? new Date().toISOString().split("T")[0];
  const endDate = searchParams?.endDate ?? new Date().toISOString().split("T")[0];

  // ✅ Fetch data for selected range
  const data = await getDashboardData(startDate, endDate);

  return (
    <ContentLayout title="Dashboard">
      <div className="space-y-6">
        {/* Date Filter */}
        <DateRangeForm />

        {/* Chart Section */}
        <DashboardCharts
          data={data.graphData}
          startDate={startDate}
          endDate={endDate}
        />

        {/* Stats Section */}
        <StatsDisplay data={data} />
      </div>
    </ContentLayout>
  );
};

export default Dashboard;
