// Select the table element
const table = document.querySelector('table');

// Select all the rows in the table
const rows = table.querySelectorAll('tr');

// Create an empty array to store the table data
const data = [];

// Iterate over the rows starting from index 1
for (let i = 1; i < rows.length; i++) {
  const row = rows[i];
  
  // Access the data in each cell of the row
  const cells = row.querySelectorAll('td');
  
  // Create an empty array to store the row data
  const rowData = [];
  
  // Iterate over the cells and populate the rowData array
  for (let j = 1; j < 7; j++) {
    const cell = cells[j];
    const cellData = cell.textContent;
    
    // Add the cell data to the rowData array
    rowData.push(cellData);
  }
  
  // Add the rowData array to the data array
  data.push(rowData);
}

// Use the data array as needed
console.log(data);

// Create a new workbook
var workbook = XLSX.utils.book_new();


// Create a new worksheet
var worksheet = XLSX.utils.json_to_sheet(data);

// Add the worksheet to the workbook
XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

// Generate the Excel file
var excelFile = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });

// Convert the Excel file to a Blob
var blob = new Blob([excelFile], { type: 'application/octet-stream' });

// Create a download link
var link = document.createElement('a');
link.href = URL.createObjectURL(blob);
link.download = 'ReportRO.xlsx';

// Trigger the download
link.click();