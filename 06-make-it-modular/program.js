var fileFilter = require('./file-filter.js');

var directory = process.argv[2];
var extension = process.argv[3];

fileFilter(directory, extension, function(err, data){
  if(err){
    console.error(err);
  } else {
    data.forEach(function(file){
      console.log(file);
    })
  }
})

