function getPlot(state) {
    d3.json('/data').then((data) => {
      // console.log(data)
  
      var areas = data.filter(s => s.state.toString() === state);
    //   console.log(areas)
    
      var dates = areas.map(area => area.date);
      //console.log(dates)

      var datesArray = dates.map( dateString => new Date(dateString));
      //console.log(datesArray)

      var unix = datesArray.map(string => string.getTime());
      //console.log(unix)

      var cases = areas.map(area => area.cases);
        //console.log(cases)
  
      var deaths = areas.map(area => area.deaths);
      //console.log(deaths)

    //   var cal_data = unix.map(function(val1, index) {
    //     return {
    //       meta: val1,
    //       value: cases[index]
    //     };
    //   });

    //   console.log(cal_data);

//     var lab =["1","2","3"];
// var val = [42,55,51,22];

    var cal_array = [];
    for(var i=0; i<deaths.length; i++)  {
    cal_array.push({count: deaths[i], date: unix[i]});

    console.log(cal_array)
}

    // var cal_data = unix.map(function (value, index){
    //     return [value, cases[index]]
        
    // })
    // console.log(cal_data)

    $("#cal-heatmap").CalendarHeatmap(cal_array, {});
    
    
    
    
    
    
    
    
    
    
    // final_data = JSON.stringify(cal_data)
    // console.log(cal_data)


    // create the heatmap

    //   var cal = new CalHeatMap();
	//     cal.init({
	// 	data: cal_data
    //     });

    // var cal = new CalHeatMap();
    // cal.init({
	//     itemSelector: "#cal-heatmap",
	//     domain: "month",
	//     subDomain: "x_day",
	//     data: final_data,
	//     start: new Date(2020, 0, 1)
	    
    // })
   

})}



window.addEventListener("load", function(){ getPlot("Alabama"); });

function optionChanged(state) {
    getPlot(state);
};

