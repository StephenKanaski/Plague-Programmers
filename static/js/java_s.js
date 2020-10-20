function getPlot(state) {
    d3.json('data').then((data) => {
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
    })
};

// var width = 960;
// var height = 500;

// var svg = d3.select("svg")
//   .attr("width", width)
//   .attr("height", height);

// var path = d3.geoPath();

// var file = "https://d3js.org/us-10m.v1.json"
// var promises = []

// file.forEach(function(url) {
//   promises.push(d3.json(url))
// });
// Promises.all(promises).then(function(values) {
//   console.log(values)
// });

// d3.queue()
//   .defer(d3.json, "https://d3js.org/us-10m.v1.json")
//   .await(ready);

// function ready(error, us) {
//   if (error) throw error;

//   svg.append("g")
//     .attr("class", "counties")
//     .selectAll("path")
//     .data(topojson.feature(us, us.objects.states).features)
//     .enter().append("path")
//     // .attr("")

//   svg.append("path")
//     .datum(topojson.mesh(us, us.objects.states, function(a, b) {return a !== b;}))
//     .attr("class", "states");
// }

// Width and height of map
// var width = 960;
// var height = 500;

// // D3 Projection
// var projection = d3.geo.albersUsa()
//     .translate([width/2, height/2])
//     .scale([1000]);

// var svg = d3.select("#myMap")
//     .append("svg")
//     .attr("width", width)    
//     .attr("height", height)

// d3.csv("/covid_cases.csv").then(function(data) {
//   console.log(data[0]);
// });

var w = 500;
var h = 300;

var projection = d3.geoAlbersUsa()
  .translate([w/2, h/2])
  .scale([500]);

var path = d3.geoPath()
  .projection(projection);

var color = d3.scaleQuantize()
  .range(["rgb(237,248,233)","rgb(186,228,179)","rgb(116,196,118)","rgb(49,163,84)","rgb(0,109,44)"]);

var svg = d3.select("body")
  .append("svg")
  .attr("width", w)
  .attr("height", h);

d3.csv("covid_cases.csv", function(data) {
  color.domain([
    d3.min(data, function(d) { return d.value; }),
    d3.max(data, function(d) { return d.value; })
  ]);
  d3.json()
})
