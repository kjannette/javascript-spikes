const commandLineArgs = require('command-line-args')

const optionDefinitions = [
    { name: "integer", alias: "i", type: Number}
]

const options = commandLineArgs(optionDefinitions);

num = options.integer

const timesTen = (number) => num * 10;

console.log(timesTen(num))
