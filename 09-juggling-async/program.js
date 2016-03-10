var http = require('http')
var bl = require('bl')

var urls = process.argv.slice(2)

var results = []
var count = 0

function printResults(){
  for(var i = 0; i < results.length; i++){
    console.log(results[i])
  }
}

function hitServer(index){
  http.get( urls[index], function(response){
    response.pipe(bl(function(err, data){
      if(err) { return console.error(err) }

      results[index] = data.toString()
      count++

      if(count === 3){
        printResults()
      }
    }))
  })
}

for(var i = 0; i < urls.length; i++){
  hitServer(i);
}
