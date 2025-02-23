import { useSelector } from "react-redux";
import { RootState } from "../store";
import BarChartComponent from "./charts/BarChartComponent";
import PieChartComponent from "./charts/PieChartComponent";
import LineChartComponent from "./charts/LineChartComponent";
import "../styles/Dashboard.scss";

const Dashboard = () => {
  const { 
    categoryDistribution, 
    responseTimes, 
    userSatisfaction, 
    usageStatistics, 
    isLoading, 
    errorMessage 
  } = useSelector((state: RootState) => state.aiData);

  // Safely handle potential null or undefined values
  const categoryData =
    categoryDistribution &&
    Object.keys(categoryDistribution).map((key) => ({
      category: key.replace("_", " "),
      count: categoryDistribution[key as keyof typeof categoryDistribution],
    }));

  const dailyResponseData =
    responseTimes?.day_wise?.map((item) => {
      const updatedItem: { [key: string]: any } = {};
      Object.keys(item).forEach((key) => {
        const updatedKey = key.replace(/_/g, " ");
        updatedItem[updatedKey] = item[key as keyof typeof item];
      });
      return updatedItem;
    }) || [];

  const weeklyResponseData =
    responseTimes?.week_wise?.map((item) => {
      const updatedItem: { [key: string]: any } = {};
      Object.keys(item).forEach((key) => {
        const updatedKey = key.replace(/_/g, " ");
        updatedItem[updatedKey] = item[key as keyof typeof item];
      });
      return updatedItem;
    }) || [];

  const satisfactionData = userSatisfaction?.ratings || [];
  const platformUsageData = usageStatistics?.by_platform || {};
  const countryDistributionData = usageStatistics?.by_country || {};

  const pieColors = ["#3b20d6", "#ff7300", "#ffbf00", '#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  const primaryColor = "#3b20d6"

  return (
    <div className="dashboard-container">
      {/* Display loading spinner if data is loading */}
      {isLoading && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}

      {/* Display error message if there's an error */}
      {errorMessage && (
        <div className="error-message">
          <p>{errorMessage}</p>
        </div>
      )}

      {/* If data is not loading and no error, display the charts */}
      {!isLoading && !errorMessage && (
        <div className="grid">
          {categoryData && (
            <BarChartComponent
              data={categoryData}
              xDataKey="category"
              yDataKey="count"
              title="Category Distribution"
              fillColor={primaryColor}
              isCartesian={true}
            />
          )}
          <PieChartComponent
            data={satisfactionData}
            dataKey="count"
            nameKey="rating"
            title="User Satisfaction"
            innerRadius={55}
            outerRadius={80}
            colors={pieColors}
            customLabel={({ name }) => `${name}⭐`}
            paddingAngle={4}
          />
          <LineChartComponent
            data={dailyResponseData}
            xDataKey="date"
            yDataKey="average time"
            title="Daily Response Time"
            strokeColor={primaryColor}
            isCartesian={false}
          />
          <LineChartComponent
            data={weeklyResponseData}
            xDataKey="week"
            yDataKey="average time"
            title="Weekly Response Time"
            strokeColor={primaryColor}
            isCartesian={true}
          />
          <PieChartComponent
            data={Object.entries(platformUsageData).map(([platform, count]) => ({
              platform,
              count,
            }))}
            dataKey="count"
            nameKey="platform"
            title="Platform Usage"
            colors={pieColors}
            innerRadius={0}
            outerRadius={80}
            customLabel={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
          />
          <BarChartComponent
            data={Object.entries(countryDistributionData).map(
              ([country, count]) => ({ country, count })
            )}
            xDataKey="country"
            yDataKey="count"
            title="Country Distribution"
            fillColor={primaryColor}
            isCartesian={false}
          />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
