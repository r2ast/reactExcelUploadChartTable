import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import "./style.css";
import "chart.js/auto";

const ChartsData = ({ excelData }) => {
  const [chartData, setChartData] = useState(null);
  const [chart, setChart] = useState(null);

  useEffect(() => {
    if (chart) {
      chart.destroy();
    }

    if (excelData && excelData.length > 0) {
      const labels = excelData.map((data) => data.Month);
      const primaryProductData = excelData.map((data) => data.Primary_product);
      const secondaryProductData = excelData.map(
        (data) => data.Secondary_product
      );

      setChartData({
        labels: labels,
        datasets: [
          {
            label: "Primary Product",
            data: primaryProductData,
            backgroundColor: "rgba(255, 99, 132, 0.6)",
          },
          {
            label: "Secondary Product",
            data: secondaryProductData,
            backgroundColor: "rgba(54, 162, 235, 0.6)",
          },
        ],
      });
    }
  }, [excelData]);

  return (
    <div className="chart-container">
      {chartData && (
        <Bar data={chartData} ref={(ref) => setChart(ref?.chartInstance)} />
      )}
    </div>
  );
};

export default ChartsData;
