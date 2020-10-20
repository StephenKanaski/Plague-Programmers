// look at java one for ideas on how to bin everything
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
    })
};

var data = [{
    x: clean_dates,
    y: cases
}]
