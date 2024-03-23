import React from "react";
import "./style.css";

const ExcelDataTable = ({ excelData }) => {
  if (!excelData || excelData.length === 0) {
    return <div>No File is uploaded yet!</div>;
  }

  // Function to format the header key
  const formatHeaderKey = (key) => {
    return key.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  };

  const keys = Object.keys(excelData[0]);

  return (
    <div className="viewer-wrapper">
      <div className="table-container">
        <div className="table-responsive">
          <table className="table">
            <thead className="header">
              <tr>
                {keys.map((key) => (
                  <th key={key}>{formatHeaderKey(key)}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {excelData.map((individualExcelData, index) => (
                <tr key={index}>
                  {keys.map((key) => (
                    <td key={key}>{individualExcelData[key]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ExcelDataTable;
