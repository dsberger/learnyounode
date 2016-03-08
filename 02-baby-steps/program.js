var processArgs = process.argv;

var sum = 0;

for(var i = 2; i < processArgs.length; i++){
  sum += parseInt(processArgs[i]);
};

console.log(sum);
