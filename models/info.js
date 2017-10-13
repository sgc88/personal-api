var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 var DestinationSchema = [
   {
   country : String,
   date : String,
   duration : String,
   photo : String
 }
]

var Desti = mongoose.model('Desti', DestinationSchema);
module.exports = Desti;
