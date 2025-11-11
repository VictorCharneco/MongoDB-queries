//Use this file to define indexes for your queries
db.restaurants.createIndex({ "address.coord": "2dsphere" });
db.restaurants.createIndex({ grades.score: 1 });
db.restaurants.createIndex({ borough: 1 });
