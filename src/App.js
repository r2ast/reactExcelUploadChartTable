import React, { useState } from 'react';
import axios from 'axios';
import * as XLSX from 'xlsx';

import FileUploadForm from './Components/FileUploadForm';
import ExcelDataTable from './Components/ExcelDataTable';
import ErrorMessage from './Components/ErrorMessage';
import ChartsData from './Components/ChartsData';

function App() {
  const [excelData, setExcelData] = useState(null);
  const [typeError, setTypeError] = useState(null);

  const handleFileSubmit = async (selectedFile) => {
    let fileTypes = ['application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'text/csv'];
    if (selectedFile && fileTypes.includes(selectedFile.type)) {
      setTypeError(null);
      let reader = new FileReader();
      reader.readAsArrayBuffer(selectedFile);
      reader.onload = async (e) => {
        const workbook = XLSX.read(e.target.result, { type: 'buffer' });
        const worksheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[worksheetName];
        const data = XLSX.utils.sheet_to_json(worksheet);
        setExcelData(data.slice(0, data.length)); // limit to first n rows for testing

        // try {
        //   await axios.post('http://your-backend-url.com/upload', { excelData: data });
        //   console.log('Excel data sent to the backend successfully');
        // } catch (error) {
        //   console.error('Error sending excel data to the backend:', error);
        // }
      };
    } else {
      setTypeError('Please select only excel file types');
      setExcelData(null);
    }
  };

  return (
    <div className="wrapper">
      <h3>Upload & View Excel Sheets</h3>
      <FileUploadForm handleFileSubmit={handleFileSubmit} />
      <ErrorMessage typeError={typeError} />
      <ExcelDataTable excelData={excelData} />
      <ChartsData excelData={excelData} />
    </div>
  );
}

export default App;
