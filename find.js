/*
read command line args
open the starting path
recurse into the directories
Handle -file to match a file
handle -print to print them out
*/

const fs = require('fs')

const cli = require('command-line-args');

const optionDefinitions = [
    {name: "file", alias: "f", type: String},
    {name: "path", alias: "p", type: String}
];

const options = cli(optionDefinitions);

const file = options.file
const path = options.path

fs.readdir(path, function(err, items) {
    items.forEach(function(item){
        if (item == file) {
            console.log(item)
        }
    })
})
