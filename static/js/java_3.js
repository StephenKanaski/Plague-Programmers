// look at java one for ideas on how to bin everything

// d3.json('/data').then((data) => {
//     console.log(data)

// data.forEach((element) => {
//     if (element.date.substring(5,7) === "01") element.date = "January";
//     else if (element.date.substring(5,7) === "02") element.date = "February";
//     else if (element.date.substring(5,7) === "03") element.date = "March";
//     else if (element.date.substring(5,7) === "04") element.date = "April";
//     else if (element.date.substring(5,7) === "05") element.date = "May";
//     else if (element.date.substring(5,7) === "06") element.date = "June";
//     else if (element.date.substring(5,7) === "07") element.date = "July";
//     else if (element.date.substring(5,7) === "08") element.date = "August";
//     else if (element.date.substring(5,7) === "09") element.date = "September";
//     else if (element.date.substring(5,7) === "10") element.date = "October";
//     else if (element.date.substring(5,7) === "11") element.date = "November";
//     else if (element.date.substring(5,7) === "12") element.date = "December";
//     }),

// console.log(data)

// });



function getPlot(month) {
d3.json('/data').then((data) => {
    // console.log(data)

    data.forEach((element) => {
        if (element.date.substring(5,7) === "01") element.date = "January";
        else if (element.date.substring(5,7) === "02") element.date = "February";
        else if (element.date.substring(5,7) === "03") element.date = "March";
        else if (element.date.substring(5,7) === "04") element.date = "April";
        else if (element.date.substring(5,7) === "05") element.date = "May";
        else if (element.date.substring(5,7) === "06") element.date = "June";
        else if (element.date.substring(5,7) === "07") element.date = "July";
        else if (element.date.substring(5,7) === "08") element.date = "August";
        else if (element.date.substring(5,7) === "09") element.date = "September";
        else if (element.date.substring(5,7) === "10") element.date = "October";
        else if (element.date.substring(5,7) === "11") element.date = "November";
        else if (element.date.substring(5,7) === "12") element.date = "December";
        })

    var areas = data.filter(s => s.date.toString() === month);
    console.log(areas)
  
    var states = areas.map(area => area.state);
    console.log(states)

    var cases = areas.map(area => area.cases);
      console.log(cases)

    var deaths = areas.map(area => area.deaths);
    console.log(deaths)

    var data1 = [
        {
          x: states,
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
            automargin: true,
          title: {
            text: 'State',
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
      
      Plotly.newPlot('myDiv', data1, layout);
})}


window.addEventListener("load", function(){ getPlot("March"); });

function optionChanged(month) {
    getPlot(month);
};