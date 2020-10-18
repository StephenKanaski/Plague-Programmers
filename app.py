from flask import Flask, render_template, redirect, jsonify
from flask_pymongo import PyMongo
import csv
from pymongo import MongoClient
import json
from bson import json_util
from bson.json_util import dumps

app = Flask(__name__)

# Use flask_pymongo to set up mongo connection
mongo = PyMongo(app, uri="mongodb://localhost:27017/nyt")

# MONGOODB_HOST = 'localhost'
# MONGODB_PORT = 27017
# DBS_NAME = 'nyt'
# COLLECTION_NAME = 'covid'
FIELDS = {'date': True, 'county': True, 'state': True, 'fips': True, 'cases': True, 'deaths':True, '_id': False}



@app.route('/')
def db():
    data = []
    with open("us-states.csv") as file:
        filereader = csv.DictReader(file)
        for row in filereader:
            data.append(row)

    covidData = mongo.db.covid
    covidData.drop()
    covidData.insert_many(data)
    return redirect("/home")

@app.route('/home')
def home():
    # covidData = mongo.db.covid
    return render_template('home.html')

@app.route('/vis_1')
def vis_1():
    # covidData = mongo.db.covid
    return render_template('vis_1.html')

@app.route('/vis_2')
def vis_2():
    # covidData = mongo.db.covid
    return render_template('vis_2.html')

@app.route('/vis_3')
def vis_3():
    # covidData = mongo.db.covid
    return render_template('vis_3.html')

@app.route("/data")
def donorschoose_projects():
    covidData = mongo.db.covid
    projects = covidData.find({}, {"date":1, "county":1 , "state":1, "fips":1, "cases":1, "deaths":1, "_id":0})
    json_projects = []
    for project in projects:
        json_projects.append(project)
    json_projects = json.dumps(json_projects, default=json_util.default)
    #connection.close()
    return json_projects

if __name__ == '__main__':
    app.run(debug=True)

