function getMap(state) {
    d3.json('/data').then((data) => {
      // console.log(data)
  
      var locations = data.filter(s => s.state.toString() === state);
      console.log(locations)
    
      var covid_dates = locations.map(location => location.covid_date);
      console.log(covid_dates)

      var cleaned_dates = covid_dates.map(covid_date => covid_date.substring(5,7));
      console.log(cleaned_dates)

      cleaned_dates.forEach(function(item, i) { 
          if (item == "01") cleaned_dates[i] = "January"; 
          else if (item == "02") cleaned_dates[i] = "February";
          else if (item == "03") cleaned_dates[i] = "March";
          else if (item == "04") cleaned_dates[i] = "April";
          else if (item == "05") cleaned_dates[i] = "May";
          else if (item == "06") cleaned_dates[i] = "June";
          else if (item == "07") cleaned_dates[i] = "July";
          else if (item == "08") cleaned_dates[i] = "August";
          else if (item == "09") cleaned_dates[i] = "September";
          else if (item == "10") cleaned_dates[i] = "October";
          else if (item == "11") cleaned_dates[i] = "November";
          else if (item == "12") cleaned_dates[i] = "December";
        });
      console.log(cleaned_dates)
    
      var covid_cases = locations.map(location => location.covid_cases);
        console.log(covid_cases)
    })
};



// // Width and height of map
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

