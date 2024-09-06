//Date Manipulation: Given a list of date strings in the format 'YYYY-MM-DD',
 //use map to extract the month from each date, filter to keep only dates from specific months, 
 //and reduce to count the occurrences of each month.

 const dateStrings = ['2024-01-15', '2024-02-20', '2024-01-25', '2024-03-10'];
 const manipulation= dateStrings.map((date)=> new Date(date).getMonth()+1).filter((month)=>month==1).reduce((ac,cr)=>ac+cr)
 console.log("the month is",manipulation);
 
 //Matrix Operations: Given a list of lists representing a matrix, use map to transpose the matrix,
  //filter to remove rows that sum to zero, and reduce to compute the sum of all elements in the resulting matrix.
 //  const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
 // const transpose=matrix.map(([row,numclm])=> [index])
 // const transpose=matrix.map((row)=>row[colmindex]
 
 
 