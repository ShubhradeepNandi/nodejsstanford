var fs = require('fs');
var outfile = "helloStartup.txt";
var output = "A startup is a business built to grow rapidly.\n";
var out2 = "hello Subbu";
fs.writeFileSync(outfile,output);
fs.writeFileSync(outfile,out2);
