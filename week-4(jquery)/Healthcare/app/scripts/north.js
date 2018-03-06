
function visualize(readings,typeOfChart,id,myLabel){
  //console.log("enter visualize");
  let passId= "#"+id;
  let ctx4 =$(passId)
  //console.log("here is ctx"+ctx4);

  let fourthChart = new Chart(ctx4, {
    type: typeOfChart,
    data: {
      labels: ["April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "March"],
      datasets: [{
        label: myLabel,
        data: readings,
        backgroundColor:color(typeOfChart),
        borderColor: [
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1
      }]
    },
    options: {
      title: { display: true, text: myLabel +' 2015-2016' },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });

}

function color(typeOfChart){
  let arrayColor= new Array();

  if(typeOfChart=='pie'||typeOfChart=='doughnut'||typeOfChart=='bar'){
    let i =0;
    let b ='rgba(' + Math.floor((Math.random() * 255)) + ','
      + Math.floor((Math.random() * 255)) + ',' + Math.floor((Math.random() * 255)) + ',' + 1 + ')';
    while(i<12) {
     i++;
     if(typeOfChart==='bar'){
       arrayColor.push(b);

     }
      else {
       arrayColor.push('rgba(' + Math.floor((Math.random() * 255)) + ','
         + Math.floor((Math.random() * 255)) + ',' + Math.floor((Math.random() * 255)) + ',' + 1 + ')');
     }

    }

    return arrayColor;

  }
  if(typeOfChart==='line'){
   arrayColor.push('rgba('+Math.floor((Math.random()*255))+','
     +Math.floor((Math.random( )*255))+','+Math.floor((Math.random()*255))+','+1+')');
   // console.log(arrayColor);
   return arrayColor;
  }

}


function showChart(num) {
  //console.log("enter showchart");
  var measles = new Array();
  var polio = new Array();
  var liveBirthData = new Array();
  var dentalPatients = new Array();

  function transform(j) {
    // Yay, `j` is a JavaScript object
    // console.log(j[0]);
    //console.log("enter transform");
    let i = 6, k = 0;
    while (k < 12) {
      // console.log("hello");
      //console.log(j[35][i]);
      liveBirthData.push(Math.abs(j[35][i]));
      dentalPatients.push(Math.abs(j[190][i]));
      polio.push(Math.abs(j[150][i]));
      measles.push(Math.abs(j[151][i]));
      k++;
      i = i + 3;
    }
    visualize(measles, 'line', 'Ddisease', 'number of children age < 5 years having Measles ');
    visualize(polio, 'pie', 'Cdisease', 'number of children age< 5 years having Polio');
    visualize(liveBirthData, 'bar', 'Adisease', 'number of Live birth');
    visualize(dentalPatients, 'doughnut', 'Bdisease', 'number of Dental patients');
  }

  let urlContainer=[
    'https://data.gov.in/node/4015201/datastore/export/json',
    'https://data.gov.in/node/4015281/datastore/export/json',
    'https://data.gov.in/node/4015121/datastore/export/json',
    'https://data.gov.in/node/4015301/datastore/export/json',
  ]

  let index=num-1;
    $.getJSON(urlContainer[index],function(data){
      //console.log(urlContainer[index]);
    transform(data);
  })



}
