// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var new_campsite = {description: "Sharp rocks. Middle of nowhere."}

db.Campsite.create(new_campsite, function(err, campsite){
  if (err){
    return console.log("Error:", err);
  }

  console.log("Created new campsite", campsite._id)
  process.exit(); // we're all done! Exit the program.
});
var destination = [
    {
      _id : 1,
      country :'Greece',
      date :'june 2014',
      duration :'10 days',
      photo :'imageUrl'

    },
    {
      _id : 2,
      country :'Italy/ Roma',
      date :'june 2015',
      duration :'10 days',
      photo :'imageUrl'
    },
    {
      _id : 3,
      country :'Bahamas/Exuma',
      date :'September 2016',
      duration :'8 days',
      photo :'imageUrl'
    },
    {
      _id : 4,
      country :'France/Paris',
      date :'September 2017',
      duration :'8 days',
      photo :'imageUrl'
    },
];
