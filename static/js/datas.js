function getPlot(state) {
  d3.json('/data').then((data) => {
    // console.log(data)

    var areas = data.filter(s => s.state.toString() === state);
    console.log(areas)
  
    var dates = areas.map(area => area.date);
    console.log(dates)

    var cases = areas.map(area => area.cases);
    console.log(cases)

    var deaths = areas.map(area => area.deaths);
    console.log(deaths)

    var ctx = document.getElementById('myChart').getContext('2d');

    Chart.defaults.global.defaultFontFamily = 'sans-serif';
    Chart.defaults.global.defaultFontSize = 16;


    var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: dates,
        datasets: [{
            label: 'Covid Cases',
            backgroundColor: 'rgb(76, 175, 80)',
            borderColor: 'rgb(0, 0, 0)',
            // R:76, G:175, B:80
            data: cases
        }]
    },

    // Configuration options go here
    options: {
      // responsive: true,
			title: {
					display: true,
          text: 'Growth of Covid Cases by State',
          fontSize: 24
        },
        legend: {
          position: "bottom",
          align: "start"
      },
        scales: {
          xAxes: [{
            display: true,
						scaleLabel: {
							display: true,
              labelString: 'Dates',
              fontSize: 18,
              fontStyle: "bold"
						},
            ticks: {
              maxTicksLimit: 11
            }
          }],
          yAxes: [{
						display: true,
						scaleLabel: {
							display: true,
              labelString: 'Number of Cases',
              fontSize: 18,
              fontStyle: "bold"
						}
					}]
        }
    }   
  });
  });
};


window.addEventListener("load", function(){ getPlot("Alabama"); });

function optionChanged(state) {
    getPlot(state);
};












// d3.json('/data').then((data) => {
//       console.log(data)
//     });