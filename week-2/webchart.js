(function() {
    var httpRequest;
        httpRequest = new XMLHttpRequest();
        if (!httpRequest) {
            alert('Giving up :( Cannot create an XMLHTTP instance');
            return false;
        }
        httpRequest.onreadystatechange = alertContents;
        httpRequest.open('GET', 'data.json');
        httpRequest.send();
        function loadjson(drawchart){
            var json1=JSON.parse(httpRequest.responseText);
            console.log("in load json");
            drawchart(json1);
        }

        function start(){
            loadjson(function(json1) {
                console.log(json1.cake[0]);
                console.log(json1.cake);
                //console.log(google.visualization);
                var data = google.visualization.arrayToDataTable(json1.cake);
                // Optional; add a title and set the width and height of the chart
                var options = {'title':'cake components', 'width':550, 'height':400};
                // Display the chart inside the <div> element with id="piechart"
                var chart = new google.visualization.PieChart(document.getElementById('numb1'));
                var chart1 = new google.visualization.BarChart(document.getElementById('numb2'));
                chart.draw(data, options);
                chart1.draw(data,options);
            });


        }
     function loadingchart(){
         google.charts.load('current', {'packages':['corechart']});
         console.log("in load chart");
         google.charts.setOnLoadCallback(start);
     }

    function alertContents() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                console.log("alert contents");
                loadingchart();
                } else {
                alert('There was a problem with the request.');
            }
        }
    }
})();