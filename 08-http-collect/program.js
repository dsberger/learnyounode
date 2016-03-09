const http = require('http')
const bl = require('bl')

const url = process.argv[2]

function print(response) {
  response.pipe(bl(function(err, data){
    const str = data.toString()
    console.log(str.length)
    console.log(str)
  }))
}

http.get(url, print)
