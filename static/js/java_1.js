function getPlot(state) {
    d3.json('/data').then((data) => {
      // console.log(data)
  
      var areas = data.filter(s => s.state.toString() === state);
    //   console.log(areas)
    
      var dates = areas.map(area => area.date);
      console.log(dates)

      var clean_dates = dates.map(date => date.substring(5,7));
      console.log(clean_dates)

      clean_dates.forEach(function(item, i) { 
          if (item == "01") clean_dates[i] = "January"; 
          else if (item == "02") clean_dates[i] = "February";
          else if (item == "03") clean_dates[i] = "March";
          else if (item == "04") clean_dates[i] = "April";
          else if (item == "05") clean_dates[i] = "May";
          else if (item == "06") clean_dates[i] = "June";
          else if (item == "07") clean_dates[i] = "July";
          else if (item == "08") clean_dates[i] = "August";
          else if (item == "09") clean_dates[i] = "September";
          else if (item == "10") clean_dates[i] = "October";
          else if (item == "11") clean_dates[i] = "November";
          else if (item == "12") clean_dates[i] = "December";
        });
      console.log(clean_dates)
    
      var cases = areas.map(area => area.cases);
        console.log(cases)
  
      var deaths = areas.map(area => area.deaths);
      console.log(deaths)

    //   var trace1 = {
    //     x: clean_dates,
    //     y: cases,
    //     name: 'Covid Cases',
    //     type: 'bar'
    //   };
      
    //   var trace2 = {
    //     x: clean_dates,
    //     y: deaths,
    //     name: 'Covid Deaths',
    //     type: 'bar'
    //   };
      
    //   var data = [trace1, trace2];
      
    //   var layout = {barmode: 'group'};
    
    // Plotly.newPlot('myDiv', data, layout);

    var data = [
        {
          x: clean_dates,
          y: deaths,
          type: 'bar',
          marker: {
            color: 'rgb(76, 175, 80)',
          },
        }
      ];

      var layout = {
        title: {
          text:'Covid Deaths',
          font: {
            family: 'sans-serif',
            size: 24
          },
          xref: 'paper',
          // x: 0.05,
          xanchor: "center", 
          yanchor: "top"
        },
        xaxis: {
          title: {
            text: 'Month',
            font: {
              family: 'sans-serif',
              size: 18,
              color: '#7f7f7f'
            }
          },
        },
        yaxis: {
          title: {
            text: 'Number of Deaths',
            font: {
              family: 'sans-serif',
              size: 18,
              color: '#7f7f7f'
            }
          }
        }
      };
      
      Plotly.newPlot('myDiv', data, layout);

})};


window.addEventListener("load", function(){ getPlot("Alabama"); });

function optionChanged(state) {
    getPlot(state);
};