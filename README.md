# Plague-Programmers

## Dataset
With no publicly available federal database, The New York Times (NYT) has created a database that attempts to track every known US Covid-19 case and death by aggregating and cross-referencing State and County reported data. 

NYT Article Explaining the Project: https://www.nytimes.com/article/coronavirus-county-data-us.html

Github with Info: 
https://github.com/nytimes/covid-19-data


## Data loading and Site Creation
We used Flask as our web framework with the following routes. 
* / - loaded the CSV into a MongoDB collection 
* */data - pulled the data from MongoDB collection and hosts it on the site as JSON 
* /home - html rendered template that contains links to the 3 visualization pages
* Visualization Pages (/vis_1, /vis_2, /vis_3)
    * Pulls data from /data
    * Renders HTML from Template
    * Uses different JS libraries to plot the data
    * Plots can be dynamically updated with dropdown menu powered by JS

## Analysis 
State-level Covid-19 cases and death data was downloaded from the NYT database (CSV) and we performed three different analyses: 

1) Covid Deaths by Month 
* Visualization = Bar Graph
* Filterable by State
* JS Library = Plotly

2) Covid Cases by Date
* Visualization = Line Graph
* Filterable by State
* JS Library = Chart.js

3) Covid Deaths by State
* Visualization = Bar Graph
* Filterable by Month
* JS Library = Plotly


## Deliverables
* Flask App = yes
* HTML, CSS, Javascript = yes
* Database = yes, MongoDB 
* Uncovered JS Library = yes, Chart.JS
* Dataset with at least 100 records = yes
* User Driven Interaction = yes, dropdown filters
* At least 3 views = yes
