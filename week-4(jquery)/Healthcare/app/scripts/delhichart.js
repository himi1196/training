

 let getUrl=window.location.href;
//extract the variable to select which data to be displayed

 let newvariable = Number(getUrl.slice(-1));

 //function to show charts and defined in north.js
 showChart(newvariable);

